# Webpack React Starter


## Table of contents

* [Features](#user-content-features)
* [Git clone or download](#user-content-git-clone-or-download)
* [Setup](#user-content-setup)
* [npm tasks](#user-content-npm-tasks)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Build application](#user-content-build-application)
* [Build application in production mode](#user-content-build-application-in-production-mode)
* [Changelog](#user-content-changelog)


## Features

- [x] Webpack 3 (development and production config)
- [x] Hot reloading
- [x] Babel - Transpile the JS from ES6/7 down to machine optimised ES5
- [x] SASS with autoprefixing
- [x] Linting (ESlint + airbnb-base) - Lint the JS/JSX with errors and warnings to the terminal ()
- [x] Move image files into public
- [x] Minification javascript & css


## Git clone or download

Go to https://github.com/gyver98/webpack-react-starter

Then grab the project from the repo.

## Setup

Tested with node 9.x

Install the packages the project needs.

```
$ npm install
```
or 
```
$ yarn
```

## npm tasks

* `start` - starts app in development mode, using webpack dev server

* `build` - builds application in development mode

* `production` - builds application in production mode

## Running in dev mode

```
$ npm run start
```
or
```
$ yarn start
```

Visit `http://localhost:8080/` from your browser of choice.

## Build application

Build will be placed in the `public` folder without minification.
* bundle.js
* styles.css
* image files

```
$ npm run build
```
or
```
$ yarn build
```

## Build application in production mode

Build will be placed in the `public` folder with minification.
* bundle.js
* styles.css
* image files

```
$ npm run production
```
or
```
$ yarn production
```


## Changelog

#### 0.0.1

Initial release
