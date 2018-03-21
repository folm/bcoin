/*!
 * nfkd-browser.js - unicode normalization for fcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

const unorm = require('../../vendor/unorm');

function nfkd(str) {
  if (str.normalize)
    return str.normalize('NFKD');

  return unorm.nfkd(str);
}

/*
 * Expose
 */

module.exports = nfkd;
