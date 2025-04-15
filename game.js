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

// Game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update player position
  player.x += player.dx;
  player.y += player.dy;

  // Draw the player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Loop
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
