
var req = require('require-yml')
var extend = require('extend')
var reserved = ['default', 'production', 'development']

var cache = {}
var clean = function(obj) {
	for(i in reserved) {
		delete obj[reserved[i]]
	}
}

module.exports = function(target, fromCache, cb) {
	if (typeof fromCache === 'function') {
		cb = fromCache
		fromCache = false
	}
	if (fromCache) {
		cached = cache[target]
		if (cb) return cb(cached)
		return cached
	}
	var env = process.env.NODE_ENV
	var iterator = function(json) {
		// 1. merge default to own
		if (json.hasOwnProperty(reserved[0])) {
			json = extend(true, json, json[reserved[0]])
			delete json[reserved[0]]
		}
		// 2. cache env & remove reserved
		if (!~reserved.indexOf(env)) return json 
		var envConf = json[env]
		clean(json)
		// 3. merge env to own
		if (envConf) json = extend(true, json, envConf)
		return json
	}

	if (cb) {
		req(target, iterator, function(res){
			cache[target] = res
			cb(res)
		})
	} else {
		var res = req(target, iterator)
		cache[target] = res
		return res
	}
}