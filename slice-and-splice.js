function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let newArr2 = [];
  newArr = arr2.slice(0, n);
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i])
  }
  newArr2 = arr2.slice(n);
  for (let j = 0; j < arr2.length - n; j++) {
    newArr.push(newArr2[j])
  }
  
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));
