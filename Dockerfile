FROM node:18.13-alpine3.17
WORKDIR /hom
COPY . .
RUN apk add --no-cache --virtual .gyp g++ make ph3-pip \
    && yarn install --ignore-engines \
    && apk del .gyp \
CMD ["npx", "nx", "serve:local", "functions"]