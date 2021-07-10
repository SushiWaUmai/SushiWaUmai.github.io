// noise map
var heightMap = [];

// width and height of the nodes
const mapHeight = 50;
const mapWidth = 50;

// noise offset
var xOffset = 0;
var yOffset = 0;
var zOffset = 0;

// noise scale
var xScale = 10;
var yScale = 10;

// Noise Movement Speed
var xMoveSpeed = 0.01;
var yMoveSpeed = 0;
var zMoveSpeed = 0;

// node size in pixel
var xCellSize;
var yCellSize;

// value between 0 and 1 that defines the position of the lines
var ratio = 0.6;

// Colorshift of the hue color
var colorShift = 100;

// Size of the colored circles
var circleSize = 0.5;

// Color of the grid
var gridColor;

// framerate
var fps = 10;

// Node vertex positions
const positions = [
  new Vector2Int( 0, 1),
  new Vector2Int( 1, 1),
  new Vector2Int( 1, 0),
  new Vector2Int( 0, 0)
];

// connection position thanks to http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/
const indecies = 
[
  [],
  [[ new Vector2Int(3, 0), new Vector2Int(0, 1) ]],
  [[ new Vector2Int(0, 1), new Vector2Int(1, 2) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(1, 2) ]],
  [[ new Vector2Int(1, 2), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(2, 3) ], [ new Vector2Int(0, 1), new Vector2Int(1, 2) ]],
  [[ new Vector2Int(0, 1), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(0, 1), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(0, 1) ], [ new Vector2Int(1, 2), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(1, 2), new Vector2Int(2, 3) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(1, 2) ]],
  [[ new Vector2Int(0, 1), new Vector2Int(1, 2) ]],
  [[ new Vector2Int(3, 0), new Vector2Int(0, 1) ]],
  [],
];


function setup() {
  var canvas = createCanvas(windowWidth * 0.75, windowWidth * 0.75);
  canvas.parent("p5-canvas");
  initValues();
  background(0);
  gridColor = color(64, 64, 64);
  frameRate(fps);
  setupRangeSliders();
}


function windowResized() {
    resizeCanvas(windowWidth * 0.75, windowWidth * 0.75);
}

function setupRangeSliders() {
  var uiHolder = document.getElementById("ui-holder")

  // X, Y and Z Move Speed
  createPropSlider(uiHolder, "X Move Speed", -100, 100, xMoveSpeed * 100, 
  function(val) {
    xMoveSpeed = val / 100;
  });
  createPropSlider(uiHolder, "Y Move Speed", -100, 100, yMoveSpeed * 100, 
  function(val) {
    yMoveSpeed = val / 100;
  });
  createPropSlider(uiHolder, "Z Move Speed", -100, 100, zMoveSpeed * 100, 
  function(val) {
    zMoveSpeed = val / 100;
  });


  // X and Y Scale
  createPropSlider(uiHolder, "X Scale", 1, 25, xScale,
  function(val) {
    xScale = val;
  });
  createPropSlider(uiHolder, "Y Scale", 1, 25, yScale,
  function(val) {
    yScale = val;
  });

  // Ratio
  createPropSlider(uiHolder, "Ratio", 0, 100, ratio * 100, 
  function(val) {
    ratio = val / 100;
  });

  // Circle Size
  createPropSlider(uiHolder, "Circle Size", 0, 100, circleSize * 100, 
  function(val) {
    circleSize = val / 100;
  });


  // Vsync
  // createPropSlider(uiHolder, "Vsync", 1, 120, 10,
  // function() {
  //   fps = this.value;
  //   frameRate(fps);
  // });
}

function createPropSlider(parent, label, min, max, value, onInput) {
  // Create the elements
  var sliderHolder = document.createElement("div");
  var sliderLabel = document.createElement("span");
  var slider = document.createElement("input");
  var inputField = document.createElement("input");
  
  // Setting Child
  parent.appendChild(sliderHolder);
  sliderHolder.appendChild(slider);
  sliderHolder.appendChild(inputField);
  sliderHolder.appendChild(sliderLabel);

  // Set Attributes of slider
  inputField.setAttribute("type", "number");
  inputField.oninput = function() {
    this.value = clamp(this.value, min, max);
    slider.value = this.value;
    onInput(this.value);
  };

  sliderHolder.setAttribute("class", "slider-holder");
  slider.setAttribute("class", "slider");
  slider.setAttribute("type", "range");
  slider.setAttribute("min", min);
  slider.setAttribute("max", max);
  slider.setAttribute("value", value);
  sliderLabel.innerHTML = label;
  slider.oninput = function() {
    inputField.value = this.value;
    onInput(this.value);
  };

  // return the slider
  return slider;
}

