// Create canvas from JavaScript to ensure that everything is loaded
// and we are able to connect to the [created] canvas element
const canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;
document.body.appendChild(canvas);
context.fillText('hello world!', 10, 150);