import top100 from './Top100Topologies.js';

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

function getTopology(string='') {

  return string
    .split('')
    .map(c => getCharacterClass(c));
}

function getClassCounts(string) {
  let topology = getTopology(string);
  let counts = {
    'l': 0,
    'u': 0,
    'd': 0,
    's': 0
  };
  topology.forEach(t => counts[t]++);
  return counts;
}

function isTop100(string) {
  return top100.indexOf(getTopology(string).join('')) > -1;
}

export default {
  getCharacterClass,
  getTopology,
  getClassCounts,
  isTop100
};