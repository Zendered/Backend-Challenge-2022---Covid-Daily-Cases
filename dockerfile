FROM node:16
WORKDIR /usr/src/covid-daily-cases
COPY ./package.json .
RUN npm i --only=prod