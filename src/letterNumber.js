const invertCipher = require('./invertCipher');

class LetterNumber {
    encrypt(string, cipher, offset) {
        return string.split('').map(char => {
            let number = (parseInt(cipher[char]) + offset) % 99
            return number.toString().padStart(2, '0')
        }).join('');
    }

    decrypt(string, cipher, offset) {
        let invertedCipher = invertCipher(cipher);
        return this.chunk(string.split(''), 2).map(pair => {
            let cipherPair = parseInt(pair.join(''));
            let number = (99 + (cipherPair - offset)) % 99;
            return invertedCipher[number.toString()]
        }).join('');
    }

    chunk(array, chunk_size) {
        let chunks = [];
        while(array.length) {
            chunks.push(array.splice(0, chunk_size));
        }
        return chunks;
    }
}

module.exports = LetterNumber;
