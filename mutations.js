function mutation(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();
  console.log(firstStr);
  
  console.log(secondStr);
  let str2_i = 0;
  let newStr = "";
  while (str2_i < secondStr.length) {
    if (firstStr.includes(secondStr.charAt(str2_i))) {
      newStr += secondStr.charAt(str2_i);
    }
    str2_i++;
  }
  if (secondStr == newStr) {
    return true;
  } else {
    return false;
  }
}

mutation(["Noel", "Ole"]);
