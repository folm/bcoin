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
    0: '989c8034777ae053c8c6a97690ebb1cffc0df3b9ea75a4f50146e03cec0a0000',
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
 * Testnet (v3)
 * https://en.folm.it/wiki/Testnet
 */

const testnet = {};

testnet.type = 'testnet';

testnet.seeds = [
    'testnet-seed.folm.jonasschnelli.ch', // Jonas Schnelli
    'seed.tbtc.petertodd.org', // Peter Todd
    'testnet-seed.bluematt.me', // Matt Corallo
    'testnet-seed.folm.schildbach.de' // Andreas Schildbach
];

testnet.magic = 0x0709110b;

testnet.port = 43246;

testnet.checkpointMap = {
    546: '70cb6af7ebbcb1315d3414029c556c55f3e2fc353c4c9063a76c932a00000000',
    10000: '02a1b43f52591e53b660069173ac83b675798e12599dbb0442b7580000000000',
    100000: '1e0a16bbadccde1d80c66597b1939e45f91b570d29f95fc158299e0000000000',
    170000: '508125560d202b89757889bb0e49c712477be20440058f05db4f0e0000000000',
    210000: '32365454b5f29a826bff8ad9b0448cad0072fc73d50e482d91a3dece00000000',
    300000: 'a141bf3972424853f04367b47995e220e0b5a2706e5618766f22000000000000',
    390000: 'f217e183484fb6d695609cc71fa2ae24c3020943407e0150b298030000000000',
    420000: 'de9e73a3b91fbb014e036e8583a17d6b638a699aeb2de8573d12580800000000',
    500000: '06f60922a2aab2757317820fc6ffaf6a470e2cbb0f63a2aac0a7010000000000',
    630000: 'bbbe117035432a6a4effcb297207a02b031735b43e0d19a9217c000000000000',
    700000: 'c14d3f6a1e7c7d66fd940951e44f3c3be1273bea4d2ab1786140000000000000',
    780000: '0381582e34c3755964dc2813e2b33e521e5596367144e1670851050000000000',
    840000: 'dac1648107bd4394e57e4083c86d42b548b1cfb119665f179ea80a0000000000',
    900000: '9bd8ac418beeb1a2cf5d68c8b5c6ebaa947a5b766e5524898d6f350000000000',
    1050000: 'd8190cf0af7f08e179cab51d67db0b44b87951a78f7fdc31b4a01a0000000000'
};

testnet.lastCheckpoint = 1050000;

testnet.halvingInterval = 210000;

testnet.genesis = {
    version: 1,
    hash: '43497fd7f826957108f4a30fd9cec3aeba79972084e90ead01ea330900000000',
    prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
    merkleRoot:
        '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
    time: 1296688602,
    bits: 486604799,
    nonce: 414098458,
    height: 0
};

testnet.genesisBlock =
    '0100000000000000000000000000000000000000000000000000000000000000000000'
    + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
    + '494dffff001d1aa4ae1801010000000100000000000000000000000000000000000000'
    + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
    + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
    + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
    + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
    + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
    + 'ac00000000';

testnet.pow = {
    limit: new BN(
        '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        'hex'
    ),
    bits: 486604799,
    chainwork: new BN(
        '0000000000000000000000000000000000000000000000286d17360c5492b2c4',
        'hex'
    ),
    targetTimespan: 14 * 24 * 60 * 60,
    targetSpacing: 10 * 60,
    retargetInterval: 2016,
    targetReset: true,
    noRetargeting: false
};

testnet.block = {
    bip34height: 21111,
    bip34hash: 'f88ecd9912d00d3f5c2a8e0f50417d3e415c75b3abe584346da9b32300000000',
    bip65height: 581885,
    bip65hash: 'b61e864fbec41dfaf09da05d1d76dc068b0dd82ee7982ff255667f0000000000',
    bip66height: 330776,
    bip66hash: '82a14b9e5ea81d4832b8e2cd3c2a6092b5a3853285a8995ec4c8042100000000',
    pruneAfterHeight: 1000,
    keepBlocks: 10000,
    maxTipAge: 24 * 60 * 60,
    slowHeight: 950000
};

testnet.bip30 = {};

testnet.activationThreshold = 1512; // 75% for testchains

testnet.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

