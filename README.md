# Transmute Web App Starter Kit

[![Build Status](https://travis-ci.org/transmute-industries/dapp.svg?branch=master)](https://travis-ci.org/transmute-industries/dapp)

This project is under construction. 
There is a lot of extraneous code, which is meant to be used for reference. 


## Dependencies

- https://www.docker.com/
- https://ipfs.io/docs/getting-started/


### Run with docker

```
$ npm run docker:build
$ npm run docker:run
```

- http://localhost:3000/dapp


### Run without docker
```
$ git clone https://github.com/transmute-industries/dapp.git
$ cd dapp
$ npm install
$ npm run transmute test
$ npm run ipfs
$ npm run testrpc
$ npm run migrate
$ npm run start
```