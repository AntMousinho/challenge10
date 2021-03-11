const fs = require('fs');
const LetterNumber = require('./letterNumber');
const LetterLetter = require('./letterLetter');

const solveCipher = (cipherFile, method, file, key = null) => {
    const fileString = fs.readFileSync(file, 'utf8');

    const cipherType = selectCipher(cipherFile);
    
    const output = executeMethod(method, cipherType, fileString, key);
    
    let outputFileName = sliceFileName(file);

    fs.writeFile(`${outputFileName}`, output, (err) => {
        if(err) throw err;
    });
}


const sliceFileName = file => {
    let newFileName = ''
    if(file.slice(file.length - 4) === '.txt') {
        newFileName = `${file}.enc`;
    } else {
        newFileName = file.slice(0, file.length - 4);
    }
    return newFileName;
}



const selectCipher = (cipherFile) => {
    if(cipherFile === 'ln') {
        return new LetterNumber('src/character_set.txt');
    } else {
        return new LetterLetter('src/character_set2.txt');
    }
}



const executeMethod = (method, cipherType, fileString, key) => {
    let output = ''
    if(method === 'enc') {
        output = cipherType.encrypt(fileString, parseInt(key));
    } else {
        output = cipherType.decrypt(fileString, parseInt(key));
    }
    return output;
}

module.exports = solveCipher;
