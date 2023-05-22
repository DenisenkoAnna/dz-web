let calculateSalary = (blackSalary) => {
  let whiteSalary;
  (blackSalary >= 100000) ?
    whiteSalary = blackSalary - (blackSalary * 0.45) :
    whiteSalary = blackSalary - (blackSalary * 0.35);

  return whiteSalary;
}
console.log(calculateSalary(1000000))
