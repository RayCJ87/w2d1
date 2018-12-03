
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverseCase (html) {
  var ansHTML;
  /* Write your code here! */
  ansHTML = html.split(' ').reverse().join(' ');
  console.log(ansHTML);

}

getHTML(requestOptions, printReverseCase);
