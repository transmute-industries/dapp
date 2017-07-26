
FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 3000

RUN npm install 
RUN npm install -g truffle

CMD truffle migrate && npm run move-contracts && npm start
