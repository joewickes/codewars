export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => distance <= mpg * fuelLeft;
