var meteors = [];
var colorSlider;
var sizeSlider;
var countSlider;
var jitterSlider;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  ellipseMode(RADIUS);

  colorMode(HSB);

  sizeSlider = document.getElementById("sizeCtrl");
  colorSlider = document.getElementById("colorCtrl");

  for (var i = 0; i < 450; i++) {
    meteors.push(new Meteor());
  }
}


function draw() {
  background(color(0,0.1));
  countSlider = document.getElementById("countCtrl");

  for (var i = 0; i < countSlider.value; i++) {
    meteors[i].move();
    meteors[i].display();
  }

}


function Meteor() {
  jitterSlider = document.getElementById("jitterCtrl");

  this.size = random(3);
  //this.color = color(random(255),255,255);
  this.speed = random(10);

  this.x = -random(width);
  this.y = -random(height);


  this.move = function(){
    this.x += random(jitterSlider.value); //this.size;
    this.y += random(jitterSlider.value);

  if(this.x > width || this.y > height) {
    this.x = -random(width);
    this.y = -random(height);
  }

}


  this.display = function() {
    fill(colorSlider.value, 255, 255);
    ellipse(this.x, this.y, sizeSlider.value, sizeSlider.value);
  }
}
