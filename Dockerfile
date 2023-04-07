FROM node:18-alpine

WORKDIR /app

COPY . .

WORKDIR /app/app

RUN yarn

EXPOSE 4000
