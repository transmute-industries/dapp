
FROM node

EXPOSE 3000

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN rm -rf node_modules src/contracts
RUN npm install 
RUN npm install -g truffle

CMD truffle migrate && npm run move-contracts && npm start
