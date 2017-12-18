'use strict'
const crypto = require("crypto")

class CryptoAes256 {
    constructor(salt){
        this.alg = "aes256"
        this.charcode = "utf8"
        this.encoding = "hex"
        this.salt = salt || ""
    }
    encode(text, password){
        const cipher = crypto.createCipher(this.alg, this.salt + password)
        const cipheredText = cipher.update(text, this.charcode, this.encoding)
        return cipheredText + cipher.final(this.encoding)
    }
    decode(hextext, password){
        const decipher = crypto.createDecipher(this.alg, this.salt + password)
        const dec = decipher.update(hextext, this.encoding, this.charcode)
        return dec + decipher.final(this.charcode)
    }
}

module.exports = CryptoAes256
