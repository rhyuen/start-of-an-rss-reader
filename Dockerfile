FROM mhart/alpine-node:6
MAINTAINER rhyuen@github.io
COPY package.json .
RUN npm install
COPY . .
EXPOSE 6567 6567
CMD ["yarn", "start"]
