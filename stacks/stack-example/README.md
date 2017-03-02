# ng-seed
egen.io

## Table of Contents

  1. [Prerequisites](#prerequisites)
  2. [Installation](#installation)
  3. [Run](#run)
  
## Prerequisites

1\. Install [Node.js](http://nodejs.org). You should have the latest node and npm versions or you will get an npm error. 
    `>= npm 2.14.7, node 4.2.1`

2\. Install these NPM packages globally

```bash
npm install -g bower gulp
```

## Installation 
Run following commands in a terminal, install all the latest packages if asked for different versions.

```bash
npm install
```

## Run

* `gulp` or `gulp build` to build an optimized version of app 
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma

## Features:
1. Uses configurable and modular `gulp` build system.
2. Uses `Font-Awesome` and `bootstrap glyphicons`.
3. Configurable `API_PROXY` that can be switched to different environments using `--proxy` option.
