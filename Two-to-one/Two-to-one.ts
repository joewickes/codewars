export class G964 {
  public static longest = (s1, s2) =>
    (s1 + s2)
      .split('')
      .sort()
      .reduce((acc, curr) => (acc.includes(curr) ? acc + '' : acc + curr), '');
}
