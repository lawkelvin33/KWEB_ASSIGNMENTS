function getDivisors(number) {
  const result = [];
  for (let i = number; i > Math.SQRT(number); i--) {
    if (number % i === 0) {
      result.push(i);
    }
  }
}
