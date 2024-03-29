var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");	
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
		//figure out howmany squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		  if(colors[i]){
		  	squares[i].style.display = "block";
		  	// (so that they get redisplayed wen hard clicked again)
		  	squares[i].style.backgroundColor = colors[i];
		  }
		  else{
		  	squares[i].style.display = "none";
		  }
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	//generate all new colors 
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//adding initial colors to squares
	squares[i].style.background = colors[i];
	//adding click listeners to squares
	squares[i].addEventListener("click", function(){
	// grab color of clicked square
	 var clickedColor = this.style.background;
	// compare color to pickedColor
	 if(clickedColor === pickedColor){
	 	messageDisplay.textContent = "Correct!";
	 	resetButton.textContent = "Play Again?";
	 	changeColors(clickedColor);
	 	h1.style.backgroundColor = clickedColor;
	 }
	 else{
	 	this.style.backgroundColor = "#232323";
	 	messageDisplay.textContent = "Try Again";
	 }
	})
}

function changeColors(color){
	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to the array
	for(var i = 0; i < num; i++){
		// get random color
		arr.push(randomColor());
	}
	//return the array at the end
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}