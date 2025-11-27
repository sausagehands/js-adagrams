import * as helper from './helperFunctions.js';

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



export const drawLetters = () => {
  const weightedPool = helper.MultiplyLetterPool(LETTER_POOL);
  const poolLength = weightedPool.length;

  const drawnLetters = [];
  const purgatoryHand = {};
  let drawnCount = 0;

  const MAX_HAND_SIZE = 10;

  while (drawnCount !== MAX_HAND_SIZE){
    const randIndex = helper.randInt(0, poolLength); //do i need to do poolLength-1?
    const chosenLetter = weightedPool[randIndex];

    let pulledLetterCount = 0;
    if (chosenLetter in purgatoryHand){
      pulledLetterCount = purgatoryHand[chosenLetter];
    };
    if (pulledLetterCount < LETTER_POOL[chosenLetter]){
      drawnLetters.push(chosenLetter);
      purgatoryHand[chosenLetter] = pulledLetterCount + 1;
      drawnCount += 1;
    };
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
