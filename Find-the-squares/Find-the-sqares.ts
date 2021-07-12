export const findSquares = (num:number): string => {
  let currentSq = 1;
  let lastSq = 1;
  
  while (currentSq ** 2 - lastSq !== num) {
    lastSq = currentSq ** 2;
    currentSq++;
  }
  
  return `${ currentSq ** 2 }-${ lastSq }`
};