export function dirReduc(arr: string[]): string[] {
  const finArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    const last: string = finArr[finArr.length - 1] || '';
    if (
      (arr[i].toLowerCase() === 'north' && last.toLowerCase() === 'south') ||
      (arr[i].toLowerCase() === 'south' && last.toLowerCase() === 'north') ||
      (arr[i].toLowerCase() === 'east' && last.toLowerCase() === 'west') ||
      (arr[i].toLowerCase() === 'west' && last.toLowerCase() === 'east')
    ) {
      finArr.pop();
    } else {
      finArr.push(arr[i]);
    }
  }

  return finArr;
}
