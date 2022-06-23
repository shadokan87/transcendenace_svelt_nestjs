FROM debian:buster

RUN apt-get update \
	&& apt-get install -y curl git\
	&& curl -sL https://deb.nodesource.com/setup_14.x | bash - \
	&& apt-get install -y nodejs
WORKDIR /home/chatServ
EXPOSE 3434
ENTRYPOINT npm run dev
