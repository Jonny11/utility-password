import * as cryptojs from 'crypto-js';
import * as bcrypt from 'bcrypt-nodejs';
import * as digest from 'crypto';

// const hash = crypto.createHash('sha256');

export const generateSalt = function(){
   return bcrypt.genSaltSync(10);
}

export const hashString = function(plain_string, salt) {
   return bcrypt.hashSync(plain_string, salt);
};

export const compareHash = function(plain_string, hashed_string) {
   return bcrypt.compareSync(plain_string, hashed_string);
};

export const encryptString = function(decrypted, secret){
  const encrypted = cryptojs.AES.encrypt(decrypted, secret).toString();
  return encrypted;
}

export const decryptString = function(encrypted, secret){
  const decrypted = cryptojs.AES.decrypt(encrypted, secret).toString(cryptojs.enc.Utf8)
  return decrypted;
}

// proxy digest function using consistent encryption algorithm
export const digestString = plain_string => digest.createHash('md5').update(plain_string).digest("hex");

