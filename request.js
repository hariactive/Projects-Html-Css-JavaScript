const request = require('request');
console.log("before");
request('https://www.worldometers.info/coronavirus/',callback);
 
console.log("after");

function callback(error, response, html) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('html:', html); // Print the HTML for the Google homepage.
  };