# syntax=docker/dockerfile:experimental

FROM node:8

COPY package.json ./

RUN --mount=type=cache,target=./node_modules npm install
