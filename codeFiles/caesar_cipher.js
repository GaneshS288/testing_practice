let enumAlphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

let alphabetRegex = new RegExp("^[A-Za-z]$");

function caesarCipher(string, shiftFactor) {
  let stringArray = string.split("");

  let shiftedArray = stringArray.map((char) => {
    if (alphabetRegex.test(char)) return shiftLetter(char, shiftFactor);
    else return char;
  });

  return shiftedArray.join("");
}

function shiftLetter(char, shiftFactor) {
  const isUpperCase = char === char.toUpperCase() ? true : false;
  let shiftedIndex = (enumAlphabet[char.toLowerCase()] + shiftFactor) % 26;
  if (shiftedIndex === 0) shiftedIndex = 26;
  let shiftedLetter;

  for (let key in enumAlphabet) {
    if (enumAlphabet[key] === shiftedIndex) shiftedLetter = key;
  }

  if (isUpperCase) return shiftedLetter.toUpperCase();
  else return shiftedLetter;
}

export default caesarCipher;
