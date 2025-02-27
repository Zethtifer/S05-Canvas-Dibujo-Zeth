const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Zeth-ass 
// 1. Lines
// 1.1 next line = y +37
// x - 320 to x - 376 to x - 430
// y - 73 to y - 18 to y - 73
// 1.1.1 Make it a function :D
function dibujarLineaBlack(y) {
    // 1.1.2 Define the beginningo the trace
    ctx.beginPath();

    // 1.2 Styles
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;

    // 1.3 Specify the figure 
    ctx.moveTo(390, y);
    ctx.lineTo(426, y - 35);
    ctx.lineTo(460, y);

    // 1.4 Draw the filling or the border
    ctx.stroke();
}

// 1.5 Draw the mfing line

dibujarLineaBlack(50);
dibujarLineaBlack(75);
dibujarLineaBlack(100);

// 2. Circle
// x - 426
// y - 270

// 2.1 Define the beginning of the drawing.
ctx.beginPath();

// 2.2 Define styles
ctx.fillStyle = 'black';

// 2.3 Specify the shape
// ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
ctx.ellipse(426, 170, 30, 30, 0, 0, Math.PI*2);

// 2.4 Draw the filling or border
ctx.fill();


// 3. Rectangles
// 3.1 Rectangle 1
// x - 390
// y - 185

// 3.1.1 Define the beginning of the drawing.
ctx.beginPath();

// 3.1.2 Define styles
ctx.strokeStyle = 'blue';
ctx.lineWidth = 8;

// 3.1.3 Specify the shape
//ctx.rect(x,y,width,height);
ctx.rect(391,185,69,36);

// 3.1.4 Draw the filling or border
ctx.stroke();

// 3.2 Rectangle 2
// x - 375
// y - 210

// 3.2.1 Define the beginning of the drawing.
ctx.beginPath();

// 3.2.2 Define styles
ctx.strokeStyle = 'blue';
ctx.lineWidth = 8;

// 3.2.3 Specify the shape
//ctx.rect(x,y,width,height);
ctx.rect(375,210,100,36);

// 3.2.4 Draw the filling or border
ctx.stroke();

// 3.3 Rectangle 3
// x - 360
// y - 235

// 3.3.1 Define the beginning of the drawing.
ctx.beginPath();

// 3.3.2 Define styles
ctx.strokeStyle = 'blue';
ctx.lineWidth = 8;

// 3.3.3 Specify the shape
//ctx.rect(x,y,width,height);
ctx.rect(360,235,130,36);

// 3.3.4 Draw the filling or border
ctx.stroke();