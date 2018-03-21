/*!
 * cleanse.js - memzero for fcoin
 * Copyright (c) 2016-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

/**
 * @module crypto.cleanse
 */

const native = require('../native').binding;

let counter = 0;

/**
 * A maybe-secure memzero.
 * @param {Buffer} data
 */

module.exports = function cleanse(data) {
  let ctr = counter;

  for (let i = 0; i < data.length; i++) {
    data[i] = ctr & 0xff;
    ctr += i;
  }

  counter = ctr >>> 0;
};

if (native)
  exports.cleanse = native.cleanse;
