const invertCipher = require('./invertCipher');

class LetterLetter {
    encrypt(string, cipher) {
        return string.split('').map(char => {
            return cipher[char];
        }).join('');
    }

    decrypt(string, cipher) {
        let swappedCipher = invertCipher(cipher);
        return string.split('').map(char => {
            return swappedCipher[char];
        }).join('');
    }
}

module.exports = LetterLetter;
