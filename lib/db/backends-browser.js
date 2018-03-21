/**
 * backends-browser.js - database backends for fcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

const level = require('./level');
const MemDB = require('./memdb');

exports.get = function get(name) {
  if (name === 'memory')
    return MemDB;
  return level;
};
