function rot13(str) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let expArray = Array.from(str.toUpperCase());
  const rotate13 = (letter) => {return letter.match(/[A-Z]/i) ? ALPHABET[(ALPHABET.indexOf(letter)+13)%26] : letter}
  return expArray.map(rotate13).join("");
}

// Change the inputs below to test
rot13("URYYB JBEYQ");
rot13(rot13("JONNY"));
