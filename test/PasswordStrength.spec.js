import { passwordStrength, PASSWORD_STRENGTH } from '../src/PasswordStrength';
import { expect } from 'chai';

describe('PasswordStrength', () => {

  it('should exist', () => {
    expect(passwordStrength).to.be.a('function');
  });

  it('should return undefined if password is undefined', () => {
    expect(passwordStrength()).to.be.undefined;
  });

  it('should return VERY_WEAK if password is in the top 1000', () => {
    expect(passwordStrength('password')).to.equal(PASSWORD_STRENGTH.VERY_WEAK)
  });

  it('should return VERY_WEAK if password length is smaller than 6', () => {
    expect(passwordStrength('*****')).to.equal(PASSWORD_STRENGTH.VERY_WEAK)
  });

  it('should return WEAK if only contains lowercase letters and length is under 8', () => {
    expect(passwordStrength('fwaqoyz')).to.equal(PASSWORD_STRENGTH.WEAK);
  });

  it('should return MEDIUM if password follows a known topology', () => {
    expect(passwordStrength('fwaqoy38')).to.equal(PASSWORD_STRENGTH.MEDIUM)
  });

  it('should return STRONG if length is above 8, contains all 4 character classes and not common topology', () => {
    expect(passwordStrength('Real&g45d')).to.equal(PASSWORD_STRENGTH.STRONG)
  });

  it('should return FAIR otherwise', () => {
    expect(passwordStrength('real&g45d')).to.equal(PASSWORD_STRENGTH.FAIR)
  });

});