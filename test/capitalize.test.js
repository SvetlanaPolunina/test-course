import capitalize from '../src/capitalize.js';

if (capitalize('qwerty') !== 'Qwerty') {
  throw new Error ('qwerty !== Qwerty');
}

if (capitalize('') !== '') {
    throw new Error ('capitalize("") !== ""');
}
console.log('Tests have been passed');
