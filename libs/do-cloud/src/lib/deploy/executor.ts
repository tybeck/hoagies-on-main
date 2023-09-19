import { ExecutorContext } from '@nrwl/devkit';
import { join } from 'path';
import { promises as fs } from 'fs';
import { spawn } from 'child_process';

export type DoCloudDeployOptions = {
  distributionDirectory?: string;
};

export default async function run<T extends DoCloudDeployOptions>(
  options: T,
  ctx: ExecutorContext
): Promise<{ success: true }> {
  const projectName = ctx?.projectName;
  if (projectName) {
    const distributionFolder = options.distributionDirectory || 'dist';
    const projectPath = join(ctx.cwd, 'apps', projectName);
    const distributionPath = join(
      ctx.cwd,
      'apps',
      projectName,
      distributionFolder
    );
    const hasDistributionFolder = await fs
      .stat(distributionPath)
      .then(() => true)
      .catch(() => false);
    if (hasDistributionFolder) {
      return new Promise((resolve) => {
        const projectProcess = spawn(`cd ${projectPath} && sls deploy`, {
          stdio: 'inherit',
          shell: true,
        });
        projectProcess.on('exit', async () => {
          resolve({ success: true });
        });
      });
    }
    throw new Error(
      'Cannot find distribution folder; please build the project first.'
    );
  }
  return Promise.resolve({ success: true });
}
