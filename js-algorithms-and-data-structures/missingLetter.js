/*
Intermediate Algorithm Scripting: Missing letters
=====
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. 

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let first = alphabet.indexOf(str[0]);
  let last = alphabet.indexOf(str[str.length-1]);
  let completeArray = alphabet.slice(first, last+1).split("");
  let missing = completeArray.filter(x => !str.split('').includes(x));
  if (missing.length == 0) {return}
  else {return String(missing)}
}

fearNotLetter("abce");
