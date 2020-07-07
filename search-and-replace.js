function myReplace(str, before, after) {
  let upperLetter = /[A-Z]/;
  let newAfter
  if (upperLetter.test(before.charAt(0)) == true) {
    newAfter = after.charAt(0).toUpperCase();
    after = newAfter + after.substr(1, after.length - 1)
  }
  let newStr = str.replace(before, after);
  console.log(newStr)
  return newStr;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
