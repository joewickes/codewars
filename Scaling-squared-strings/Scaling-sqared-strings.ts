export class G964 {

  public static scale = (strng, k, n) => {
    const strArr = strng.split('\n');
    let singleStrArr = [];
    const finArr = [];
    
    strArr.forEach(str => {
      str.split('').forEach(char => {
        for (let i = 0; i < k; i++) {
          singleStrArr.push(char);
        }
      })
    
      const joined = singleStrArr.join('');
      singleStrArr = []
      
      for (let i = 0; i < n; i++) {
        finArr.push(joined);
      }
    });
    
    const finStr = finArr.join('\n');
    
    return /^[\r\n]{1,}$/g.test(finStr) ? '' : finStr;
  }
}