// Select the elements on page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 24;

// Set up canvas for drawing
// make variable called height and width from props in canvas
const width = canvas.width; //can also be -> const { width, height } = canvas;
const height = canvas.height; 

//create random x and y starting points on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

//color for stroke
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
    //increment hue
    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    //start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values based on user input
    switch (key) {
        case 'ArrowUp': 
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight': 
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown': 
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft': 
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

// write a handler for keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }  
}

// clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
      'animationend',
      function() {
        console.log('Done the shake!');
        canvas.classList.remove('shake');
      },
      { once: true }
    );
  }


//listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
