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
  context.drawImage(
    mainImage,
    player.pacmouth,
    player.pacdirection,
    32,
    32,
    player.x,
    player.y,
    32,
    32
  );
  context.font = '20px Verdana';
  context.fillStyle = '#fff';
  context.fillText(`Pacman: ${score} vs Ghost: ${gscore}`, 2, 18);
}

// Create canvas from JavaScript to ensure that everything is loaded
// and we are able to connect to the [created] canvas element
const player = {
  x: 50,
  y: 100,
  pacmouth: 320,
  pacdirection: 0,
  size: 32,
};
let score = 0;
let gscore = 0;

const canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "assets/pac.png";

const keyClick = {};
document.addEventListener('keydown', (event) => {
  keyClick[event.keyCode] = true;
  console.log(keyClick);
}, false);
document.addEventListener('keyup', (event) => {
  delete keyClick[event.keyCode];
}, false);

document.body.appendChild(canvas);
context.fillText('hello world!', 10, 150);