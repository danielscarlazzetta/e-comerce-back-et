<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```




## Install

npm i @nestjs/mongoose

npm i @nestjs/config

npm install --save multer @nestjs/platform-express


postman

post
localhost:3000/producto?name=peo&image=peo&price=321
{
    "name" : "zapatilla",
    "image" : "urlx",
    "price" : 123,
    "amount" : 20
}

get
localhost:3000/producto/

get id
localhost:3000/producto/65721b448088e7352d272f70

patch
localhost:3000/producto/65721bc8b45f1c6e9ad9f860

{
    "amount" : 20
}

del
localhost:3000/producto/657212edcdce0eb75b49d986

cart
post
localhost:3000/cart/add/65721430cdce0eb75b49d989

getCart
localhost:3000/cart/contents

remove
localhost:3000/cart/remove/