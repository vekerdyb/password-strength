import {BLACKLIST_100} from './PathWellModes.js';
import PathWell from './Pathwell';
import Top1000Passwords from './Top1000Passwords.js';


const defaultOptions = {
  minLength: 8,
  pathWellMode: BLACKLIST_100,
  minRequirements: {
    l: 1,
    u: 1,
    d: 1,
    s: 0
  }
};

function meetsMinimumRequirements(password, options) {
  let counts = PathWell.getClassCounts(password);
  for (let k of Object.keys(options.minRequirements)) {
    if (options.minRequirements[k] > counts[k]) {
      return false;
    }
  }
  return true;
}

const PASSWORD_STRENGTH = {
  VERY_WEAK: 0,
  WEAK: .25,
  MEDIUM: .5,
  FAIR: .75,
  STRONG: 1
};

function passwordStrength(password) {
  if (typeof password === 'undefined') {
    return PASSWORD_STRENGTH.VERY_WEAK;
  }
  if (Top1000Passwords.indexOf(password) > -1) {
    return PASSWORD_STRENGTH.VERY_WEAK;
  }
  if (password.length < 6) {
    return PASSWORD_STRENGTH.VERY_WEAK;
  }
  if (password.length < 8 && password.toLowerCase() === password) {
    return PASSWORD_STRENGTH.WEAK;
  }
  if (PathWell.isTop100(password)) {
    return PASSWORD_STRENGTH.MEDIUM;
  }
  const classCounts = PathWell.getClassCounts(password);
  if (password.length > 8 && classCounts.s > 0 && classCounts.u > 0 && classCounts.d > 0 && classCounts.l > 0) {
    return PASSWORD_STRENGTH.STRONG;
  }
  return PASSWORD_STRENGTH.FAIR;
}

export {
  passwordStrength,
  meetsMinimumRequirements,
  defaultOptions,
  PathWell,
  PASSWORD_STRENGTH
};