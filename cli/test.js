#!/usr/bin/env node
// var fs=require('fs')
// var path =require('path')
"use strict";

require('@babel/polyfill');

require('@babel/core');

require('@babel/register')({
  presets: [require.resolve('@babel/preset-env')],
  ignore: [] // cache: true,

}); // require('@babel/register')
// console.log(111111,require('./babel.config'))
// require('@babel/register')(require('./babel.config'))


console.log(12345687650987654321);

require('./src/index');
