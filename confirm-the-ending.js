function confirmEnding(str, target) {
  let targetLength = target.length;
  let strSlice = str.substr(str.length - targetLength);
  if (strSlice === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "iann");
