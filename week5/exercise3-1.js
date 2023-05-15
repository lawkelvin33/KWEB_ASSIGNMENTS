function isValidNumber(number) {
  if (
    +number !== NaN &&
    number > 0 &&
    number < 10 &&
    Math.floor(number) === number
  )
    return true;
  return false;
}
console.log(+"abc" !== NaN);

console.log(isValidNumber(9));

console.log(isValidNumber("4"));

console.log(isValidNumber("abc"));

console.log(isValidNumber(-5));

console.log(isValidNumber(3.5));
