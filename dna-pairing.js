function pairElement(str) {
  let arr = [];
  let aArr = ["A", "T"];
  let tArr = ["T", "A"];
  let cArr = ["C", "G"];
  let gArr = ["G", "C"];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'A') {
      arr.push(aArr);
    }
    else if (str.charAt(i) == 'T') {
      arr.push(tArr);
    }
    else if (str.charAt(i) == 'C') {
      arr.push(cArr);
    }
    else if (str.charAt(i) == 'G') {
      arr.push(gArr);
    }
    
  }
  return arr;
}

console.log(pairElement("GCG"));
