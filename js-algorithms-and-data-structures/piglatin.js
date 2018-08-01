function translatePigLatin(str) {
  if (str.match(/^[^aeiou]+/)) {
    str = str.replace(/([^aeiou]+)(\w*)/g, '$2$1ay')
  }
  else {
    str = str.concat('way');
  }
  return str;
}

translatePigLatin("consonant");
