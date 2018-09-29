FROM node:10.11-alpine

WORKDIR /usr/app
COPY . .

RUN npm install

EXPOSE $PORT

CMD [ "npm", "run", "start" ]
