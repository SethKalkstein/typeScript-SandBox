const a = 5;
const b = 6;
const c = 7;

function isSumOdd2(x : number, y : number) : boolean {
    if((x+y)%2===1){
        return true;
    }
    return false;
}

const isSumOdd = (x : number, y : number) : boolean => (x+y) % 2 ? true : false;

console.log(isSumOdd(a, c));
console.log(isSumOdd(c, b));