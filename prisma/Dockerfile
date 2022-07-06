FROM node:latest

WORKDIR /home/prisma
EXPOSE 4466 5555
ENTRYPOINT npm install && npx prisma studio --browser none
