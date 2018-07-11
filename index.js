/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const myMap = new Map(englishToBrailleLiteralSet);

function braille() {
  const str = document.getElementById('sourceLangText').value;
  let out = '';
  // for (let i = 0; i < str.length; i += 1) {
  //   out += myMap.get(str[i]);
  // }
  out += str.split('').map(x => myMap.get(x)).join('');
  document.getElementById('targetLangText').innerHTML = out;
}


document.getElementById('btnConvertEnglishToBraille').addEventListener('click', braille);
