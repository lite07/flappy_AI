class Neuron
{
  constructor(nOfInput)
  {
    this.nWeight = new Array(nOfInput);
    for(var i = 0; i<nOfInput; i++)
    {
        this.nWeight[i] = 4*Math.random()-2;
    }
  }

  feedForward(xInput)
  {
    var output = 0;
    for(var i = 0; i<xInput.length; i++)
    {
      output = output + Math.tanh(this.nWeight[i]*xInput[i]);
    }
    return output;
  }
}

//Creating the neural system.
function createNeuralSystem()
{
  this.firstLayer = new Array(4); //4 Neurons in the first layer.
  for(var i = 0; i<4; i++)
  {
    //Each neuron takes 4 input parameter
    //Bird x and y position, bird y velocity, pipes x and y positions (top and bot).
    this.firstLayer[i] = new Neuron(7);
  }
  //The second layer is just one neuron taking input from all the neurons in the
  //first layer.
  this.secondLayer = new Neuron(4);
}

//Feeding the neural network input and returning the second layer output.
function feedSystem(neuralSystem, neuralInput)
{
  var firstLayerOuput = new Array;
  for(var i = 0; i<neuralSystem.firstLayer.length; i++)
  {
    var neuronOutput = neuralSystem.firstLayer[i].feedForward(neuralInput);
    firstLayerOuput.push(neuronOutput);
  }
  return neuralSystem.secondLayer.feedForward(firstLayerOuput);
}

//Crossing two neural system.
function crossOver(neuralSystem1, neuralSystem2)
{
  var offSpring = new createNeuralSystem();
  var cOP = Math.ceil(Math.random()*7); //Crossover Point
  var n = neuralSystem1.firstLayer.length;
  for(var i = 0; i<n; i++)
  {
    var firstHalf = neuralSystem1.firstLayer[i].nWeight.slice(0,cOP);
    var secondHalf = neuralSystem2.firstLayer[i].nWeight.slice(cOP,7);
    offSpring.firstLayer[i].nWeight = firstHalf.concat(secondHalf);
  }

  cOP = Math.ceil(Math.random()*4);
  var firstHalf = neuralSystem1.secondLayer.nWeight.slice(0,cOP);
  var secondHalf = neuralSystem2.secondLayer.nWeight.slice(cOP,4);
  offSpring.secondLayer.nWeight = firstHalf.concat(secondHalf);
  return offSpring;
}
