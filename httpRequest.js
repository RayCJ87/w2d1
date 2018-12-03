var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    throw err;
    console.log('We got an error!');
  })
  .on('response', function (response){
    console.log('response Message: ' + response.statusMessage);
    console.log('Downloading image ....0 %');
    console.log('Downloading image ....50 %');
    console.log('Downloading complete!');
    console.log('content type: ' + response.headers['content-type']);

  })
  .pipe(fs.createWriteStream('./future.jpg'));