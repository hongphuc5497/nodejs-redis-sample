# syntax=docker/dockerfile:1

FROM node:17-alpine as DEV

WORKDIR /app

RUN pwd

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "start"]
