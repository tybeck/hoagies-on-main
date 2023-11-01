# Hoagies On Main

### Building dependent NX executors

To build, do the following:

```
    npx nx build hom-cloud
```

To link to local monorepo, do:

```
    cd libs/hom-cloud
    yalc publish
    cd ../../
    yalc add @hoagies-on-main/hom-cloud
```

This executor is responsible for building lambda functions.  To automate the process
of building the executors, locally "publishing" said executor(s), building the functions and
then removing the links created by publishing - we can run: `npx nx build:cloud:all functions`.  This
requires us to have `yalc` installed (`npm i yalc -g`).

### Building functions

To build `hom` functions, we'd run: `npx nx build:cloud functions`, this will tree-shake
everything that's unnecessary and include only what's needed for the lambda function to run.

For development purposes we can run `npx nx serve:local functions`, this will run all functions
locally.

### Deployment

TODO: Add info

To deploy to AWS using serverless framework, run `npx nx deploy:cloud functions`