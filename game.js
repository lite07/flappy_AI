var strtButton = document.getElementById("strtButton");
var jumpKey = document.getElementById("jumpKey");

var startTime, endTime;
var runState;
var cHeight = cvs.height;
var cWidth = cvs.width;

var topPipe = new Pipe();
topPipe.setDim((Math.random()*0.8)*cHeight,30);
topPipe.setPos((0.95-Math.random()*0.5)*cWidth,0);
topPipe.setVel(-4);
drawPipe(topPipe);

var bottomPipe = new Pipe();
bottomPipe.setPos(topPipe.xPos,topPipe.pHeight+100);
bottomPipe.setDim(cHeight-bottomPipe.yPos,30);
bottomPipe.setVel(-4);
drawPipe(bottomPipe);

var fBird = new Bird(100,200);
fBird.setAcc(0.10);
drawBird(fBird);

var neuronSystem = new createNeuralSystem();

jumpKey.onclick = function(){
  fBird.setVel(-4);
}

function resetGame()
{
  clearInterval(runState);
  drawGame(topPipe, bottomPipe, fBird)
  strtButton.innerHTML = "Start";
  topPipe.setDim((Math.random()*0.8)*cHeight,30);
  topPipe.setPos((0.95-Math.random()*0.5)*cWidth,0);
  bottomPipe.setPos(topPipe.xPos,topPipe.pHeight+100);
  bottomPipe.setDim(cHeight-bottomPipe.yPos,30);
  fBird.setPos(200);
  fBird.setVel(0);
}

strtButton.onclick = function(){
  if(strtButton.innerHTML=="Start")
  {
    strtButton.innerHTML = "Stop";
    clearCanvas();
    startTime = 0; startTime = new Date();
    runState = setInterval(gameRunning,16);
  }
  else
  {
    strtButton.innerHTML = "Start";
    resetGame();
  }
}

function gameRunning()
{
  var neuralInput = [fBird.xPos, fBird.yPos, fBird.yVel,
    topPipe.xPos, topPipe.yPos, bottomPipe.xPos, bottomPipe.yPos];
  console.log(feedSystem(neuronSystem, neuralInput));

  if(topPipe.xPos<=-30)
  {
    topPipe.setDim((Math.random()*0.8)*cHeight,30);
    topPipe.setPos(cWidth+30,0);
    bottomPipe.setPos(cWidth+30,topPipe.pHeight+100);
    bottomPipe.setDim(cHeight-bottomPipe.yPos,30);
  }
  clearCanvas();
  topPipe.movePipe();
  bottomPipe.movePipe();
  fBird.moveBird();
  drawGame(topPipe, bottomPipe, fBird)
  checkState();
}

function checkState(){
  if(Math.abs(fBird.xPos-topPipe.xPos)<20
  &&(Math.abs(fBird.yPos-(bottomPipe.yPos))>80
  ||Math.abs(fBird.yPos-topPipe.pHeight>80)))
  {
    endTime = new Date();
    console.log((endTime-startTime)/1000);
    resetGame();
  }

  if(fBird.yPos>cHeight-20||fBird.yPos<20)
  {
    endTime = new Date();
    console.log((endTime-startTime)/1000);
    resetGame();
  }
}
