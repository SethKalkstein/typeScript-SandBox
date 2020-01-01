var aNum;
var aBool;
var aString;
var anArray;
var aTripleTuple;
var multiDimTuple = [];
multiDimTuple.push([4, true], [5, false], [12, false]);
multiDimTuple.forEach(function (tup) { return tup.map(function (item, i) { return console.log((i === 0 ? "The Number: " : "The Boolean: ") + item); }); });
