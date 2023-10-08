import {join} from 'path';
import {readFileSync} from 'fs';
import {register} from 'tsconfig-paths';

const baseUrl = join(__dirname, '../../');
const config = JSON.parse(
  readFileSync(join(baseUrl, 'tsconfig.json'), 'utf-8') || `{}`,
);

register({
  baseUrl,
  paths: config?.compilerOptions?.paths || {},
});
