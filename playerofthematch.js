const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
const url = "https://www.cricbuzz.com/live-cricket-scores/49584/nz-vs-sl-1st-odi-sri-lanka-tour-new-zealand-2023";
console.log("before");
request(url,callback);

// https://www.espncricinfo.com/series/women-s-premier-league-2022-23-1348825/mumbai-indians-women-vs-up-warriorz-women-eliminator-1358949/ball-by-ball-commentary
// https://www.espncricinfo.com/series/women-s-premier-league-2022-23-1348825/mumbai-indians-women-vs-up-warriorz-women-eliminator-1358949/full-scorecard
// highest wicket tacker from winning team
// every players birthday with their name
// last ball comentry

function callback(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }
    else{
        // console.log(html);
        extractHtml(html);
    }
  };
function extractHtml(html){
    let $ = cheerio.load(html);
    let elmenArr= $(".cb-col.cb-col-100.ng-scope .cb-com-ln.ng-binding.ng-scope.cb-col.cb-col-90");
    let text = $(elmenArr[0]).text();
    let htmldata = $(elmenArr[0]).html();
    console.log(text);
    console.log(htmldata);
}
console.log("after");

  