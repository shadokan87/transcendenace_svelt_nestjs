FROM node:latest

WORKDIR /home/nest
COPY .env ../.
EXPOSE 3000 5555
ENTRYPOINT npm install --legacy-peer-deps && cp ../.env . && npx prisma migrate deploy && npm run start:dev
