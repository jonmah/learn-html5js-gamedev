const checkReady = () => {
  // load image and play game
  this.ready = true;
  playgame();
}

// launch the game
function playgame() {
  render();
}

// output content to canvas
function render() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(mainImage, pacmouth, pacdirection, 32, 32, player.x, player.y, 32, 32);
}

// Create canvas from JavaScript to ensure that everything is loaded
// and we are able to connect to the [created] canvas element
const players = {
};
const canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "assets/pac.png";

document.body.appendChild(canvas);
context.fillText('hello world!', 10, 150);