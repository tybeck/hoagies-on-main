import {CompilerOptions, TypeAcquisition} from 'typescript';

export type CloudBuildOptions = {
  directory?: string;
  distributionDirectory?: string;
};

export type TsConfig = TypeAcquisition & {
  compilerOptions: CompilerOptions;
  extends?: string;
};

export type Project = {
  parameters: any;
  packages: Package[];
  environment: {
    [key: string]: string;
  };
};

export type Package = {
  name: string;
  environment: any;
  parameters: any;
  annotations: any;
  functions: Function[];
};

export type Function = {
  name: string;
};
