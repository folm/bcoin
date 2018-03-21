/* eslint-disable max-len */
/*!
 * network.js - folm networks for fcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/folm/fcoin
 */

'use strict';

/**
 * @module protocol/networks
 */

const BN = require('../crypto/bn');

const network = exports;

/**
 * Network type list.
 * @memberof module:protocol/networks
 * @const {String[]}
 * @default
 */

network.types = ['main'];

/**
 * Mainnet
 * @static
 * @lends module:protocol/networks
 * @type {Object}
 */

const main = {};

/**
 * Symbolic network type.
 * @const {String}
 * @default
 */

main.type = 'main';

/**
 * Default DNS seeds.
 * @const {String[]}
 * @default
 */

main.seeds = [
    'folm-node01.folmcoin.com',
    'folm-node02.folmcoin.com'
];

/**
 * Packet magic number.
 * @const {Number}
 * @default
 */

main.magic = 0x6d6c6f66;

/**
 * Default network port.
 * @const {Number}
 * @default
 */

main.port = 53656;

/**
 * Checkpoint block list.
 * @const {Object}
 */

main.checkpointMap = {
    10: '12fc42be327828b24af778aa25097b45bf7215f652eb6810d1733d09df040000',
    500: '4cf55c818616cad0ad664aee61b25cfbdf5c8c9d94e82e6060910b0000000000',
    5000: '7a18c82586455ee08d84fb8a87a0a4745cf69a2e71263065f544100000000000',
    7200: 'ea69e097f9e9596b12f3400b364048dc996263d68507d12ed17b050000000000',
    10802: 'acd6c99ed35a7c37e1c4047904408226819f7750da16e585923d030000000000',
    15425: '250556d441c28e6c6cc891c5e63ce454789d09ad06e77acd883b000000000000'
};

/**
 * Last checkpoint height.
 * @const {Number}
 * @default
 */

main.lastCheckpoint = 15425;

/**
 * @const {Number}
 * @default
 */

main.halvingInterval = 262800;

/**
 * Genesis block header.
 * @const {NakedBlock}
 */

main.genesis = {
    version: 1,
    hash: '989c8034777ae053c8c6a97690ebb1cffc0df3b9ea75a4f50146e03cec0a0000',
    prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
    merkleRoot: '81eaaae0cc01bb23ef1235d7ed5590460093c59c2eca74aba0fe93f9fc905198',
    time: 1518900000,
    bits: 504365055,
    nonce: 1809743,
    height: 0
};

/**
 * The network's genesis block in a hex string.
 * @const {String}
 */

main.genesisBlock =
    '0100000000000000000000000000000000000000000000000000000000000000000000' +
    '0081eaaae0cc01bb23ef1235d7ed5590460093c59c2eca74aba0fe93f9fc9051982093' +
    '885affff0f1e4f9d1b0001010000000100000000000000000000000000000000000000' +
    '00000000000000000000000000ffffffff4a04ffff001d010442313720466562727561' +
    '72792032303138202d20466f6c6d20436f696e202d205765656b206f66206368616f73' +
    '2c20616761696e2c20656e67756c6673205472756d70ffffffff010000000000000000' +
    '3e3c040e3fe58595206cf8c5612c977e10335393b689ead98cda8c0e4e29e5377b628f' +
    'f6de54ca1936ac57072ce70968ee5202b91ddd53bc4f8f2baa8640ac00000000';

/**
 * POW-related constants.
 * @enum {Number}
 * @default
 */

main.pow = {
    /**
     * Default target.
     * @const {BN}
     */

    limit: new BN(
        '00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        'hex'
    ),

    /**
     * Compact pow limit.
     * @const {Number}
     * @default
     */

    bits: 504365055,

    /**
     * Minimum chainwork for best chain.
     * @const {BN}
     */

    chainwork: new BN(
        '0000000000000000000000000000000000000000000000000000000000100010',
        'hex'
    ),

    /**
     * Desired retarget period in seconds.
     * @const {Number}
     * @default
     */

    targetTimespan: 2 * 24 * 60 * 60,

    /**
     * Average block time.
     * @const {Number}
     * @default
     */

    targetSpacing: 2 * 60,

    /**
     * Retarget interval in blocks.
     * @const {Number}
     * @default
     */

    retargetInterval: 2016,

    /**
     * Whether to reset target if a block
     * has not been mined recently.
     * @const {Boolean}
     * @default
     */

    targetReset: false,

    /**
     * Do not allow retargetting.
     * @const {Boolean}
     * @default
     */

    noRetargeting: false
};

