const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
console.log("before");
request('https://www.worldometers.info/coronavirus/',callback);
 
console.log("after");

function callback(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }
    else{
        handlehtml(html);
        // console.log('html:', html); // Print the HTML for the Google homepage.
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  };
  function handlehtml(html){
        let selectorTool = cheerio.load(html);
        // let h1s = selectorTool("h1");
        let contentArr = selectorTool("#maincounter-wrap span");
        // for(let i =0; i<selectorTool.length; i++){
        // let data = selectorTool(contentArr[i]).text();
        // console.log("data",data);

let total = selectorTool(contentArr[0]).text();
let death = selectorTool(contentArr[1]).text();
let recoverd = selectorTool(contentArr[2]).text();

console.log(chalk.gray("Total cases "+ total));
console.log(chalk.red("Deaths "+ death));
console.log(chalk.green("recoverd "+ recoverd));

}




// console.log(contentArr);
  