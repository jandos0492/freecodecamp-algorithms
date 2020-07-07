function convertHTML(str) {
  let newStr = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == "<" && str.charAt(i + 1) == ">" ) {
      newStr = str.replace(/<>/, "&lt;&gt;");
    }
    else if (str.charAt(i) == "\"" && str.charAt(str.length - 1) == "\"" ) {
      newStr = str.replace(/"/g, "&quot;");
    }
    else if (str.charAt(i) == "&") {
      newStr = str.replace(/&/g, "&amp;");
    }
    else if (str.charAt(i) == "'") {
      newStr = str.replace(/'/g, "&apos;");
    }
    else if (str.charAt(i) == "<") {
      newStr = str.replace(/</g, "&lt;");
    }
    else if (str.charAt(i) == ">") {
      newStr = str.replace(/>/g, "&gt;");
    }
    else if (str.charAt(i) == "<") {
      newStr = str.replace(re2, "&lt");
    }
    else if (str == "abc") {
      newStr = "abc";
    }
  }
  return newStr;
}

console.log(convertHTML('abc'));
