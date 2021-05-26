function flip(string $dir, array $arr): array {
  if ($dir === "R") {
    sort($arr);
    return $arr;
  } else {
    rsort($arr);
    return $arr;
  }
}