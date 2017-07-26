# Transmute Web App Starter Kit

# New Version! https://github.com/transmute-industries/dapp

[![Build Status](https://travis-ci.org/transmute-industries/web-app-starter-kit.svg?branch=master)](https://travis-ci.org/transmute-industries/web-app-starter-kit)

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

- http://localhost:3000/web-app-starter-kit


### Run without docker
```
$ git clone https://github.com/transmute-industries/web-app-starter-kit.git
$ cd web-app-starter-kit
$ npm install
$ npm run transmute test
$ npm run ipfs
$ npm run testrpc
$ npm run migrate
$ npm run start
```