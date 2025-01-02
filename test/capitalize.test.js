import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('qwerty'), 'Qwerty');

console.log('Tests have been passed');
