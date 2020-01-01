let aNum : number;
let aBool : boolean;
let aString : string;
let anArray : number[];
let aTripleTuple : [number, boolean, string];
let multiDimTuple : [number, boolean][] = [];

multiDimTuple.push([4,true], [5, false], [12, false]);

multiDimTuple.forEach(tup => tup.map((item, i) => console.log((i === 0 ? "The Number: " : "The Boolean: ")+item)));

