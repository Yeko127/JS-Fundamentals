const arg = process.argv[2];
const size = parseInt(arg, 10);

if (Number.isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }}
//output
// node 8-square.js 
//Missing size
//node 8-square.js 5
//XXXXX
//XXXXX
//XXXXX
//XXXXX
//XXXXX