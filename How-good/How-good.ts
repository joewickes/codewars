export const betterThanAverage = (classPoints: number[], yourPoints: number) => {
  const avg = classPoints.reduce((prev, curr) => prev + curr, 0) / classPoints.length;
  return yourPoints > avg;
};
