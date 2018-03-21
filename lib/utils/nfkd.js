/*!
 * nfkd.js - unicode normalization for fcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

/**
 * Normalize unicode string.
 * @alias module:utils.nfkd
 * @param {String} str
 * @returns {String}
 */

function nfkd(str) {
  return str.normalize('NFKD');
}

/*
 * Expose
 */

module.exports = nfkd;
