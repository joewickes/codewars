export class G964 {

  public static nbYear = (p0, percent, aug, p) => {
    
    let pop = p0;
    let years = 0;
    
    while (pop < p) {
      pop = pop + pop * (percent/100) + aug;
      years++;
    }

    return years;
  }
}