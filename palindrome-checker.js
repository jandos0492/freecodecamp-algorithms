function palindrome(str) {
  let strNonSpecChar = str.replace(/[$&+,:;=?@#|\/\s_'<>.^*()%!-]/gi, "");
  strNonSpecChar = strNonSpecChar.toLowerCase();
  let arr = str.split("");
  let reversedStr = arr.reverse();
  let newStr = reversedStr.join("");
  newStr = newStr.replace(/[$&+,:;=?@#|\/\s_'<>.^*()%!-]/gi, "");
  newStr = newStr.toLowerCase();
  if (strNonSpecChar === newStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("_eye");
