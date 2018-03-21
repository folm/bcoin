/*!
 * native.js - native bindings for fcoin
 * Copyright (c) 2016-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

exports.binding = null;

if (Number(process.env.FCOIN_NO_NATIVE) !== 1) {
  try {
    exports.binding = require('fcoin-native');
  } catch (e) {
    ;
  }
}
