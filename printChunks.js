



function getAndPrintHTMLChunks () {

  var https = require('http');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

    response.on('data', function(data){
      for (var i in data){
        console.log('chunk data: ' + data[i]);
      }
    });
    response.on('end', function(){
      console.log('Response stream complete!');
    });
  });
}

getAndPrintHTMLChunks();