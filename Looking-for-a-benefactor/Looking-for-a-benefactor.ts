export class G964 {
  public static newAvg(arr: number[], newAvg: number): any {
    
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    const nextNum = Math.ceil(newAvg * (arr.length + 1) - total);
    
    if (nextNum < 0) {
      throw new Error('Expected New Average is too low');
    } else {
      return nextNum;
    }
  }
}