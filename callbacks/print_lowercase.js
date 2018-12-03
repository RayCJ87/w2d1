
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  var ansHTML;
  /* Write your code here! */
  ansHTML = html.toLowerCase();
  console.log(ansHTML);

}

getHTML(requestOptions, printLowerCase);
