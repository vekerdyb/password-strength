import passwordStrength from './PasswordStrength';
import { expect } from 'chai';

describe('PasswordStrength', () => {

  it('should exist', () => {
    expect(passwordStrength).to.be.a('function');
  });

  it('should return undefined if password is undefined', () => {
    expect(passwordStrength()).to.be.undefined;
  });

  it('should return 0 if password length is smaller than 8', () => {
    expect(passwordStrength('seven77')).to.equal(0)
  });

  it('should return 1 if password length is 7 and minLength option is 7', () => {
    expect(passwordStrength('Seven77', {minLength: 7})).to.equal(1);
  });

  it('should return .5 if password does not meet minimum requirements', () => {
    expect(passwordStrength('notgoodp')).to.equal(.5);
  });

  it('should return 1 if password meets provided minimum requirements', () => {
    let options = {
      pathWellMode: null,
      minRequirements: {u: 0, d: 0, s: 0}
    };
    expect(passwordStrength('notgoodp', options)).to.equal(1);
  });

  it('should return .75 if password long enough but PathWell-blacklisted', () => {
    expect(passwordStrength('Simple88')).to.equal(.75);
  });

  it('should return 1 if password is not PathWell-blacklisted', () => {
    expect(passwordStrength('coMP1*3x')).to.equal(1);
  });

});

describe('meetsMinimumRequirements function', () => {
  // TODO
});

describe('getPasswordStrengthMessage function', () => {

});