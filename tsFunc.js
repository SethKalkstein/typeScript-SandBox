var a = 5;
var b = 6;
var c = 7;
function isSumOdd2(x, y) {
    if ((x + y) % 2 === 1) {
        return true;
    }
    return false;
}
var isSumOdd = function (x, y) { return (x + y) % 2 ? true : false; };
console.log(isSumOdd(a, c));
console.log(isSumOdd(c, b));
