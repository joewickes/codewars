export class Kata {
  static highAndLow(numbers: string) {
    let highest: number;
    let lowest: number;
    
    numbers.split(' ').forEach((num, idx) => {
      const parsed = parseInt(num);
      
      if (idx === 0) {
        highest = parsed;
        lowest = parsed;
      } else if (parsed > highest) {
        highest = parsed;
      } else if (parsed < lowest) {
        lowest = parsed;
      }
    })
    
    return `${ highest } ${ lowest }`
  }
}