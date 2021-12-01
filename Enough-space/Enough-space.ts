export const enough = (cap: number, on: number, wait: number): number => (cap - on < wait ? wait - (cap - on) : 0);
