import {BLACKLIST_100} from './PathWellModes.js';
import PathWell from './Pathwell';
import merge from 'deepmerge';


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

function passwordStrength(password, options) {
  options = options ? merge(defaultOptions, options) : defaultOptions;
  if (typeof password === 'undefined') {
    return undefined;
  }
  if (password.length < options.minLength) {
    return 0;
  }
  if (!meetsMinimumRequirements(password, options)) {
    return .5;
  }
  if (options.pathWellMode === BLACKLIST_100) {
    if (PathWell.isTop100(password)) {
      return .75;
    }
  }
  return 1;
}

function getPasswordStrengthMessage(passwordStrength) {
  switch (passwordStrength) {
    case 0:
      return 'The password is too short';
    case .5:
      return 'The password matches a known topology';
    case 1:
      return 'Good password'
  }
}

export default passwordStrength;