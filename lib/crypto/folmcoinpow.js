/*!
 * folmcoin.js - proof of work functions for folmcoin
 */
const folmcoinhash = require('folmcoinhash/build/Release/folmcoinhash');

/**
 * Calculates a Phi1612 hash using the folmcoinhash module.
 * @alias module:crypto/folmcoinpow.phi1612
 * @param {Buffer} data
 * @returns {Buffer}
 */
function phi1612(data) {
    return folmcoinhash.Phi1612(data);
}

/**
 * Calculates proof-of-work using the correct algorithm based on a timestamp.
 * @alias module:crypto/folmcoinpow.pow
 * @param {Buffer} data
 * @param {Number} time
 * @returns {Buffer}
 */
function pow(data, time) {
        return phi1612(data);
}

/**
 * Calculates the N-Factor to use in scrypt, based on a timestamp.
 * @param {Number} time
 * @returns {Number}
 */
function getNFactor(time) {
    // min, max and start time from folmcoin chain params
    const min = 10;
    const max = 30;
    const start = 1389306217;

    let n = min;
    if (time > start) {
        let l = 0;
        let s = time - start;
        while ((s >> 1) > 3) {
            l++;
            s >>= 1;
        }
        s &= 3;

        n = (l * 158 + s * 28 - 2670) / 100;
        n = Math.min(Math.max(n, min), max);
    }

    return 1 << (n + 1);
}

exports.phi1612 = phi1612;
exports.pow = pow;