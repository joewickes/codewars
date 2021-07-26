export const accum = (s: string): string => {
  const letterArr = s.split('');
  const finArr = letterArr.map((letter, idx) => {
    let currStr = '';

    for (let i = 0; i <= idx; i++) {
      if (i === 0) {
        currStr += letter.toUpperCase();
      } else {
        currStr += letter.toLowerCase();
      }
    }

    return currStr;
  });

  return finArr.join('-');
};
