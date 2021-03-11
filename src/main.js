const solveCipher = require('./solveCipher');

var myArgs = process.argv.slice(2);

solveCipher(myArgs[0], myArgs[1], myArgs[2], myArgs[3]);


// solveCipher('ll', 'dec', '../text_files/testfile2.txt.enc')

// solveCipher('character_set2.txt', ll.decrypt, '../text_files/testfile2.txt.enc');
