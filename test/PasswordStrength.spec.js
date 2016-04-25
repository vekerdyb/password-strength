import passwordStrength from '../src/PasswordStrength';
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

describe('minimumRequirements options', () => {

  it('should return .5 if password does not have enough lowercase characters', () => {
    let options = {
      minRequirements: {
        l: 2
      },
      minLength: 0,
      pathWellMode: null
    };
    expect(passwordStrength('IaMCAPS', options)).to.equal(.5);
  });

  it('should return .5 if password does not have enough uppercase characters', () => {
    let options = {
      minRequirements: {
        u: 2
      },
      minLength: 0,
      pathWellMode: null
    };
    expect(passwordStrength('iAmlowercase', options)).to.equal(.5);
  });

  it('should return .5 if password does not have enough digits', () => {
    let options = {
      minRequirements: {
        d: 2
      },
      minLength: 0,
      pathWellMode: null
    };
    expect(passwordStrength('password1', options)).to.equal(.5);
  });

  it('should return .5 if password does not have enough special characters', () => {
    let options = {
      minRequirements: {
        s: 2
      },
      minLength: 0,
      pathWellMode: null
    };
    expect(passwordStrength('password*', options)).to.equal(.5);
  });

  it('should return 1 if password matches requirements', () => {
    let options = {
      minRequirements: {
        l: 1,
        u: 1,
        d: 1,
        s: 1
      },
      minLength: 0,
      pathWellMode: null
    };
    expect(passwordStrength('Pa1*', options)).to.equal(1);
  });

});