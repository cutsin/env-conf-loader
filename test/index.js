var assert = require('assert')
var confLoader = require('../')
var conf

// not cover
conf = confLoader('./configs')
assert.ok(conf.foo.sth, true)

// covered by default
conf = confLoader('./configs')
assert.equal(conf.foo.bar, 1)

// covered by production
process.env.NODE_ENV = 'production'
conf = confLoader('./configs')
assert.equal(conf.foo.bar, 2)

// covered by development
process.env.NODE_ENV = 'development'
confLoader('./configs', function(res){
	assert.equal(res.foo.bar, 3)
	// fromCache
	delete process.env.NODE_ENV
	confLoader('./configs', true, function(res){
		assert.notEqual(res.foo.bar, 1)
		console.log('test ok.')
	})
})
