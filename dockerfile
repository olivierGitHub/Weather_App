FROM debian:jessie
RUN apt-get update -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
COPY package.json /src/package.json
RUN cd /src
RUN npm install --production
COPY . /src
EXPOSE 3000
CMD ["node", "/src/bin/www"]