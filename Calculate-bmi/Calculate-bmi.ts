export const bmi = (weight: number, height: number): string => {
  const bmi = weight / height ** 2;
  return bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : 'Obese';
};
