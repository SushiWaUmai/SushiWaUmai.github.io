var len = 100;
var lengthSlider;

var angle;
var angleSlider;

var maxRecursion = 5;
var maxRecursionSlider;

var branches = 2;
var branchesSlider;

var lengthReduction = 0.75;
var lengthReductionSlider;

var halfAngle;

var uiHolder = document.getElementById("ui-holder");
var p5Canvas = document.getElementById("p5-canvas");

var repaint = true;

disableFriendlyErrors = true;

function setup(){
  	canvas = createCanvas(750, 750);
  	canvas.parent(p5Canvas);
  	angle = PI / 4;

  	createPropSlider(uiHolder, "Angle", 0, PI, angle, 0.01, "slider-holder", "slider", function(val){
		angle = val;
		repaint = true;
  	});

  	createPropSlider(uiHolder, "Branches", 0, 5, branches, 1, "slider-holder", "slider", function(val){
  		branches = val;
		repaint = true;
  	});

  	createPropSlider(uiHolder, "Max Recursion", 0, 5, maxRecursion, 1, "slider-holder", "slider", function(val){
  		maxRecursion = val;
		repaint = true;
  	});

  	createPropSlider(uiHolder, "Length", 0, 500, len, 1, "slider-holder", "slider", function(val){
  		len = val;
		repaint = true;
  	});

  	createPropSlider(uiHolder, "Length Reduction", 0, 1, lengthReduction, 0.001, "slider-holder", "slider", function(val){
  		lengthReduction = val;
		repaint = true;
  	});
  	colorMode(HSB);
}

function draw(){
  	if(repaint){
	  	background(0);

	  	halfAngle = angle * (branches - 1) * 0.5;

	  	stroke(0, 255, 255);
	  	translate(width / 2, height);
	  	line(0, 0, 0, -len);
	  	translate(0, -len);
	  	branch(0, len);

	  	repaint = false;
  	}
}

function branch(recursion, length){
	stroke(grayToColor(recursion / maxRecursion), 255, 255);
	if(recursion == maxRecursion)
		return;
	for(let i = 0; i < branches; i++){
		push();
		rotate(i * angle - halfAngle);
		line(0, 0, 0, -length);
		translate(0, -length);
		branch(recursion + 1, length * lengthReduction);
		pop();
	}
}

function grayToColor(val){
  val *= 360;
  return (val) % 360;
}