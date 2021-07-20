export class G964 {
  public static printerError(s: string): string {
    const low = s.toLowerCase();
    const regex = /[a-m]/;
    const total = s.length;
    let wrong = 0;

    for (let i = 0; i < total; i++) {
      if (!regex.test(low[i])) {
        wrong++;
      }
    }
    
    return `${ wrong }/${ total }`;
  }
}
