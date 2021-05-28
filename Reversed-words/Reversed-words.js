function reverseWords(str) {
  const strArr = str.split(' ');
  const revStrArr = strArr.reverse();
  const finStr = revStrArr.join(' ');
  return finStr;
}