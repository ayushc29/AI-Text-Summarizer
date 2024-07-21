var maxx = document.body.clientWidth;
var maxy = document.body.clientHeight;
var halfx = maxx / 2;
var halfy = maxy / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 200;
var dots = [];
var baseColor = 'rgb(30, 30, 30)'; // Darker base color for dots

for (var i = 0; i < dotCount; i++) {
  dots.push(new dot());
}

function render() {
  context.fillStyle = "rgba(0, 0, 0, 0.1)"; // Slight transparency for trailing effect
  context.fillRect(0, 0, maxx, maxy);
  for (var i = 0; i < dotCount; i++) {
    dots[i].draw();
    dots[i].move();
  }
  requestAnimationFrame(render);
}

function dot() {
  this.rad_x = Math.random() * halfx;
  this.rad_y = Math.random() * halfy;
  this.alpha = Math.random() * 360;
  this.speed = (Math.random() - 0.5) * 0.2;
  this.size = Math.random() * 5 + 1;
  this.color = baseColor; // Use base color for all dots
}

dot.prototype.draw = function() {
  var dx = halfx + this.rad_x * Math.cos(this.alpha * Math.PI / 180);
  var dy = halfy + this.rad_y * Math.sin(this.alpha * Math.PI / 180);
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(dx, dy, this.size, 0, Math.PI * 2);
  context.fill();
};

dot.prototype.move = function() {
  this.alpha += this.speed;
  this.alpha = this.alpha % 360; // Keep alpha within 0-360
};

render();
