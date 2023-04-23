const fs = require("fs");
// let data = fs.readFileSync("f1.txt");
// console.log(" " + data);
console.log("before");
fs.readFile("f1.txt",callback);//async function provides by node js
function callback(error,data){
    if(error){
        console.log("error occured");
    }
    else{
    console.log("data" + data);
    }
}
console.log("after");
console.log("meanwhile");