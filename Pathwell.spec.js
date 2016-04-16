import { expect } from 'chai';

import Pathwell from './Pathwell';

describe('Pathwell library', () => {

  it('should exist', () => {
    expect(Pathwell).to.be.an('object');
  });

  describe('getTopology function', () => {
    it('should exist', () => {
      expect(Pathwell.getTopology).to.be.a('function');
    });

    it('should return llll for lowercase string', () => {
      expect(Pathwell.getTopology('name')).to.equal('llll');
    });

    it('should return uuuu for uppercase string', () => {
      expect(Pathwell.getTopology('NAME')).to.equal('uuuu');
    });

    it('should return ulllldddd for Mydog2016 string', () => {
      expect(Pathwell.getTopology('Mydog2016')).to.equal('ulllldddd');
    });

  });

  describe('_getCharacterClass private method', () => {
    it('should exist', () => {
      expect(Pathwell._getCharacterClass).to.be.a('function');
    });

    it('should return l for lowercase character', () => {
      expect(Pathwell._getCharacterClass('a')).to.be.equal('l')
    });

    it('should return u for uppercase character', () => {
      expect(Pathwell._getCharacterClass('A')).to.be.equal('u')
    });

    it('should return d for digit', () => {
      expect(Pathwell._getCharacterClass('1')).to.be.equal('d')
    });

    it('should return s for special character', () => {
      expect(Pathwell._getCharacterClass('*')).to.be.equal('s')
    });

    it('should return s for non-ascii letter', () => {
      expect(Pathwell._getCharacterClass('á')).to.be.equal('s')
    });

  })

});
