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
    let morseDecode = new String();

  for(let i = 0; i < expr.length; i+=10){
    let morseSymbol = expr.slice(i,i+10)
    let morseDecodeSymbol = new String();

    for(let j = 0; j < morseSymbol.length; j+=2){
      if (morseSymbol.slice(j,j+2) == "10"){
        morseDecodeSymbol += ".";
      }
      else if (morseSymbol.slice(j,j+2) == "11"){
        morseDecodeSymbol += "-";
      }
    };

    if (morseSymbol == "**********"){
      morseDecode += " ";
      continue;
    };

    morseDecode += MORSE_TABLE[morseDecodeSymbol]
  };

  return morseDecode;
};

module.exports = {
    decode
}