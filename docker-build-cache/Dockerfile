# syntax=docker/dockerfile:experimental

FROM node:8

COPY package.json ./
COPY package-lock.json ./

RUN echo 'Install without cache'
RUN npm ci
RUN rm -rf ./node_modules
RUN rm -rf ~/.npm

RUN echo 'Install with ~.npm cache'
RUN --mount=type=cache,target=/root/.npm npm ci

RUN echo 'Install with node_modules cache'
RUN --mount=type=cache,target=/root/.npm npm install
