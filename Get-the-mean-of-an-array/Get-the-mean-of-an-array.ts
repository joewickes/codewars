export function getAverage(marks:number[]):number{
  return Math.floor(
    marks.reduce(function (acc, curr) {
      return acc + curr;
  }, 0) / marks.length);
}