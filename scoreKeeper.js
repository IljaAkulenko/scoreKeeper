var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxDisplay = document.querySelector("#maxDisplay");
var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var maxScore = 4;
var gameOver = false;



// if you click score 1 goes up

p1button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === maxScore){
			gameOver = true;
			p1Display.classList.add("green");
		}
		p1Display.textContent = p1Score;
		
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver){
		p2Score ++;
		if(p2Score === maxScore){
			gameOver = true;
			p2Display.classList.add("green");
		}
		p2Display.textContent = p2Score;
	}
});

// if youclick button 2 to encrease p2 score
reset.addEventListener("click", resetIt);

function resetIt(){
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	// maxDisplay.textContent = 0;
	p1Score = 0;
	p2Score = 0;
	// maxScore = 0;
	gameOver = false;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
}

numInput.addEventListener("change",setMaxScore);

function setMaxScore(){
	maxDisplay.textContent = numInput.value;
	maxScore = Number(numInput.value);
	resetIt();
}