testnet.deployments = {
    csv: {
        name: 'csv',
        bit: 0,
        startTime: 1456790400, // March 1st, 2016
        timeout: 1493596800, // May 1st, 2017
        threshold: -1,
        window: -1,
        required: false,
        force: true
    },
    segwit: {
        name: 'segwit',
        bit: 1,
        startTime: 1462060800, // May 1st 2016
        timeout: 1493596800, // May 1st 2017
        threshold: -1,
        window: -1,
        required: true,
        force: false
    },
    segsignal: {
        name: 'segsignal',
        bit: 4,
        startTime: 0xffffffff,
        timeout: 0xffffffff,
        threshold: 269,
        window: 336,
        required: false,
        force: false
    },
    testdummy: {
        name: 'testdummy',
        bit: 28,
        startTime: 1199145601, // January 1, 2008
        timeout: 1230767999, // December 31, 2008
        threshold: -1,
        window: -1,
        required: false,
        force: true
    }
};

testnet.deploys = [
    testnet.deployments.csv,
    testnet.deployments.segwit,
    testnet.deployments.segsignal,
    testnet.deployments.testdummy
];

testnet.keyPrefix = {
    privkey: 0xef,
    xpubkey: 0x043587cf,
    xprivkey: 0x04358394,
    xpubkey58: 'tpub',
    xprivkey58: 'tprv',
    coinType: 1
};

testnet.addressPrefix = {
    pubkeyhash: 0x6f,
    scripthash: 0xc4,
    witnesspubkeyhash: 0x03,
    witnessscripthash: 0x28,
    bech32: 'tb'
};

testnet.requireStandard = false;

testnet.rpcPort = 43244;

testnet.minRelay = 1000;

testnet.feeRate = 20000;

testnet.maxFeeRate = 60000;

testnet.selfConnect = false;

testnet.requestMempool = false;

/*
 * Regtest
 */

const regtest = {};

regtest.type = 'regtest';

regtest.seeds = [
    '127.0.0.1'
];

regtest.magic = 0xdab5bffa;

regtest.port = 52589;

regtest.checkpointMap = {};
regtest.lastCheckpoint = 0;

regtest.halvingInterval = 150;

regtest.genesis = {
    version: 1,
    hash: '06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f',
    prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
    merkleRoot:
        '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
    time: 1296688602,
    bits: 545259519,
    nonce: 2,
    height: 0
};

regtest.genesisBlock =
    '0100000000000000000000000000000000000000000000000000000000000000000000'
    + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
    + '494dffff7f200200000001010000000100000000000000000000000000000000000000'
    + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
    + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
    + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
    + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
    + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
    + 'ac00000000';

regtest.pow = {
    limit: new BN(
        '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        'hex'
    ),
    bits: 545259519,
    chainwork: new BN(
        '0000000000000000000000000000000000000000000000000000000000000002',
        'hex'
    ),
    targetTimespan: 14 * 24 * 60 * 60,
    targetSpacing: 10 * 60,
    retargetInterval: 2016,
    targetReset: true,
    noRetargeting: true
};

regtest.block = {
    bip34height: 100000000,
    bip34hash: null,
    bip65height: 1351,
    bip65hash: null,
    bip66height: 1251,
    bip66hash: null,
    pruneAfterHeight: 1000,
    keepBlocks: 10000,
    maxTipAge: 0xffffffff,
    slowHeight: 0
};

regtest.bip30 = {};

regtest.activationThreshold = 108; // 75% for testchains

regtest.minerWindow = 144; // Faster than normal for regtest

regtest.deployments = {
    csv: {
        name: 'csv',
        bit: 0,
        startTime: 0,
        timeout: 0xffffffff,
        threshold: -1,
        window: -1,
        required: false,
        force: true
    },
    segwit: {
        name: 'segwit',
        bit: 1,
        startTime: 0,
        timeout: 0xffffffff,
        threshold: -1,
        window: -1,
        required: true,
        force: false
    },
    segsignal: {
        name: 'segsignal',
        bit: 4,
        startTime: 0xffffffff,
        timeout: 0xffffffff,
        threshold: 269,
        window: 336,
        required: false,
        force: false
    },
    testdummy: {
        name: 'testdummy',
        bit: 28,
        startTime: 0,
        timeout: 0xffffffff,
        threshold: -1,
        window: -1,
        required: false,
        force: true
    }
};

regtest.deploys = [
    regtest.deployments.csv,
    regtest.deployments.segwit,
    regtest.deployments.segsignal,
    regtest.deployments.testdummy
];

