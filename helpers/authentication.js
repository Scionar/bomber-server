var crypto = require('crypto');

const hash = input =>
  crypto
    .createHash('md5')
    .update(input)
    .digest('hex');

const check = (clean, hashed) => (hashed === hash(clean) ? true : false);

module.exports = { hash, check };
