FROM debian:buster

RUN apt-get update \
	&& apt-get install -y curl git\
	&& curl -sL https://deb.nodesource.com/setup_14.x | bash - \
	&& apt-get install -y nodejs
WORKDIR /home/svelte
EXPOSE 8181
ENTRYPOINT npm run dev
