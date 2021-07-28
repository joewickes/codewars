export class Kata {
  static getCount(str: string) {
    return str.split('').reduce((acc, curr) => (curr.match(/[aeiou]/) ? (acc += 1) : (acc += 0)), 0);
  }
}
