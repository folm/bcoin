/*!
 * fcoin.js - a javascript folm library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

/* eslint prefer-arrow-callback: "off" */

'use strict';

/**
 * A fcoin "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports fcoin
 * @type {Object}
 *
 * @property {Function} bn - See {@url https://github.com/indutny/bn.js}.
 * @property {Object} elliptic - See {@url https://github.com/indutny/elliptic}.
 *
 * @property {Object} bip70 - See {@link module:bip70}.
 *
 * @property {Object} blockchain - See {@link module:blockchain}.
 * @property {Function} chain - See {@link module:blockchain.Chain}.
 * @property {Function} chaindb - See {@link module:blockchain.ChainDB}.
 * @property {Function} chainentry - See {@link module:blockchain.ChainEntry}.
 *
 * @property {Object} btc
 * @property {Function} amount
 * @property {Function} uri
 *
 * @property {Object} coins
 * @property {Function} coinview
 *
 * @property {Object} crypto
 * @property {Object} secp256k1
 * @property {Object} schnorr
 *
 * @property {Object} db
 * @property {Object} ldb
 *
 * @property {Object} hd
 *
 * @property {Object} http
 * @property {Object} rpc
 *
 * @property {Object} txmempool
 * @property {Object} fees
 * @property {Object} mempool
 * @property {Object} mempoolentry
 *
 * @property {Object} mining
 * @property {Object} miner
 * @property {Object} minerblock
 *
 * @property {Object} net
 * @property {Object} bip150
 * @property {Object} bip151
 * @property {Object} bip152
 * @property {Object} dns
 * @property {Object} packets
 * @property {Object} peer
 * @property {Object} pool
 * @property {Object} tcp
 *
 * @property {Object} node
 * @property {Object} config
 * @property {Object} fullnode
 * @property {Object} logger
 * @property {Object} spvnode
 *
 * @property {Object} primitives
 * @property {Object} address
 * @property {Object} block
 * @property {Object} coin
 * @property {Object} headers
 * @property {Object} input
 * @property {Object} invitem
 * @property {Object} keyring
 * @property {Object} merkleblock
 * @property {Object} mtx
 * @property {Object} netaddress
 * @property {Object} outpoint
 * @property {Object} output
 * @property {Object} tx
 *
 * @property {Object} protocol
 * @property {Object} consensus
 * @property {Object} errors
 * @property {Object} network
 * @property {Object} networks
 * @property {Object} policy
 * @property {Object} timedata
 *
 * @property {Object} txscript
 * @property {Object} opcodes
 * @property {Object} program
 * @property {Object} script
 * @property {Object} sigcache
 * @property {Object} stack
 * @property {Object} witness
 *
 * @property {Object} utils
 * @property {Object} base32
 * @property {Object} base58
 * @property {Object} bloom
 * @property {Object} co
 * @property {Object} encoding
 * @property {Object} lock
 * @property {Object} reader
 * @property {Object} staticwriter
 * @property {Object} util
 * @property {Object} writer
 *
 * @property {Object} wallet
 * @property {Object} path
 * @property {Object} walletkey
 * @property {Object} walletdb
 *
 * @property {Object} workers
 * @property {Object} workerpool
 */

const fcoin = exports;

/**
 * Define a module for lazy loading.
 * @param {String} name
 * @param {String} path
 */

fcoin.define = function define(name, path) {
  let cache;
  Object.defineProperty(fcoin, name, {
    get() {
      if (!cache)
        cache = require(path);
      return cache;
    }
  });
};

/**
 * Set the default network.
 * @param {String} network
 */

fcoin.set = function set(network) {
  fcoin.network.set(network);
  return fcoin;
};

/**
 * Cache all necessary modules.
 */

fcoin.cache = function cache() {
  fcoin.bip70;
  fcoin.blockchain;
  fcoin.btc;
  fcoin.coins;
  fcoin.crypto;
  fcoin.db;
  fcoin.hd;
  fcoin.http;
  fcoin.txmempool;
  fcoin.mining;
  fcoin.net;
  fcoin.node;
  fcoin.primitives;
  fcoin.protocol;
  fcoin.txscript;
  fcoin.utils;
  fcoin.wallet;
  fcoin.workers;
  fcoin.pkg;
};

/*
 * Expose
 */

// Horrible BIP
fcoin.define('bip70', './bip70');

