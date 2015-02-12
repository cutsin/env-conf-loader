# env-conf-loader

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

[中文文档](README.zh-CN.md)

## Why?

load configs from file/directory with current, merge object by object's key and environment variable.

## Install

```bash
npm install env-conf-loader
```

## Usage

```javascript
var loader = require('env-conf-loader')
```

### load a json file

foo.json
```json
{
  "bar": 0,
  "default": { "bar": 1 },
  "production": { "bar": 2, },
  "development": { "bar": 3, }
}
```

```javascript
var conf = loader('./foo.json')
// NODE_ENV is undefined
console.log(conf.bar)  // 1
// NODE_ENV is production
console.log(conf.bar)  // 2
// NODE_ENV is development
console.log(conf.bar)  // 3
```

### async load

```javascript
loader('./foo.json', function(res){
	console.log(res.bar)  // 1
})
```

### from cache

```javascript
loader('./foo.json', true, function(res){
	console.log(res.bar)  // 2
})
```

## Test

```
npm test
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/env-conf-loader.svg?style=flat
[npm-url]: https://npmjs.org/package/env-conf-loader
[travis-image]: https://travis-ci.org/cutsin/env-conf-loader.svg
[travis-url]: https://travis-ci.org/cutsin/env-conf-loader
[downloads-image]: https://img.shields.io/npm/dm/env-conf-loader.svg?style=flat
[downloads-url]: https://npmjs.org/package/env-conf-loader
[coveralls-image]: https://img.shields.io/coveralls/cutsin/env-conf-loader.svg?style=flat
[coveralls-url]: https://coveralls.io/r/cutsin/env-conf-loader
