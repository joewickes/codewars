export const firstNonConsecutive = (arr: number[]): null | number => {
  let lastNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      lastNum = arr[i];
    } else if (arr[i] !== lastNum + 1) {
      return arr[i];
    } else lastNum = arr[i];
  }

  return null;
};
