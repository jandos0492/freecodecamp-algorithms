function translatePigLatin(str) {
  let vowelChar = /a|e|i|o|u/i;
  let subStr = "";
  if (vowelChar.test(str.charAt(0))) {
      str += "way"
  } else {
    subStr = str.replace(/([b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|z|w|y]+)([aeiou]\w+)/i, '$2$1');
    str = subStr + "ay";
  }
  console.log(subStr);
  console.log(str);
  return str;
}

translatePigLatin("glove");
