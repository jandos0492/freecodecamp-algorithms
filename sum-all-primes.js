function sumPrimes(num) {
  let newArr = [];
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if ((isPrime(i) == true)) {
      newArr.push(i);
    }
  }
  let finalArr = newArr.reduce(function(prev, cur) {
    return prev + cur;
  })
  return finalArr;
}

console.log(sumPrimes(10));
