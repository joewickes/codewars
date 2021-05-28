function reverseWords($str) {
  $strArr = explode(" ", $str);
  $revArr = array_reverse($strArr);
  $finStr = join(" ", $revArr);
  return $finStr;
}