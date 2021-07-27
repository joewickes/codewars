export function solve(arr: string[]) {
  const alphabetTemplate = 'abcdefghijklmnopqrstuvwxyz';
  const finArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    finArr[i] = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === alphabetTemplate[j]) {
        finArr[i] += 1;
      }
    }
  }

  return finArr;
}
