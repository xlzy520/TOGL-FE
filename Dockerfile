# Base image
FROM node:16-alpine as base

WORKDIR /usr/src/app

FROM base as production
COPY . .

RUN npm install
RUN npm run build
RUN npm run start
