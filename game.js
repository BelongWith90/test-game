// Load the sprite sheet
const spriteSheet = new Image();
spriteSheet.src = './assets/player-spritesheet.png'; // Adjust the path to match your project structure

// Animation control variables
let frameCount = 0;
const frameDelay = 8; // Adjust to control animation speed
const totalFrames = 4; // Total frames in the animation row (adjust based on your sprite sheet)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const tileSize = 16; // Each "pixel" size
const playerSpeed = 2;

// Player object
const player = {
  x: canvas.width / 2 - tileSize / 2,
  y: canvas.height / 2 - tileSize / 2,
  width: tileSize,
  height: tileSize,
  color: 'red',
  dx: 0,
  dy: 0
};

// Handle keyboard input
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') player.dy = -playerSpeed;
  if (e.key === 'ArrowDown') player.dy = playerSpeed;
  if (e.key === 'ArrowLeft') player.dx = -playerSpeed;
  if (e.key === 'ArrowRight') player.dx = playerSpeed;
});

window.addEventListener('keyup', (e) => {
  if (['ArrowUp', 'ArrowDown'].includes(e.key)) player.dy = 0;
  if (['ArrowLeft', 'ArrowRight'].includes(e.key)) player.dx = 0;
});

// Update animation frame
frameCount++;
if (frameCount >= frameDelay) {
  player.frameX = (player.frameX + 1) % totalFrames; // Loop through frames
  frameCount = 0;
}

// Game loop
function gameLoop() {
 
 // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update player position
  player.x += player.dx;
  player.y += player.dy;

// Draw the player with animation
ctx.drawImage(
  spriteSheet, 
  player.frameX * player.width, // Source X (frame position in the sprite sheet)
  player.frameY * player.height, // Source Y (row position in the sprite sheet)
  player.width, // Width of the frame
  player.height, // Height of the frame
  player.x, // Destination X (player position on canvas)
  player.y, // Destination Y (player position on canvas)
  player.width, // Width to draw on canvas
  player.height // Height to draw on canvas
);
  // Loop
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
