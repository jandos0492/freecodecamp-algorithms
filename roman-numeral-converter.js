function convertToRoman(num) {
  let numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanValues = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let toRoman = "";
  for (let i = 0; i < numeralValues.length; i++) {
    while (numeralValues[i] <= num) {
      toRoman = toRoman + romanValues[i];
      num = num - numeralValues[i];
    }
  }
 return toRoman;
}

console.log(convertToRoman(36));
