# Transmute dApp

This project is deprecated. See https://github.com/transmute-industries/transmute-dapp

[![Build Status](https://travis-ci.org/transmute-industries/dapp.svg?branch=master)](https://travis-ci.org/transmute-industries/dapp)
[![Coverage Status](https://coveralls.io/repos/github/transmute-industries/dapp/badge.svg?branch=master)](https://coveralls.io/github/transmute-industries/dapp?branch=master)

Create an issue if you want a feature or need help!

Please fork and submit PRs!

You will need to install NodeJS - https://nodejs.org/en/

### Austin Ethereum Meetup 

- [Slides](https://docs.google.com/presentation/d/1LCgV4OQGAY7fFU1kpY4ZHmqO0c0o7MNXWPNZoTjCdJc/edit#slide=id.g23ff527f6a_0_238)
- [Video](https://www.youtube.com/watch?v=vYjkoFVoBSQ)

## Docker

- Linux: https://docs.docker.com/engine/admin/#start-the-daemon-using-operating-system-utilities
- OSX / Windows: Make sure docker daemon is running!

### Just run
```
$ docker-compose up
```
### Build and run (slow)
```
$ docker-compose up --build
```

If you already had ipfs installed, you may need to `npm run ipfs:allow` this will add localhost:3000 to ipfs access control allow origin.

If everything works, the app will be available at:

- http://localhost:3000/dapp


### Run without docker

You will need to install https://ipfs.io/ & https://nodejs.org/en/

```
$ git clone https://github.com/transmute-industries/dapp.git
$ cd dapp
$ npm install -g truffle ethereumjs-testrpc
$ npm install
$ npm run ipfs
$ npm run testrpc
$ npm run test
$ npm run migrate
$ npm run start
```

### Features

- Docker with React Hot Module Reload!
- Jest and Truffle Tests
- TypeScript
- Redux + Transmute Framework (Redux for Smart Contracts)
