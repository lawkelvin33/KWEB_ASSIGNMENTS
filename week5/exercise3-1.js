function isValidNumber(number) {
  console.log(typeof number === "number");
  console.log(+number > 0);
  console.log(+number < 10);
  console.log(Math.floor(+number) === +number);
  if (number == +number) return true;
}

console.log(isValidNumber(9));
console.log("-----------------");
console.log(isValidNumber("4"));
console.log("-----------------");
console.log(isValidNumber("abc"));
console.log("-----------------");
console.log(isValidNumber(-5));
console.log("-----------------");
console.log(isValidNumber(3.5));
console.log("-----------------");
