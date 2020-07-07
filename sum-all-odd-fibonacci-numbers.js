function sumFibs(num) {
  let newArr = [1, 1];
  let newArr2 = [];
  for (let i = 0; newArr[i] + newArr[i + 1] <= num; i++) {
    newArr.push(newArr[i] + newArr[i + 1]);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 != 0) {
      newArr2.push(newArr[i])
    }
  }
  let finalArr = newArr2.reduce(function(prev, cur) {
    return prev + cur;
  })
  return finalArr;
}

sumFibs(4);
