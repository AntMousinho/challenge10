const readCipher = require('./readCipher');
const fs = require('fs');
const LetterNumber = require('./letterNumber');
const LetterLetter = require('./letterLetter');

const solveCipher = (cipherFile, method, file, key = null) => {
    let cipher = readCipher(cipherFile);
    let fileString = fs.readFileSync(file, 'utf8');
    let output = ''
    
    if(key !== null) output = method(fileString, cipher, key);
    else output = method(fileString, cipher);

    let newFileName = ''
    if(file.slice(file.length - 4) === '.txt') {
        newFileName = `${file}.enc`;
    } else {
        newFileName = file.slice(0, file.length - 4);
    }

    fs.writeFile(`../text_files/${newFileName}`, output, (err) => {
        if(err) throw err;
    });
}

module.exports = solveCipher;

// Test
// let ln = new LetterNumber();
let ll = new LetterLetter();

// solveCipher('character_set.txt', ln.encrypt, '../text_files/testfile.txt', 31045)

solveCipher('character_set2.txt', ll.decrypt, '../text_files/testfile2.txt.enc');
