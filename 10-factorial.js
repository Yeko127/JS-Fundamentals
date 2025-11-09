const arg = process.argv[2];
const num = parseInt(arg, 10);
 
function factorial(n) {
    if(Number.isNaN(n) || n <=0){
        return 1; 
    }
    return n*factorial(n - 1);
}
console.log(factorial(num));

//output
//node 10-factorial.js 
//1
//node 10-factorial.js 5
//120
//node 10-factorial.js -3
//1