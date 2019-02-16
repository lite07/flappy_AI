class Pipe{
  constructor()
  {
    this.xPos = 0;
    this.yPos = 0;
    this.pHeight = 10;
    this.pWidth = 10;
    this.pVelocity = 0;
  }

  setPos(x_pos, y_pos)
  {
    this.xPos = x_pos;
    this.yPos = y_pos;
  }

  setVel(pipe_velocity)
  {
    this.pVelocity = pipe_velocity;
  }

  setDim(pipe_height, pipe_width)
  {
    this.pHeight = pipe_height;
    this.pWidth = pipe_width
  }

  movePipe()
  {
    this.xPos = this.xPos + this.pVelocity;
  }
}

class Bird
{
  constructor(iniXPos, iniYPos)
  {
    this.xPos = iniXPos;
    this.yPos = iniYPos;
    this.yVel = 0;
    this.yAcc = 0;
  }

  setPos(y_pos)
  {
    this.yPos = y_pos;
  }

  setVel(bird_velocity)
  {
    this.yVel = bird_velocity;
  }

  setAcc(bird_acceleration)
  {
    this.yAcc = bird_acceleration;
  }

  moveBird()
  {
    this.yPos = this.yPos + this.yVel;
    this.yVel = this.yVel + this.yAcc;
  }
}
