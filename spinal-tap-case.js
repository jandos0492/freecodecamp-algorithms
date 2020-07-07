function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let newStr = str.replace(/\W|\_/g, "-");
  console.log(newStr.toLowerCase())
  return newStr.toLowerCase();
}

spinalCase("thisIsSpinalTap");
