/*!
 * db/index.js - data management for fcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

/**
 * @module db
 */

exports.backends = require('./backends');
exports.LDB = require('./ldb');
exports.LowlevelUp = require('./lowlevelup');
exports.MemDB = require('./memdb');
