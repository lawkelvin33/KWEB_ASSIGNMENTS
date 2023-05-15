function getDivisors(number) {
  const result = [];
  for (let i = number; i > Math.sqrt(number); i--) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(getDivisors(5));
console.log(getDivisors(24));
console.log(getDivisors(196));