// Blockchain
fcoin.define('blockchain', './blockchain');
fcoin.define('chain', './blockchain/chain');
fcoin.define('chaindb', './blockchain/chaindb');
fcoin.define('chainentry', './blockchain/chainentry');

// BTC
fcoin.define('btc', './btc');
fcoin.define('amount', './btc/amount');
fcoin.define('uri', './btc/uri');

// Coins
fcoin.define('coins', './coins');
fcoin.define('coinview', './coins/coinview');

// Crypto
fcoin.define('crypto', './crypto');
fcoin.define('bn', './crypto/bn');
fcoin.define('secp256k1', './crypto/secp256k1');
fcoin.define('schnorr', './crypto/schnorr');

// DB
fcoin.define('db', './db');
fcoin.define('ldb', './db/ldb');

// HD
fcoin.define('hd', './hd');

// HTTP
fcoin.define('http', './http');
fcoin.define('rpc', './http/rpc');

// Mempool
fcoin.define('txmempool', './mempool');
fcoin.define('fees', './mempool/fees');
fcoin.define('mempool', './mempool/mempool');
fcoin.define('mempoolentry', './mempool/mempoolentry');

// Miner
fcoin.define('mining', './mining');
fcoin.define('miner', './mining/miner');
fcoin.define('template', './mining/template');

// Net
fcoin.define('net', './net');
fcoin.define('bip150', './net/bip150');
fcoin.define('bip151', './net/bip151');
fcoin.define('bip152', './net/bip152');
fcoin.define('dns', './net/dns');
fcoin.define('packets', './net/packets');
fcoin.define('peer', './net/peer');
fcoin.define('pool', './net/pool');
fcoin.define('tcp', './net/tcp');

// Node
fcoin.define('node', './node');
fcoin.define('config', './node/config');
fcoin.define('fullnode', './node/fullnode');
fcoin.define('logger', './node/logger');
fcoin.define('spvnode', './node/spvnode');

// Primitives
fcoin.define('primitives', './primitives');
fcoin.define('address', './primitives/address');
fcoin.define('block', './primitives/block');
fcoin.define('coin', './primitives/coin');
fcoin.define('headers', './primitives/headers');
fcoin.define('input', './primitives/input');
fcoin.define('invitem', './primitives/invitem');
fcoin.define('keyring', './primitives/keyring');
fcoin.define('merkleblock', './primitives/merkleblock');
fcoin.define('mtx', './primitives/mtx');
fcoin.define('netaddress', './primitives/netaddress');
fcoin.define('outpoint', './primitives/outpoint');
fcoin.define('output', './primitives/output');
fcoin.define('tx', './primitives/tx');

// Protocol
fcoin.define('protocol', './protocol');
fcoin.define('consensus', './protocol/consensus');
fcoin.define('errors', './protocol/errors');
fcoin.define('network', './protocol/network');
fcoin.define('networks', './protocol/networks');
fcoin.define('policy', './protocol/policy');
fcoin.define('timedata', './protocol/timedata');

// Script
fcoin.define('txscript', './script');
fcoin.define('opcode', './script/opcode');
fcoin.define('program', './script/program');
fcoin.define('script', './script/script');
fcoin.define('scriptnum', './script/scriptnum');
fcoin.define('sigcache', './script/sigcache');
fcoin.define('stack', './script/stack');
fcoin.define('witness', './script/witness');

// Utils
fcoin.define('utils', './utils');
fcoin.define('base32', './utils/base32');
fcoin.define('base58', './utils/base58');
fcoin.define('bloom', './utils/bloom');
fcoin.define('co', './utils/co');
fcoin.define('encoding', './utils/encoding');
fcoin.define('int64', './utils/int64');
fcoin.define('lock', './utils/lock');
fcoin.define('reader', './utils/reader');
fcoin.define('staticwriter', './utils/staticwriter');
fcoin.define('util', './utils/util');
fcoin.define('writer', './utils/writer');

// Wallet
fcoin.define('wallet', './wallet');
fcoin.define('path', './wallet/path');
fcoin.define('walletkey', './wallet/walletkey');
fcoin.define('walletdb', './wallet/walletdb');

// Workers
fcoin.define('workers', './workers');
fcoin.define('workerpool', './workers/workerpool');

// Package Info
fcoin.define('pkg', './pkg');
