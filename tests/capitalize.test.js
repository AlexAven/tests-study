import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// REFACTORING

assert.equal(capitalize('hello'), 'Hello');

assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');