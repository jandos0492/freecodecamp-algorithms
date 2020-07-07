function smallestCommons(arr) {
  let sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  let min = sortedArr[0];
  let max = sortedArr[1];
  let nod = function(a, b) {
    if (b == 0) {
      return a;
    }
    return nod(b,a % b);
  }
  let nok = function(a, b) {
    if (a > b) {
      return a / nod(a, b) * b;
    } else
        return (b / nod(a, b)) * a;
  }
  let curNok = min;
  while (min <= max) {
    curNok = nok(curNok, min);
    min++
  }
  console.log(sortedArr)
  return curNok;
}


console.log(smallestCommons([1, 13]));
