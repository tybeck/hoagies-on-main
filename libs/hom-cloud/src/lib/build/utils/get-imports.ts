import {ExecutorContext} from '@nrwl/devkit';
import {join} from 'path';
import {constants, promises as fs} from 'fs';
import {PackageJson} from 'nx/src/utils/package-json';
import fg from 'fast-glob';
import {Promise as BluebirdPromise} from 'bluebird';

import {getPaths} from './get-paths';

export const getImports = async (ctx: ExecutorContext, root: string) => {
  const fnPkgPath = join(root, 'package.json');
  const pkgPath = join(ctx.cwd, 'package.json');
  const hasPkg = await fs
    .access(pkgPath, constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (hasPkg) {
    const projectPkg = await fs.readFile(pkgPath, 'utf-8');
    const hasFunctionPkg = await fs
      .access(fnPkgPath, constants.F_OK)
      .then(() => true)
      .catch(() => false);
    let dependencies: string[] = [];
    if (projectPkg) {
      const pkg: PackageJson = JSON.parse(projectPkg);
      if (pkg) {
        const files = await fg([`${root}/**/*.ts`]);
        if (hasFunctionPkg) {
          const functionPkg = await fs.readFile(fnPkgPath, 'utf-8');
          if (functionPkg) {
            const fnPkg: PackageJson = JSON.parse(functionPkg);
            const fnDependencyKeys = Object.keys(fnPkg.dependencies || {});
            if (fnPkg && fnDependencyKeys.length) {
              for (const fnDependencyKey of fnDependencyKeys) {
                dependencies.push(fnDependencyKey);
              }
            }
          }
        }
        dependencies = [
          ...dependencies,
          ...new Set(
            (
              await BluebirdPromise.map(files, async (file) => {
                const contents = await fs.readFile(file, 'utf-8');
                return getPaths(contents);
              })
            ).flat(),
          ),
        ];
        return dependencies
          .filter((dependency) => pkg.dependencies?.[dependency] !== undefined)
          .map((dependency) => {
            const version = pkg.dependencies![dependency];
            return {
              [dependency]: version,
            };
          })
          .reduce((obj, pkg) => {
            const key = Object.keys(pkg)[0];
            return {
              ...obj,
              [key]: pkg[key],
            };
          });
      }
    }
  }
  return {};
};
