import {constants, promises as fs} from 'fs';
import {join} from 'path';
import fg from 'fast-glob';
import {exec} from 'child_process';
import {Promise as BluebirdPromise} from 'bluebird';
import {ExecutorContext} from '@nrwl/devkit';
import yaml from 'js-yaml';
import {stringify} from 'yaml';
import {mkdirp} from 'mkdirp';
import {copy} from 'fs-extra';
import chalk from 'chalk';

import {TsConfig, Project, CloudBuildOptions} from './types';
import {getImports} from './utils';

const ENCODING = 'utf-8';

export default async function run<T extends CloudBuildOptions>(
  options: T,
  ctx: ExecutorContext,
): Promise<{success: true}> {
  const projectName = ctx?.projectName;
  if (projectName) {
    const sourceRoot = ctx.workspace?.projects[projectName]?.sourceRoot;
    if (sourceRoot) {
      const appFolderName = options.directory || 'app';
      const distributionFolder = options.distributionDirectory || 'dist';
      const path = join(ctx.cwd, sourceRoot, appFolderName);
      const appProjectPath = join(ctx.cwd, 'apps', projectName);
      const assetsPath = join(ctx.cwd, sourceRoot, 'assets');
      const functions = await fg([`**`], {
        onlyDirectories: true,
        deep: 0,
        cwd: path,
      });
      if (functions && functions.length) {
        console.log(
          chalk.bgBlack(chalk.greenBright(chalk.bold('Detected functions:'))),
        );
        for (const fn of functions) {
          console.log(` - ${fn}`);
        }
        let baseProject: Project = {
          parameters: {},
          environment: {},
          packages: [],
        };
        await BluebirdPromise.map(
          functions,
          async (fn) => {
            return new Promise(async (resolve) => {
              const environment: string[] = [];
              const fnRoot = join(path, fn);
              const fnEnvFile = join(appProjectPath, '.env.development');
              const projectPath = join(path, fn, 'project.yml');
              const fnTsPath = join(path, fn, 'tsconfig.json');
              const fnTsTmpPath = join(path, fn, 'tsconfig.ncc.json');
              const hasTsFile = await fs
                .access(fnTsPath, constants.F_OK)
                .then(() => true)
                .catch(() => false);
              const hasEnvFile = await fs
                .access(fnEnvFile, constants.F_OK)
                .then(() => true)
                .catch(() => false);
              const dependencies = await getImports(ctx, fnRoot);

              if (!hasTsFile) {
                throw new Error(`${fn}: cannot find tsconfig`);
              }

              if (hasEnvFile) {
                const env = await fs.readFile(fnEnvFile, ENCODING);
                if (env) {
                  environment.push(env);
                }
              }

              const config: TsConfig = JSON.parse(
                (await fs.readFile(fnTsPath, ENCODING)) || `{}`,
              );
              const functionProject: Project = yaml.load(
                await fs.readFile(projectPath, ENCODING),
              ) as Project;

              if (config.compilerOptions) {
                const fnPath = join(path, fn);
                const appPath = fnPath
                  .replace(appProjectPath, '')
                  .split('/')
                  .filter((val) => val != '')
                  .map(() => '../')
                  .join('');
                if (functionProject) {
                  const pkgName = functionProject.packages?.[0].name;
                  const pkgFnName =
                    functionProject.packages?.[0].functions?.[0].name;
                  if (pkgName && pkgFnName) {
                    baseProject = {
                      parameters: {
                        ...baseProject.parameters,
                        ...(functionProject.parameters || {}),
                      },
                      packages: [
                        ...baseProject.packages,
                        ...(functionProject.packages || []),
                      ],
                      environment: {
                        ...baseProject.environment,
                        ...(functionProject.environment || {}),
                      },
                    };
                    const pkgDirectoryPath = join(
                      appProjectPath,
                      distributionFolder,
                      'packages',
                      pkgName,
                      pkgFnName,
                    );
                    const pkgPath = join(pkgDirectoryPath, 'package.json');
                    await copy(assetsPath, join(pkgDirectoryPath, 'assets'));
                    if (dependencies && Object.keys(dependencies).length) {
                      await mkdirp(pkgDirectoryPath);
                      await fs.writeFile(
                        pkgPath,
                        JSON.stringify(
                          {
                            dependencies,
                          },
                          null,
                          2,
                        ),
                        ENCODING,
                      );
                    }
                    config.compilerOptions.outDir = join(
                      appPath,
                      distributionFolder,
                      'packages',
                      pkgName,
                      pkgFnName,
                    );
                    await fs.rename(fnTsPath, fnTsTmpPath);
                    await fs.writeFile(
                      fnTsPath,
                      JSON.stringify(config, null, 2),
                      ENCODING,
                    );
                    const packageTsConfigPath = join(
                      pkgDirectoryPath,
                      'tsconfig.json',
                    );
                    if (config.extends) {
                      const fnRootTsConfigPath = join(path, fn, config.extends);
                      const fnRootTsConfig: TsConfig = JSON.parse(
                        (await fs.readFile(fnRootTsConfigPath, ENCODING)) ||
                          '{}',
                      );
                      if (fnRootTsConfig.extends) {
                        delete fnRootTsConfig.extends;
                      }
                      const tsconfig: TsConfig = <TsConfig>{
                        compilerOptions: {
                          baseUrl: './',
                          paths: {
                            ...(config.compilerOptions?.paths || {}),
                            ...(fnRootTsConfig.compilerOptions?.paths || {}),
                          },
                        },
                      };
                      await fs.writeFile(
                        packageTsConfigPath,
                        JSON.stringify(tsconfig, null, 2),
                        ENCODING,
                      );
                    }
                    const process = exec(
                      `cd ${fnRoot} && npx ncc build src/index.ts -o ${pkgDirectoryPath}`,
                    );
                    process.stdout?.on('data', (data) => {
                      const msg = data.split('\n');
                      for (const message of msg) {
                        if (message.includes('ncc')) {
                          console.log(message);
                        }
                      }
                    });
                    process.on('exit', async () => {
                      const distProjectPath = join(
                        appProjectPath,
                        distributionFolder,
                        'project.yml',
                      );
                      const distEnvPath = join(
                        appProjectPath,
                        distributionFolder,
                        'packages',
                        '.env',
                      );
                      const distTsConfigPath = join(
                        appProjectPath,
                        distributionFolder,
                        'packages',
                        'tsconfig.json',
                      );
                      await fs.writeFile(
                        distProjectPath,
                        stringify(baseProject),
                        ENCODING,
                      );
                      await fs.rm(fnTsPath);
                      await fs.rename(fnTsTmpPath, fnTsPath);
                      await fs.writeFile(distTsConfigPath, `{}`, ENCODING);
                      if (environment.length) {
                        await fs.writeFile(
                          distEnvPath,
                          environment.join('\r\n'),
                          ENCODING,
                        );
                      }
                      resolve(true);
                    });
                  }
                }
              }
              return Promise.resolve(true);
            });
          },
          {concurrency: 3},
        );
      }
    }
  }
  return Promise.resolve({success: true});
}