function draw() {
  clear();
  background(0);
  xOffset += xMoveSpeed;
  yOffset += yMoveSpeed;
  zOffset += zMoveSpeed;
  initHeightMap();
  drawGrid();
  drawCircles(circleSize);
  drawLines();
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function initValues(){
  yCellSize = height / mapHeight;
  xCellSize = width / mapWidth;
}

// Draws a line between two vectors
function vecLine(a, b){
  line(a.x, a.y, b.x, b.y);
}

// lerp between two vectors
function vecLerp(a, b, t){
  return createVector(lerp(a.x, b.x, t), lerp(a.y, b.y, t));
}

// Draws the lines between nodes
function drawLines(){
  stroke(255);
  fill(255);
  
  for (let x = 0; x < mapWidth - 1; x++){
    for (let  y = 0; y < mapHeight - 1; y++){
      let configuration = getConfiguration(heightMap[x][y+1], heightMap[x+1][y+1], heightMap[x+1][y], heightMap[x][y]);
      drawConfiguration(configuration, x, y);
    }
  }
}

// gets the configuration based on the heightmap values
function getConfiguration(x, y, z, w){
  let digit1 = x > ratio ? 1 : 0;
  let digit2 = y > ratio ? 1 : 0;
  let digit3 = z > ratio ? 1 : 0;
  let digit4 = w > ratio ? 1 : 0;
  
  return digit1 + digit2 * 2 + digit3 * 4 + digit4 * 8
}

// draws the line of the configuration
function drawConfiguration(configuration, x, y){
  var lines = indecies[configuration];
  
  for (let i = 0; i < lines.length; i++){
    
    let range1 = lines[i][0];
    let range2 = lines[i][1];
    
    let value1 = createVector(heightMap[x + positions[range1.x].x][y + positions[range1.x].y], heightMap[x + positions[range1.y].x][y + positions[range1.y].y]);
    let value2 = createVector(heightMap[x + positions[range2.x].x][y + positions[range2.x].y], heightMap[x + positions[range2.y].x][y + positions[range2.y].y]);
    
    let b1 = value1.x > value1.y;
    let b2 = value2.x > value2.y;
    
    let x1 = b1 ? range1.x : range1.y;
    let y1 = b1 ? range1.y : range1.x;
    let x2 = b2 ? range2.x : range2.y;
    let y2 = b2 ? range2.y : range2.x;
    
    let point1 = vecLerp(positions[x1].toPVector(), positions[y1].toPVector(), (value1.x + value1.y) / 2);
    let point2 = vecLerp(positions[x2].toPVector(), positions[y2].toPVector(), (value2.x + value2.y) / 2);
    
    let posVec = createVector(x, y);
    
    // Draw lines between the points
    vecLine(vecGridToPixel(point1.add(posVec)), vecGridToPixel(point2.add(posVec)));
  }
}

// draws the circles of the verteces of the nodes
function drawCircles(scale){
  for(let x = 0; x < mapWidth; x++){
    for (let y = 0; y < mapHeight; y++){
      fill(grayToColor(heightMap[x][y]));
      pos = gridToPixel(x, y);
      ellipse(pos.x, pos.y, xCellSize * scale, yCellSize * scale);
    }
  }
}

// initialized heightmap with new noise values
function initHeightMap(){
  heightMap = Array2D(mapWidth, mapHeight);
  
  for (let x = 0; x < mapWidth; x++){
    for (let y = 0 ; y < mapHeight; y++){
      heightMap[x][y] = noise(x / mapWidth * xScale + xOffset, y / mapHeight * yScale + yOffset, zOffset)
    }
  }
}
  
// Converts grid index to pixel position
function gridToPixel(x, y){
  return createVector(x * xCellSize + xCellSize * 0.5, y * yCellSize + yCellSize * 0.5);
}

// Converts grid index to pixel position
function vecGridToPixel(grid){
  return gridToPixel(grid.x, grid.y);
}

// Draws a grid
function drawGrid(){
  stroke(gridColor);
  for (let x = 0; x < mapWidth - 1; x++){
    for(let y = 0; y < mapHeight - 1; y++){
      vecLine(gridToPixel(x, y), gridToPixel(x + 1, y));
      vecLine(gridToPixel(x, y), gridToPixel(x, y + 1));
      vecLine(gridToPixel(x + 1, y), gridToPixel(x + 1, y + 1));
      vecLine(gridToPixel(x, y + 1), gridToPixel(x + 1, y + 1));
    }

  }
}

// converts gray to hue color values
function grayToColor(val){
  colorMode(HSB);
  val *= 255;
  return color((val + colorShift) % 255, 255, 255);
}

// Creates an two dimensional array
function Array2D(x, y){
 let arr = Array(x);
  for(let i = 0; i < y; i++){
   arr[i] = Array(y);
  }
  return arr;
}