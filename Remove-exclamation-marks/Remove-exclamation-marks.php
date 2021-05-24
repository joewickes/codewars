function remove_exclamation_marks($string) {
  $regex = "/!/";
  return preg_replace($regex, "", $string);
}