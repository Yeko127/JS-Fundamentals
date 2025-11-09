const arg = process.argv[2];
const size = parseInt(arg, 10);
if(Number.isNaN(size)){
    console.log('Missing size');

} else {let i = 0; while (i < size){
    console.log('x'.repeat(size));
    i++;
}}
//output
// node 8-square.js 
//Missing size
//node 8-square.js 5
//xxxxx
//xxxxx
//xxxxx
//xxxxx
//xxxxx