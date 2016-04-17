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
      expect(Pathwell.getTopology('name')).to.deep.equal('llll'.split(''));
    });

    it('should return uuuu for uppercase string', () => {
      expect(Pathwell.getTopology('NAME')).to.deep.equal('uuuu'.split(''));
    });

    it('should return ulllldddd for Mydog2016 string', () => {
      expect(Pathwell.getTopology('Mydog2016')).to.deep.equal('ulllldddd'.split(''));
    });

    it('should return [] for undefined', () => {
      expect(Pathwell.getTopology()).to.be.empty;
    })

  });

  describe('getCharacterClass function', () => {
    it('should exist', () => {
      expect(Pathwell.getCharacterClass).to.be.a('function');
    });

    it('should return l for lowercase character', () => {
      expect(Pathwell.getCharacterClass('a')).to.be.equal('l')
    });

    it('should return u for uppercase character', () => {
      expect(Pathwell.getCharacterClass('A')).to.be.equal('u')
    });

    it('should return d for digit', () => {
      expect(Pathwell.getCharacterClass('1')).to.be.equal('d')
    });

    it('should return s for special character', () => {
      expect(Pathwell.getCharacterClass('*')).to.be.equal('s')
    });

    it('should return s for non-ascii letter', () => {
      expect(Pathwell.getCharacterClass('á')).to.be.equal('s')
    });

  });

  describe('getClassCounts function', () => {

    it('should exist', () => {
      expect(Pathwell.getClassCounts).to.be.a('function');
    });

    it('should return an object', () => {
      expect(Pathwell.getClassCounts()).to.be.an('object');
    });

    it('should return a count 0 for each character class for no string', () => {
      expect(Pathwell.getClassCounts()).to.deep.equal({
        'l': 0,
        'u': 0,
        'd': 0,
        's': 0
      })
    });

    it('shoud return the correct character class counts', () => {
      expect(Pathwell.getClassCounts('May2015!')).to.deep.equal({
        'l': 2,
        'u': 1,
        'd': 4,
        's': 1
      })
    });

  });

  describe('isTop100 function', () => {

    it('should exist', () => {
      expect(Pathwell.isTop100).to.be.a('function');
    });

    it('should return false if topology is not in top100', () => {
      expect(Pathwell.isTop100('aaaaaaaaaaaaaaaaaaaa')).to.be.false;
    });

    it('should return true if topology is in top100', () => {
      expect(Pathwell.isTop100('password')).to.be.true;
    })

  });

});
