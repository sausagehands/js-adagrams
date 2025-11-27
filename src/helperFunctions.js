// import{
//   LETTER_POOL
// } from '../test/adagrams.test.js';

const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const MultiplyLetterPool = (LETTER_POOL) => {
  const weightedLetters = [];
  for (const letter in LETTER_POOL) {
    const count = LETTER_POOL[letter];
    const groupedLetters = letter.repeat(count);
    weightedLetters.push(...groupedLetters);
  }
  return weightedLetters;
};

//have to redo this-- i guess theres already a rand function in js?
export const randInt = (min, max) => {
  const minm = Math.ceil(min);
  const maxm = Math.floor(max);
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};
