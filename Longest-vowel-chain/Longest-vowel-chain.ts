export const solve = (s: string) => {
  const sp = s.split('');
  let longest = 0;
  let current = 0;
  for (let i = 0; i < sp.length; i++) {
    if (sp[i].match(/[aeiou]/)) {
      current += 1;
    } else {
      if (current > longest) {
        longest = current;
      }
      current = 0;
    }
  }
  return longest;
};
