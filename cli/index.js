#!/usr/bin/env node
require('@babel/polyfill')
require('@babel/core')

require('@babel/register')({
    presets: [require.resolve('@babel/preset-env')],
    ignore: [/node_modules/],
    cache: true,
  })
require('./src/index')