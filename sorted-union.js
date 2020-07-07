function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let i_1 = 0; i_1 < arguments[i].length; i_1++) {
      if (newArr.includes(arguments[i][i_1]) == false) {
        newArr.push(arguments[i][i_1]);
      }
    }
  }

  console.log(newArr)
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
