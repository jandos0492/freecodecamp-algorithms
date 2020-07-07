function getIndexToIns(arr, num) {
  
  let sortedArr = arr.sort((a, b) => a - b);
  let number = Math.ceil(num / 10) * 10;
  let newArr = [];
  let newNum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([], 35));
