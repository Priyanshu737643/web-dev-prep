//* board
let board;
let height;
let width;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;

//* sprites
let blueGhost;
let pinkGhost;
let purpleGhost;
let redGhost;
let yellowGhost;
let wall;
let pacmanLeft;
let pacmanRight;
let pacmanUp;
let pacmanDown;

const walls = new Set();
const ghosts = new Set();
const foods = new Set();
let pacman;

const direction = ["U", "L", "D", "R"];

let score = 0;
let lives = 3;
let gameOver = false;

window.onload = function () {
  board = document.querySelector("#board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");
  // getContext('2d') - method returns a built-in CanvasRenderingContext2D Object.This provides the properties and methods needed to draw shapes, text, images, other graphics on an HTML canvas.
  loadImage();
  loadMap();
  update();
  this.document.addEventListener("keyup", movePlayer);
  // console.log(`Total Walls: ${walls.size}`);
  // console.log(`Total Foods: ${foods.size}`);
  // console.log(`Total Ghosts: ${ghosts.size}`);
  for (const ghost of ghosts.values()) {
    const newDirection = direction[Math.floor(Math.random() * 4)];
    ghost.changeDirection(newDirection);
  }
};

const tileMap = [
  "XXXXXXXXXXXXXXXXXXX",
  "X       X         X",
  "X XX XXX X XXX XX X",
  "X                 X",
  "X XX X XXXXX X XX X",
  "X    X       X    X",
  "X    X       X    X",
  "XXXX X       X XXXX",
  "000X X       X X000", // X = WALLS , 0 = FOOD , P = PAC-MAN , rbpy = ghosts
  "XXXX X XXrXX X XXXX",
  "0       bpy       0",
  "XXXX X XXXXX X XXXX",
  "000X X       X X000",
  "XXXX X       X XXXX",
  "X    X       X    X",
  "X    X       X    X",
  "X XX X XXXXX X XX X",
  "X                 X",
  "X XX XXX P XXX XX X",
  "X       X         X",
  "XXXXXXXXXXXXXXXXXXX",
];

function loadImage() {
  //? Food Image
  wall = new Image();
  wall.src = "./sprites/wall.png";

  //? Ghost Images
  blueGhost = new Image();
  blueGhost.src = "./sprites/blueGhost.png";
  pinkGhost = new Image();
  pinkGhost.src = "./sprites/pinkGhost.png";
  purpleGhost = new Image();
  purpleGhost.src = "./sprites/purpleGhost.png";
  redGhost = new Image();
  redGhost.src = "./sprites/redGhost.png";
  yellowGhost = new Image();
  yellowGhost.src = "./sprites/yellowGhost.png";

  //? Pac-Man Images
  pacmanUp = new Image();
  pacmanUp.src = "./sprites/pacmanUp.png";
  pacmanDown = new Image();
  pacmanDown.src = "./sprites/pacmanDown.png";
  pacmanLeft = new Image();
  pacmanLeft.src = "./sprites/pacmanLeft.png";
  pacmanRight = new Image();
  pacmanRight.src = "./sprites/pacmanRight.png";
}

//? FPS
function update() {
  move();
  draw();
  setTimeout(() => {
    update();
  }, 50);
  // 20fps = 1000ms/20 = 50ms fps
}

function move() {
  // change velocity for pac-man
  pacman.x += pacman.XVelocity;
  pacman.y += pacman.YVelocity;

  // check for wall collision
  for (const wall of walls.values()) {
    if (collision(pacman, wall)) {
      pacman.x -= pacman.XVelocity;
      pacman.y -= pacman.YVelocity;
      break;
    }
  }

 

  // change velocity for ghost
  for (const ghost of ghosts.values()) {
    if (
      ghost.y == tileSize * 9 &&
      ghost.direction == "L" ||
      ghost.direction == "R"
    ) {
      ghost.changeDirection("U");
    }
    ghost.x += ghost.XVelocity;
    ghost.y += ghost.YVelocity;
    for (const wall of walls.values()) {
      if (
        collision(ghost, wall) ||
        ghost.x <= 0 ||
        ghost.x + ghost.width >= boardWidth
      ) {
        ghost.x -= ghost.XVelocity;
        ghost.y -= ghost.YVelocity;
        const newDirection = direction[Math.floor(Math.random() * 4)];
        ghost.changeDirection(newDirection);
      }
    }
  }
}

