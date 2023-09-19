import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  modulePathIgnorePatterns: [
    '<rootDir>/libs/do-cloud/dist',
    '<rootDir>/../../libs/do-cloud/dist',
  ],
};
