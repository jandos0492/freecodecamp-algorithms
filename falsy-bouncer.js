function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) != false) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(bouncer([null, NaN, 1, 2, undefined]));