//? Properties of getContext(2d)
function draw() {
  // clear previous output
  context.clearRect(0, 0, board.width, board.height);
  context.drawImage(
    pacman.image,
    pacman.x,
    pacman.y,
    pacman.width,
    pacman.height,
  );
  for (const ghost of ghosts) {
    context.drawImage(ghost.image, ghost.x, ghost.y, ghost.width, ghost.height);
  }
  for (const wall of walls.values()) {
    context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
  }
  context.fillStyle = "wheat";
  for (const food of foods.values()) {
    context.fillRect(food.x, food.y, food.width, food.height);
  }
}

class Block {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.XStart = x;
    this.YStart = y;

    // direction
    this.direction = "R"; // R - Right direction
    this.XVelocity = 0;
    this.YVelocity = 0;
  }

  changeDirection(direction) {
    const previousDirection = this.direction;
    this.direction = direction;
    this.changeVelocity();
    this.x += this.XVelocity;
    this.y += this.YVelocity;
    for (const wall of walls.values()) {
      if (collision(this, wall)) {
        this.x -= this.XVelocity;
        this.y -= this.YVelocity;
        this.direction = previousDirection;
        this.changeVelocity();
        return;
      }
    }
  }

  changeVelocity() {
    if (this.direction == "U") {
      // W - Up
      this.XVelocity = 0;
      this.YVelocity = -tileSize / 4; // ( /4) - for slow movement
    } else if (this.direction == "D") {
      // S - Down
      this.XVelocity = 0;
      this.YVelocity = tileSize / 4;
    } else if (this.direction == "L") {
      // A - Left
      this.XVelocity = -tileSize / 4;
      this.YVelocity = 0;
    } else if (this.direction == "R") {
      // D - Right
      this.XVelocity = tileSize / 4;
      this.YVelocity = 0;
    }
  }
}

function movePlayer(event) {
  if (event.code == "ArrowUp" || event.code == "KeyW") {
    pacman.changeDirection("U");
  } else if (event.code == "ArrowDown" || event.code == "KeyS") {
    pacman.changeDirection("D");
  } else if (event.code == "ArrowLeft" || event.code == "KeyA") {
    pacman.changeDirection("L");
  } else if (event.code == "ArrowRight" || event.code == "KeyD") {
    pacman.changeDirection("R");
  }
  // change Pac-Man images
  if (pacman.direction == "U") {
    pacman.image = pacmanUp;
  } else if (pacman.direction == "L") {
    pacman.image = pacmanLeft;
  } else if (pacman.direction == "D") {
    pacman.image = pacmanDown;
  } else if (pacman.direction == "R") {
    pacman.image = pacmanRight;
  }
}

function collision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj2.height > obj2.y
  );
}

function loadMap() {
  walls.clear();
  foods.clear();
  ghosts.clear();

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < columnCount; column++) {
      const rowData = tileMap[row];
      const tileMapChar = rowData[column];
      const x = column * tileSize;
      const y = row * tileSize;
      if (tileMapChar == "X") {
        //? wall
        const wallImage = new Block(wall, x, y, tileSize, tileSize);
        walls.add(wallImage);
      } else if (tileMapChar == "r") {
        //? red ghost
        const red = new Block(redGhost, x, y, tileSize, tileSize);
        ghosts.add(red);
      } else if (tileMapChar == "b") {
        //? blue ghost
        const blue = new Block(blueGhost, x, y, tileSize, tileSize);
        ghosts.add(blue);
      } else if (tileMapChar == "p") {
        //? pink ghost
        const pink = new Block(pinkGhost, x, y, tileSize, tileSize);
        ghosts.add(pink);
      } else if (tileMapChar == "y") {
        //? yellow ghost
        const yellow = new Block(yellowGhost, x, y, tileSize, tileSize);
        ghosts.add(yellow);
      } else if (tileMapChar == "P") {
        //? Pac-Man
        pacman = new Block(pacmanRight, x, y, tileSize, tileSize);
      } else if (tileMapChar == " ") {
        //? empty is for food
        const food = new Block(null, x + 15, y + 15, 5, 5);
        foods.add(food);
        // 32-5 = 27/2
      }
    }
  }
}

//! replace 32px = 256px
// tile size = 32px  === 256px
// height = 6 x 32px  ===  6 x 256px
// width = 4 x 32px  ===  4 x 256px
