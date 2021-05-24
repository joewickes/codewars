function removeExclamationMarks(s) {
  const regex = /!/g;
  const newStr = s.replace(regex, '');
  return newStr;
}