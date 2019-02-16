var cvs = document.createElement("canvas");
cvs.id = "cvs";
cvs.width = 960;
cvs.height = 540;
cvs.style.border = "thick solid #000"

var strtButton = document.createElement("button");
strtButton.id = "strtButton";
strtButton.innerHTML = "Start";
strtButton.style.width = "100px";
strtButton.style.height = "25px";

var jumpKey = document.createElement("button");
jumpKey.id = "jumpKey";
jumpKey.innerHTML = "Jump!";
jumpKey.style.width = "100px";
jumpKey.style.height = "25px";
jumpKey.style.marginLeft = "5px";

document.body.appendChild(cvs);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(strtButton);
document.body.appendChild(jumpKey);
