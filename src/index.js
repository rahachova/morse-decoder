const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrayOfNumbers = expr.split('')
    const chunkedArrays = []
    for (let i = 0; i < arrayOfNumbers.length; i += 10) {
        let element = arrayOfNumbers.slice(i, i + 10);
        chunkedArrays.push(element)
    }
    const array = chunkedArrays.map((item) => {
    return item.slice(item.indexOf('1'))
    })
    return array.map(elem => {
        const signs = []
        if(elem[0] === '*') {
            return ' '
        }
        for (let i = 0; i < elem.length; i += 2) {
            let chunk = elem.slice(i, i + 2);
            if(chunk.join('') === '10') {
                signs.push('.')
            } else if (chunk.join('') === '11') {
                signs.push('-')
            }
        }
        return MORSE_TABLE[signs.join('')]
    }).join('')
}

module.exports = {
    decode
}