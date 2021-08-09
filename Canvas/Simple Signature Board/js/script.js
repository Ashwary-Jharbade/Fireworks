let x;
let y;
let flag = 0;
let color = "white";
const obj = document.getElementById("canva");
let ctx = obj.getContext("2d");

function setCoor(event) {
  x = event.clientX;
  y = event.clientY;
  flag = 1 - flag;
}

function changeColor(para) {
  color = para;
}

function func(event) {
  if (flag) {
    ctx.moveTo(x, y);
    ctx.lineTo(event.clientX, event.clientY);
    ctx.strokeStyle = color;
    ctx.stroke();
    x = event.clientX;
    y = event.clientY;
  }
}
