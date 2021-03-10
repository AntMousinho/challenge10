const fs = require('fs');

const readCipher = (file) => {
    let data = fs.readFileSync(file).toString();
    let result = {}
    data.split('\r\n').map(pair => pair.split(', ')).forEach(splitPair => result[splitPair[0]] = splitPair[1])
    return  result;
}

module.exports = readCipher;
