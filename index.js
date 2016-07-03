var fs = require('fs');
var getPixels = require("get-pixels");
var wrap = require('wordwrap');
var brailleEncode = require("braille-encode");

var args = process.argv.slice(2);

getPixels(args[0], function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  var red   = pixels.pick(null, null, 0);
  //var green = image.pick(null, null, 1);
  //var blue  = image.pick(null, null, 2);
  var braille = brailleEncode.encode(red.data);
  var wrapper = wrap.hard(pixels.shape[0]);
  console.log(wrapper(braille));
});
