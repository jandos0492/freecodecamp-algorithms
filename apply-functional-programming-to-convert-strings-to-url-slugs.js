// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  let lowerStr = title.toLowerCase();
  lowerStr = lowerStr.trim();
  let newArr = lowerStr.split(/\s+/);
  let newStr = newArr.join("-");
  return newStr;

}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));