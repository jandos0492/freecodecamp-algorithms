function rot13(str) {
  let arr = str.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "A" && arr[i] <= "M") {
      arr[i] = arr[i].charCodeAt() + 13;
    }
    else if (arr[i] >= "N" && arr[i] <= 'Z') {
      arr[i] = arr[i].charCodeAt() - 13;
    }
    else {
      arr[i] = arr[i].charCodeAt();
    }
  } 
  for (let j = 0; j < arr.length; j++) {
    arr[j] = String.fromCharCode(arr[j])
  }
  let finalStr = "";
  for (let i_2 = 0; i_2 < arr.length; i_2++) {
    if (arr[i_2] != /\s\s/) {
      finalStr = arr.join("")
    }
  }
  return finalStr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