regtest.keyPrefix = {
    privkey: 0x5a,
    xpubkey: 0xeab4fa05,
    xprivkey: 0xeab404c7,
    xpubkey58: 'rpub',
    xprivkey58: 'rprv',
    coinType: 1
};

regtest.addressPrefix = {
    pubkeyhash: 0x3c,
    scripthash: 0x26,
    witnesspubkeyhash: 0x7a,
    witnessscripthash: 0x14,
    bech32: 'rb'
};

regtest.requireStandard = false;

regtest.rpcPort = 52587;

regtest.minRelay = 1000;

regtest.feeRate = 20000;

regtest.maxFeeRate = 60000;

regtest.selfConnect = true;

regtest.requestMempool = true;

/*
 * Simnet (btcd)
 */

const simnet = {};

simnet.type = 'simnet';

simnet.seeds = [
    '127.0.0.1'
];

simnet.magic = 0x12141c16;

simnet.port = 18555;

simnet.checkpointMap = {};

simnet.lastCheckpoint = 0;

simnet.halvingInterval = 210000;

simnet.genesis = {
    version: 1,
    hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
    prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
    merkleRoot:
        '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
    time: 1401292357,
    bits: 545259519,
    nonce: 2,
    height: 0
};

simnet.genesisBlock =
    '0100000000000000000000000000000000000000000000000000000000000000000000'
    + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a4506'
    + '8653ffff7f200200000001010000000100000000000000000000000000000000000000'
    + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
    + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
    + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
    + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
    + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
    + 'ac00000000';

simnet.pow = {
    limit: new BN(
        // High target of 0x207fffff (545259519)
        '7fffff0000000000000000000000000000000000000000000000000000000000',
        'hex'
    ),
    bits: 545259519,
    chainwork: new BN(
        '0000000000000000000000000000000000000000000000000000000000000002',
        'hex'
    ),
    targetTimespan: 14 * 24 * 60 * 60,
    targetSpacing: 10 * 60,
    retargetInterval: 2016,
    targetReset: true,
    noRetargeting: false
};

simnet.block = {
    bip34height: 0,
    bip34hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
    bip65height: 0,
    bip65hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
    bip66height: 0,
    bip66hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
    pruneAfterHeight: 1000,
    keepBlocks: 10000,
    maxTipAge: 0xffffffff,
    slowHeight: 0
};

simnet.bip30 = {};

simnet.activationThreshold = 75; // 75% for testchains

simnet.minerWindow = 100; // nPowTargetTimespan / nPowTargetSpacing

simnet.deployments = {
    csv: {
        name: 'csv',
        bit: 0,
        startTime: 0, // March 1st, 2016
        timeout: 0xffffffff, // May 1st, 2017
        threshold: -1,
        window: -1,
        required: false,
        force: true
    },
    segwit: {
        name: 'segwit',
        bit: 1,
        startTime: 0, // May 1st 2016
        timeout: 0xffffffff, // May 1st 2017
        threshold: -1,
        window: -1,
        required: true,
        force: false
    },
    segsignal: {
        name: 'segsignal',
        bit: 4,
        startTime: 0xffffffff,
        timeout: 0xffffffff,
        threshold: 269,
        window: 336,
        required: false,
        force: false
    },
    testdummy: {
        name: 'testdummy',
        bit: 28,
        startTime: 1199145601, // January 1, 2008
        timeout: 1230767999, // December 31, 2008
        threshold: -1,
        window: -1,
        required: false,
        force: true
    }
};

simnet.deploys = [
    simnet.deployments.csv,
    simnet.deployments.segwit,
    simnet.deployments.segsignal,
    simnet.deployments.testdummy
];

simnet.keyPrefix = {
    privkey: 0x64,
    xpubkey: 0x0420bd3a,
    xprivkey: 0x0420b900,
    xpubkey58: 'spub',
    xprivkey58: 'sprv',
    coinType: 115
};

simnet.addressPrefix = {
    pubkeyhash: 0x3f,
    scripthash: 0x7b,
    witnesspubkeyhash: 0x19,
    witnessscripthash: 0x28,
    bech32: 'sc'
};

simnet.requireStandard = false;

simnet.rpcPort = 18556;

simnet.minRelay = 1000;

simnet.feeRate = 20000;

simnet.maxFeeRate = 60000;

simnet.selfConnect = false;

simnet.requestMempool = false;

/*
 * Expose
 */

network.main = main;
network.testnet = testnet;
network.regtest = regtest;
network.simnet = simnet;
