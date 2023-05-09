FROM node:16.3.0-alpine

WORKDIR /usr/api

COPY package.json .

RUN npm install -g npm@8.3.1

COPY . .

CMD npm install
