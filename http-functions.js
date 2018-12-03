var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    var theHTML;
    https.get (options, function (response){
      response.setEncoding('utf8');

      response.on('data', function (data){
        // console.log(data);
        theHTML = data;
      })
      response.on('end', function (){
        console.log("data complete.");
        return callback (theHTML);
      })
      // callback (theHTML);
    })
};

function printHTML (html) {
  console.log(html);
}