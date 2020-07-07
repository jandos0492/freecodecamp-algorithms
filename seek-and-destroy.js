function destroyer(arr1) {
  let arr2 = [];
  let newArr2 = [];
  for (let i = 1; i < arguments.length; i++) {
    arr2.push(arguments[i])
  }
  console.log(arr2)
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) == false) {
      newArr2.push(arr1[i]);
    }
  }
  console.log(newArr2)
  return newArr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
