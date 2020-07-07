function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var resultArr = [];
  var getOrbPeriod = function(obj) {
    var b = Math.pow(earthRadius + obj.avgAlt, 3);
    var c = Math.sqrt(b / GM);
    var orbPeriod = Math.round(a * c);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  }
  for (let elem in arr) {
    resultArr.push(getOrbPeriod(arr[elem]));
  }
  return resultArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
