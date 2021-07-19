export const generateShape = (int: number): string => {
  const char = '+';
  let finStr = '';

  for (let i = 0; i < int; i++) {
    let currStr = '';
    if (i === int - 1) {
      currStr = char.repeat(int);
      finStr += currStr;
    } else {
      currStr = char.repeat(int) + '\n';
      finStr += currStr;
    }
  }

  return finStr;
}