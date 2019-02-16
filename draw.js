var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

function drawPipe(toDraw)
{
  ctx.fillStyle = "#11FF11";
  ctx.fillRect(toDraw.xPos,toDraw.yPos,toDraw.pWidth,toDraw.pHeight);
  ctx.stroke();
}

function drawBird(toDraw)
{
  ctx.beginPath();
  ctx.arc(toDraw.xPos, toDraw.yPos, 20, 0, 2*Math.PI);
  ctx.closePath();
  ctx.stroke();
}

function clearCanvas()
{
  ctx.clearRect(0,0,960,540);
}
