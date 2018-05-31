"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cryptojs = require("crypto-js");
const bcrypt = require("bcrypt-nodejs");
const digest = require("crypto");
// const hash = crypto.createHash('sha256');
exports.generateSalt = function () {
    return bcrypt.genSaltSync(10);
};
exports.hashString = function (plain_string, salt) {
    return bcrypt.hashSync(plain_string, salt);
};
exports.compareHash = function (plain_string, hashed_string) {
    return bcrypt.compareSync(plain_string, hashed_string);
};
exports.encryptString = function (decrypted, secret) {
    const encrypted = cryptojs.AES.encrypt(decrypted, secret).toString();
    return encrypted;
};
exports.decryptString = function (encrypted, secret) {
    const decrypted = cryptojs.AES.decrypt(encrypted, secret).toString(cryptojs.enc.Utf8);
    return decrypted;
};
// proxy digest function using consistent encryption algorithm
exports.digestString = plain_string => digest.createHash('md5').update(plain_string).digest("hex");
//# sourceMappingURL=index.js.map