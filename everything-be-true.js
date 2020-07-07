function truthCheck(collection, pre) {
  let counter = 0;
  for (let i in collection) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
