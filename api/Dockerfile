FROM node:14.16.1

WORKDIR ./

COPY . .

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

##RUN npx prisma migrate dev --schema scr/prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "start:dev"]
