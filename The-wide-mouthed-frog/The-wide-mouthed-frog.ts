export function mouthSize(animal: string): string {
  const regex: RegExp = /alligator/i;
  return animal.match(regex) ? 'small' : 'wide';
}