/**
 * Block constants.
 * @enum {Number}
 * @default
 */

main.block = {
    /**
     * Height at which bip34 was activated.
     * Used for avoiding bip30 checks.
     */

    bip34height: 0xffffffff,

    /**
     * Hash of the block that activated bip34.
     */

    bip34hash: null,

    /**
     * Height at which bip65 was activated.
     */

    bip65height: 0xffffffff,

    /**
     * Hash of the block that activated bip65.
     */

    bip65hash: null,

    /**
     * Height at which bip66 was activated.
     */

    bip66height: 0xffffffff,

    /**
     * Hash of the block that activated bip66.
     */

    bip66hash: null,

    /**
     * Safe height to start pruning.
     */

    pruneAfterHeight: 1000,

    /**
     * Safe number of blocks to keep.
     */

    keepBlocks: 288,

    /**
     * Age used for the time delta to
     * determine whether the chain is synced.
     */

    maxTipAge: 24 * 60 * 60,

    /**
     * Height at which block processing is
     * slow enough that we can output
     * logs without spamming.
     */

    slowHeight: 325000
};

/**
 * Map of historical blocks which create duplicate transactions hashes.
 * @see https://github.com/folm/bips/blob/master/bip-0030.mediawiki
 * @const {Object}
 * @default
 */

main.bip30 = {};

/**
 * For versionbits.
 * @const {Number}
 * @default
 */

main.activationThreshold = 1512; // 75% of 2016

/**
 * Confirmation window for versionbits.
 * @const {Number}
 * @default
 */

main.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

/**
 * Deployments for versionbits.
 * @const {Object}
 * @default
 */

main.deployments = {
    csv: {
        name: 'csv',
        bit: 0,
        startTime: 1462060800, // May 1st, 2016
        timeout: 1493596800, // May 1st, 2017
        threshold: -1,
        window: -1,
        required: false,
        force: true
    },
    segwit: {
        name: 'segwit',
        bit: 1,
        startTime: 1479168000, // November 15th, 2016.
        timeout: 1510704000, // November 15th, 2017.
        threshold: -1,
        window: -1,
        required: false,
        force: false
    }
};

/**
 * Deployments for versionbits (array form, sorted).
 * @const {Array}
 * @default
 */

main.deploys = [
    main.deployments.csv,
    main.deployments.segwit
];

/**
 * Key prefixes.
 * @enum {Number}
 * @default
 */

main.keyPrefix = {
    privkey: 0xb2,
    xpubkey: 0x152a2113,
    xprivkey: 0x03334caf,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 0
};

/**
 * {@link Address} prefixes.
 * @enum {Number}
 */

main.addressPrefix = {
    pubkeyhash: 0x24,
    scripthash: 0x24,
    witnesspubkeyhash: 0x06,
    witnessscripthash: 0x0a,
    bech32: 'bc'
};

/**
 * Default value for whether the mempool
 * accepts non-standard transactions.
 * @const {Boolean}
 * @default
 */

main.requireStandard = true;

/**
 * Default http port.
 * @const {Number}
 * @default
 */

main.rpcPort = 53654;

/**
 * Default min relay rate.
 * @const {Rate}
 * @default
 */

main.minRelay = 1000;

/**
 * Default normal relay rate.
 * @const {Rate}
 * @default
 */

main.feeRate = 100000;

/**
 * Maximum normal relay rate.
 * @const {Rate}
 * @default
 */

main.maxFeeRate = 400000;

/**
 * Whether to allow self-connection.
 * @const {Boolean}
 */

main.selfConnect = false;

/**
 * Whether to request mempool on sync.
 * @const {Boolean}
 */

main.requestMempool = false;

/*
 * Expose
 */

network.main = main;
