export const digitize = (n: number): number[] => n.toString().split('').reverse().map(item => parseInt(item));