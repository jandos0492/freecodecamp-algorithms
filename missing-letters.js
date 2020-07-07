function fearNotLetter(str) {
  let abc = "abcdefghijklmnopqrstuvxzwy";
  let strStart = str.charAt(0);
  let strFinish = str.charAt(str.length - 1);
  let startIndex = abc.indexOf(strStart);
  let finishIndex = abc.indexOf(strFinish);
  let newStr = abc.substr(startIndex, finishIndex);
  let i = 0;
  while (i < newStr.length) {
    if (str.includes(newStr.charAt(i)) == false) {
      return newStr.charAt(i);
    }
    i++;
    console.log(i);
  }
    return undefined;
}

console.log(fearNotLetter("bcdf"));
