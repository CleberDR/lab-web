FROM node:14.16.1

WORKDIR ./

COPY . .

COPY package*.json ./

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
