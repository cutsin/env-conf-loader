# evn-conf-loader

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

[中文文档](README.zh-CN.md)

## Why?

## Install

```bash
npm install evn-conf-loader
```

## Usage

```javascript
var loader = require('evn-conf-loader')
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
// if NODE_ENV is nothing
console.log(conf.bar)  // 1
// if NODE_ENV is production
console.log(conf.bar)  // 2
// if NODE_ENV is development
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

[npm-image]: https://img.shields.io/npm/v/evn-conf-loader.svg?style=flat
[npm-url]: https://npmjs.org/package/evn-conf-loader
[travis-image]: https://travis-ci.org/cutsin/evn-conf-loader.svg
[travis-url]: https://travis-ci.org/cutsin/evn-conf-loader
[downloads-image]: https://img.shields.io/npm/dm/evn-conf-loader.svg?style=flat
[downloads-url]: https://npmjs.org/package/evn-conf-loader
[coveralls-image]: https://img.shields.io/coveralls/cutsin/evn-conf-loader.svg?style=flat
[coveralls-url]: https://coveralls.io/r/cutsin/evn-conf-loader
