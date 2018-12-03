
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var ansHTML;
  /* Write your code here! */
  ansHTML = html.toUpperCase();
  console.log(ansHTML);

}

getHTML(requestOptions, printUpperCase);
