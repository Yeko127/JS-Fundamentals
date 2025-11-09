const args = process.argv.slice(2);

if(args.length === 0) {
    console.log("No argument" );
} else if(args.length === 1){
    console.log("Argument found");
} else {console.log("Arguments found");

}
//output
//node 2-arguments.js
//No argument
//node 2-arguments.js Carolyne
//Argument found
//node 2-arguments.js Yeko
//Arguments found

