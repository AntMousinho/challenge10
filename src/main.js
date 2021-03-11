const solveCipher = require('./solveCipher');

var myArgs = process.argv.slice(2);

solveCipher(myArgs[0], myArgs[1], myArgs[2], myArgs[3]);


// Works using "node src/main ll dec text_files/testfile2.txt.enc" in command line

// Workds using "node src/main ln enc text_files/testfile.txt 31045" in command line