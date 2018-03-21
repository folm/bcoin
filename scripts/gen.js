'use strict';

const util = require('../lib/utils/util');
const consensus = require('../lib/protocol/consensus');
const encoding = require('../lib/utils/encoding');
const TX = require('../lib/primitives/tx');
const Block = require('../lib/primitives/block');
const Script = require('../lib/script/script');

function createGenesisBlock(options) {
  let flags = options.flags;
  let key = options.key;
  let reward = options.reward;

  if (!flags) {
    flags = Buffer.from(
      '17 February 2018 - Folm Coin - Week of chaos, again, engulfs Trump',
      'ascii');
  }

  if (!reward)
    reward = 50 * consensus.COIN;

  const tx = new TX({
    version: 1,
    inputs: [{
      prevout: {
        hash: encoding.NULL_HASH,
        index: 0xffffffff
      },
      script: Script()
        .pushInt(486604799)
        .pushPush(Buffer.from([4]))
        .pushData(flags)
        .compile(),
      sequence: 0xffffffff
    }],
    outputs: [{
      value: reward,
      script: Script.fromPubkey(key)
    }],
    locktime: 0
  });

  const block = new Block({
    version: options.version,
    prevBlock: encoding.NULL_HASH,
    merkleRoot: tx.hash('hex'),
    time: options.time,
    bits: options.bits,
    nonce: options.nonce,
    height: 0
  });

  block.txs.push(tx);

  return block;
}

const main = createGenesisBlock({
  version: 1,
  time: 1518900000,
  bits: 504365055,
  nonce: 1809743
});

const testnet = createGenesisBlock({
  version: 1,
  time: 1296688602,
  bits: 486604799,
  nonce: 414098458
});

util.log(main);
util.log('');
util.log(testnet);
util.log('');
util.log('main hash: %s', main.rhash());
util.log('main raw: %s', main.toRaw().toString('hex'));
util.log('');
util.log('testnet hash: %s', testnet.rhash());
util.log('testnet raw: %s', testnet.toRaw().toString('hex'));

