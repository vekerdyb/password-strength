const LOWER = /[a-z]/;
const UPPER = /[A-Z]/;
const DIGIT = /[0-9]/;

class Pathwell {

  _getCharacterClass(char) {
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

  getTopology(string) {
    return string
      .split('')
      .map(c => this._getCharacterClass(c))
      .join('');
  }

}

export default new Pathwell();