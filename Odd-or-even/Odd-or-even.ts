export const oddOrEven = (array: number[]) => array.length === 0 || array.reduce((acc, curr) => acc + curr) % 2 === 0 ? 'even' : 'odd';