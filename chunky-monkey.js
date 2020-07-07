function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let tempArr;
  for (let i = 0; i < arr.length; i += size) {
    tempArr = arr.slice(i, i + size);
    newArr.push(tempArr);
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
