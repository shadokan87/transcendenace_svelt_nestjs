FROM node:latest

WORKDIR /home/svelte
EXPOSE 8181
ENTRYPOINT touch /root/.node_modules \
&& chmod 777 /root /root/.node_modules /root/.npm/_lo* \
&& npm install && npm run dev
