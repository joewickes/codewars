export const findSmallestInt = (args: number[]): number => {
  let smallInt: number = 0;
  for (let i = 0; i < args.length; i++) {
    if (i === 0 || smallInt > args[i]) {
      smallInt = args[i];
    }
  }
  return smallInt;
};
