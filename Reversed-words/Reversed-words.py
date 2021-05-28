def reverse_words(s):
  strList = s.split(' ')
  revList = list(reversed(strList))
  finStr = ' '.join(revList)
  return finStr