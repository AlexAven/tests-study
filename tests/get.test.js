import getFunction from '../functions.js';

const get = getFunction();

if (get({ hello: 'world' }, 'hello') !== 'world') {
  throw new Error('Функция работает неверно!');
}

if (get({ hello: 'world' }, 'goodbye', 'default') !== 'default') {
  throw new Error('Функция работает неверно!');
}

if (get({ hello: 'world' }, 'hello', 'default') !== 'world') {
  throw new Error('Функция работает неверно!');
}
