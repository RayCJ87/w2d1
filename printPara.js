var https = require('https');


var site = process.argv[2];
var border = site.indexOf('/');
var hostInfo = site.slice(0, border);
var pathInfo = site.slice(border, site.length);
var options  = {
  host: hostInfo,
  path: pathInfo
};
console.log(options);
// var options = {host: theHost, path: thePast};

function getAndPrintHTML (options) {
  /* Add your code here */
  https.get(options, function (response){

    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log(data + '\n');
    });
  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(options);
// getAndPrintHTML(requestOptions);


