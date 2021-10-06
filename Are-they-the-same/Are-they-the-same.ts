export const comp = (a1: number[] | null, a2: number[] | null): boolean => {
  if (!!a1 && !!a2) {
    let a1Sorted: number[] = [];
    let a2Sorted: number[] = [];

    a1Sorted = a1.sort((a, b) => a - b).map((num) => num ** 2);
    a2Sorted = a2.sort((a, b) => a - b);

    for (let i = 0; i < a1Sorted.length; i++) {
      if (a1Sorted[i] !== a2Sorted[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
