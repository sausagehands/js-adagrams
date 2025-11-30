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

const SCORE_CHART = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1,
  'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
}

export const drawLetters = () => {
  const weightedPool = helper.MultiplyLetterPool(LETTER_POOL);
  const poolLength = weightedPool.length;

  const drawnLetters = [];
  const purgatoryHand = {};
  let drawnCount = 0;

  const MAX_HAND_SIZE = 10;

  while (drawnCount !== MAX_HAND_SIZE) {
    const randIndex = helper.randInt(0, poolLength); //do i need to do poolLength-1?
    const chosenLetter = weightedPool[randIndex];

    let pulledLetterCount = 0;
    if (chosenLetter in purgatoryHand) {
      pulledLetterCount = purgatoryHand[chosenLetter];
    };
    if (pulledLetterCount < LETTER_POOL[chosenLetter]) {
      drawnLetters.push(chosenLetter);
      purgatoryHand[chosenLetter] = pulledLetterCount + 1;
      drawnCount += 1;
    };
  };
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const upperWord = input.toUpperCase();
  const inputDict = helper.convertToDict(upperWord);
  const handDict = helper.convertToDict(lettersInHand);

  for (const letter in inputDict) {
    if (!(letter in handDict) || inputDict[letter] > handDict[letter]) {
      return false;
    };
  };
  return true;
};

export const scoreWord = (word) => {
  const upperWord = word.toUpperCase();
  const wordPlayed = helper.convertToDict(upperWord);

  let runningScore = 0;

  if (upperWord.length === 0){
    return 0;
  }

  if (upperWord.length >= 7) {
    const BONUS_SCORE = 8;
    runningScore += BONUS_SCORE;
  };

  for (const letter in wordPlayed) {
    const count = wordPlayed[letter];
    runningScore += count * SCORE_CHART[letter];
  };
  return runningScore;
};

export const highestScoreFrom = (words) => {

  let winningWord = '';
  let highScore = 0;

  for (const word of words) {
    let currentScore = scoreWord(word);
    if (currentScore > highScore) {
      highScore = currentScore;
      winningWord = word;
    } else if (currentScore === highScore) {
      winningWord = helper.tieBreaker(word, winningWord);
    }
  }
  return {word: winningWord, score: highScore};
};
