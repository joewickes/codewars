export class G964 {
  public static rank = (st, we, n) => {
    if (!st) {
      return 'No participants';
    }
    if (n > st.split(',').length) {
      return 'Not enough participants';
    }

    const abc: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const winningNums = st.split(',').map((name, idx) => {
      const nameL: string = name.toLowerCase();

      let nameSum: number = 0;

      for (let i = 0; i < nameL.length; i++) {
        nameSum += abc.indexOf(nameL[i]) + 1;
      }

      return { name, score: (nameSum + name.length) * we[idx] };
    });

    const finObjs = winningNums.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;

      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;

      return 0;
    });
    return finObjs[n - 1].name;
  };
}
