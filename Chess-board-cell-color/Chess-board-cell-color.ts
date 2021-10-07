export const chessBoardCellColor = (cell1: string, cell2: string) => {
  const findColumn = (str: string): number => {
    return 'ACEG'.split('').includes(str) ? 1 : 2;
  };

  const findRow = (str: string): number => {
    return '1357'.split('').includes(str) ? 1 : 2;
  };

  const cell1Groups: string = `${findColumn(cell1[0])} ${findRow(cell1[1])}`;
  const cell2Groups: string = `${findColumn(cell2[0])} ${findRow(cell2[1])}`;

  return (
    cell1Groups === cell2Groups ||
    (cell1Groups === '1 1' && cell2Groups === '2 2') ||
    (cell1Groups === '2 2' && cell2Groups === '1 1') ||
    (cell1Groups === '2 1' && cell2Groups === '1 2') ||
    (cell1Groups === '1 2' && cell2Groups === '2 1')
  );
};
