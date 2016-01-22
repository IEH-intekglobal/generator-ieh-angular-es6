'use strict';

require('babel-register')({
	only: /generator-ieh-angular-es6\/(?!node_modules)/
});
var _tmp = require('./generator');
var gen = (_tmp instanceof Function)? _tmp : _tmp.default;

module.exports = gen;