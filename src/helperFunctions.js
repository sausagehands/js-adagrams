

export const MultiplyLetterPool = (LETTER_POOL) => {
  const weightedLetters = [];
  //does this need to be 'of' instead of 'in'?
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

export const convertToDict = (item) => {
  const dictionary = {};
  for (const letter of item) {
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }
  return dictionary;
};

export const tieBreaker = (currentWord, winningWord) => {
  const lengthCurrent = currentWord.length;
  const lengthWinning = winningWord.length;

  if (lengthCurrent === 10 && lengthWinning != 10) {
    return currentWord;
  } else if (lengthWinning === 10 && lengthCurrent != 10) {
    return winningWord;
  } else if (lengthWinning > lengthCurrent) {
    return currentWord;
  } else {
    return winningWord;
  }
};

