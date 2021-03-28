const getRandomNumber = (max: number, min: number = 1): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export { getRandomNumber };
