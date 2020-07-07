function sumAll(arr) {
  let newArr = arr;
  newArr.sort(function(a, b) {
    return a - b;
  })
  for (let i = newArr[0] + 1; i < newArr[1]; i++) {
    newArr.push(i)
  }
  let sum = 0;
  for  (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}

console.log(sumAll([5, 10]));
