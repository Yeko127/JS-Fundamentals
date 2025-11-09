const arg = process.argv[2];
const x = parseInt(arg, 5);
if(Number.isNaN(x)){
    console.log('Missing number of occurrences');

} else{let i=0; while (i < x){
    console.log('C is fun');
    i++;
    }}
//output
// node 7-multi_c.js 
//Missing number of occurrences
//node 7-multi_c.js 2
//C is fun
//C is fun
