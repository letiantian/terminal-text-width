// should be run in terminal/console

var getTextWidth = require('..');

var columns = process.stdout.columns;
var text = "hi,世界";
var width = getTextWidth(text);

var startPos = parseInt((columns-width)/2);

console.log(  Array(startPos+1).join(" ") + text  );