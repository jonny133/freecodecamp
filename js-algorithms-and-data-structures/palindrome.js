function palindrome(str) {
  let temp;
  
  //remove non-alphanumeric chars & change to same case
  temp = str.replace(/[^A-Z^0-9]+/gi, '').toUpperCase();
  let len = temp.length;
  let firstHalf, secondHalf;

  if (len % 2 != 0) {
    // ignore middle char of odd-length string
    firstHalf = temp.slice(0, (len-1)/2);
    secondHalf = temp.slice((len+1)/2);
  }
  else {
    firstHalf = temp.slice(0, len/2);
    secondHalf = temp.slice(len/2);
  }

  return (firstHalf == secondHalf.split('').reverse().join('')) ? true : false;
}



palindrome("eye");
