const readCipher = require('./readCipher');
const fs = require('fs');
const LetterNumber = require('./letterNumber');
const LetterLetter = require('./letterLetter');

const solveCipher = (cipherFile, method, file, key = 0) => {
    let cipher = readCipher(cipherFile);
    let fileString = fs.readFileSync(file).toString();
    let output = ''
    
    if(key > 0) output = method(fileString, cipher, key);
    else output = method(fileString, cipher);

    let newFileName = ''
    if(file.slice(file.length - 4) === '.txt') {
        newFileName = `${file}.enc`;
    } else {
        newFileName = file.slice(0, file.length - 4);
    }

    fs.writeFile(`${newFileName}`, output, (err) => {
        if(err) throw err;
    });
}

module.exports = solveCipher;

// Test
// let ln = new LetterNumber();
// let ll = new LetterLetter();

// solveCipher('character_set.txt', ln.encrypt, 'testfile.txt', 31045)

// solveCipher('character_set2.txt', ll.decrypt, 'testfile2.txt.enc');

// let test = 'hello.txt.enc';
// console.log(test.slice(test.length - 4));

// console.log(test.slice(0, test.length - 4));