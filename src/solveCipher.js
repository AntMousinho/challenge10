const fs = require('fs');
const LetterNumber = require('./letterNumber');
const LetterLetter = require('./letterLetter');

const solveCipher = (cipherFile, method, file, key = null) => {
    let fileString = fs.readFileSync(file, 'utf8');
    let output = '';
    
    if(cipherFile === 'ln') {   //  call letterNumber
        let ln = new LetterNumber('character_set.txt');
        if(method === 'enc') { // call encrypt
            output = ln.encrypt(fileString, key);
        } else {    // call decrypt
            output = ln.decrypt(fileString, key);
        }

    } else {    //  call letterLetter
        let ll = new LetterLetter('character_set2.txt');
        if(method === 'enc') {    // call encrypt
            output = ll.encrypt(fileString);
        } else {    // call decrypt
            output = ll.decrypt(fileString);
        }
    }
    
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
// let ll = new LetterLetter();

// solveCipher('character_set.txt', ln.encrypt, '../text_files/testfile.txt', 31045)

// solveCipher('character_set2.txt', ll.decrypt, '../text_files/testfile2.txt.enc');
