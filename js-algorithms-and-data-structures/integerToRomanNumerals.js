/*
Convert integer <5000 to roman numerals.
*/

function convertToRoman(num) {
  
  //pattern object acts as a lookup table
  const pattern = {
    0: '',
    1: 'a',
    2: 'aa',
    3: 'aaa',
    4: 'ab',
    5: 'b',
    6: 'ba',
    7: 'baa',
    8: 'baaa',
    9: 'ac'
  };

  const units = {a: 'I', b: 'V', c: 'X'};
  const tens = {a: 'X', b: 'L', c:'C'};
  const hundreds = {a: 'C', b: 'D', c:'M'};
  const thousands = {a: 'M', b: '', c:''}; //could be scaled up with appropriate additional symbols...
  const cycler = [units, tens, hundreds, thousands];
  //reverse to work on smaller units first. in theory could work from counting string length instead and loop down
  let reversed = String(num).split('').reverse().join('');
  let outArr = [];
  for (let num in reversed) {
   outArr.push(
     pattern[reversed.charAt(num)]
     .replace(/a/g, cycler[num]['a'])
     .replace(/b/g, cycler[num]['b'])
     .replace(/c/g, cycler[num]['c']));
  }
  return outArr.reverse().join('');
}

convertToRoman(36);
