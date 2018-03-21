/*!
 * fcoin.js - a javascript folm library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

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
  ;
};

/*
 * Expose
 */

// Horrible BIP
fcoin.bip70 = require('./bip70');

// Blockchain
fcoin.blockchain = require('./blockchain');
fcoin.chain = require('./blockchain/chain');
fcoin.chaindb = require('./blockchain/chaindb');
fcoin.chainentry = require('./blockchain/chainentry');

// BTC
fcoin.btc = require('./btc');
fcoin.amount = require('./btc/amount');
fcoin.uri = require('./btc/uri');

// Coins
fcoin.coins = require('./coins');
fcoin.coinview = require('./coins/coinview');

// Crypto
fcoin.crypto = require('./crypto');
fcoin.bn = require('./crypto/bn');
fcoin.secp256k1 = require('./crypto/secp256k1');
fcoin.schnorr = require('./crypto/schnorr');

// DB
fcoin.db = require('./db');
fcoin.ldb = require('./db/ldb');

// HD
fcoin.hd = require('./hd');

// HTTP
fcoin.http = require('./http');
fcoin.rpc = require('./http/rpc');

// Mempool
fcoin.txmempool = require('./mempool');
fcoin.fees = require('./mempool/fees');
fcoin.mempool = require('./mempool/mempool');
fcoin.mempoolentry = require('./mempool/mempoolentry');

// Miner
fcoin.mining = require('./mining');
fcoin.miner = require('./mining/miner');
fcoin.template = require('./mining/template');

// Net
fcoin.net = require('./net');
fcoin.bip150 = require('./net/bip150');
fcoin.bip151 = require('./net/bip151');
fcoin.bip152 = require('./net/bip152');
fcoin.dns = require('./net/dns');
fcoin.packets = require('./net/packets');
fcoin.peer = require('./net/peer');
fcoin.pool = require('./net/pool');
fcoin.tcp = require('./net/tcp');

// Node
fcoin.node = require('./node');
fcoin.config = require('./node/config');
fcoin.fullnode = require('./node/fullnode');
fcoin.logger = require('./node/logger');
fcoin.spvnode = require('./node/spvnode');

// Primitives
fcoin.primitives = require('./primitives');
fcoin.address = require('./primitives/address');
fcoin.block = require('./primitives/block');
fcoin.coin = require('./primitives/coin');
fcoin.headers = require('./primitives/headers');
fcoin.input = require('./primitives/input');
fcoin.invitem = require('./primitives/invitem');
fcoin.keyring = require('./primitives/keyring');
fcoin.merkleblock = require('./primitives/merkleblock');
fcoin.mtx = require('./primitives/mtx');
fcoin.netaddress = require('./primitives/netaddress');
fcoin.outpoint = require('./primitives/outpoint');
fcoin.output = require('./primitives/output');
fcoin.tx = require('./primitives/tx');

// Protocol
fcoin.protocol = require('./protocol');
fcoin.consensus = require('./protocol/consensus');
fcoin.errors = require('./protocol/errors');
fcoin.network = require('./protocol/network');
fcoin.networks = require('./protocol/networks');
fcoin.policy = require('./protocol/policy');
fcoin.timedata = require('./protocol/timedata');

// Script
fcoin.txscript = require('./script');
fcoin.opcode = require('./script/opcode');
fcoin.program = require('./script/program');
fcoin.script = require('./script/script');
fcoin.scriptnum = require('./script/scriptnum');
fcoin.sigcache = require('./script/sigcache');
fcoin.stack = require('./script/stack');
fcoin.witness = require('./script/witness');

// Utils
fcoin.utils = require('./utils');
fcoin.base32 = require('./utils/base32');
fcoin.base58 = require('./utils/base58');
fcoin.bloom = require('./utils/bloom');
fcoin.co = require('./utils/co');
fcoin.encoding = require('./utils/encoding');
fcoin.int64 = require('./utils/int64');
fcoin.lock = require('./utils/lock');
fcoin.reader = require('./utils/reader');
fcoin.staticwriter = require('./utils/staticwriter');
fcoin.util = require('./utils/util');
fcoin.writer = require('./utils/writer');

// Wallet
fcoin.wallet = require('./wallet');
fcoin.path = require('./wallet/path');
fcoin.walletkey = require('./wallet/walletkey');
fcoin.walletdb = require('./wallet/walletdb');

// Workers
fcoin.workers = require('./workers');
fcoin.workerpool = require('./workers/workerpool');

// Package Info
fcoin.pkg = require('./pkg');

/*
 * Expose Globally
 */

global.fcoin = fcoin;
