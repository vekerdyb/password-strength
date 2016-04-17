const LOWER = /[a-z]/;
const UPPER = /[A-Z]/;
const DIGIT = /[0-9]/;

function getCharacterClass(char) {
  if (LOWER.test(char)) {
    return 'l';
  }
  if (UPPER.test(char)) {
    return 'u';
  }
  if (DIGIT.test(char)) {
    return 'd';
  }
  return 's';
}

function getTopology(string) {
  return string
    .split('')
    .map(c => getCharacterClass(c))
    .join('');
}


export default {
  getCharacterClass,
  getTopology
};