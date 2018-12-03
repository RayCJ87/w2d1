
var https = require('https');

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

    var databuffered = {};


    /* Add your code here */
    https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      var str = data.split('\n\n')
      for (var i = 0; i < str.length; i++){
        databuffered[i] = str[i];
      }
      console.log(databuffered);

    });
    response.on('end', function(){
      console.log('Response stream complete!');
    });
  });
}

getAndPrintHTML();