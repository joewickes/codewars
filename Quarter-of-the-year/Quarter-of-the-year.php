function quarterOf($month) {
  $type_of_month = gettype($month);

  if ($type_of_month === 'integer') {
    return $month === 1 or $month === 2 or $month === 3 ? 1
      : $month === 4 or $month === 5 or $month === 6 ? 2
      : $month === 7 or $month === 8 or $month === 9 ? 3
      : $month === 10 or $month === 11 or $month === 12 ? 4
      : 'Not a valid $month number';
  }
}