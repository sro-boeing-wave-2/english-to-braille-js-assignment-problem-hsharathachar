/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const myMap = new Map(englishToBrailleLiteralSet);
let out = '';

function braille() {
  const str = document.getElementById('sourceLangText').value;
  for (let i = 0; i < str.length; i += 1) {
    out += myMap.get(str[i]);
  }
  document.getElementById('targetLangText').innerHTML = out;
}


document.getElementById('btnConvertEnglishToBraille').addEventListener('click', braille);
