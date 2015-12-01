var question1 = {
		question : "What does the C in CSS stand for?",
		answer1: "Console",
		answer2: "Cascading",
		answer3: "Catapult", 
		answer4: "Courtney",
		correct_answer: "Cascading"
} 

var question2 = {
		question : "What does the H in HTML stand for?",
		answer1: "Handle",
		answer2: "High",
		answer3: "Hanging", 
		answer4: "Hyper",
		correct_answer: "Hyper"
}

var question3 = {
		question : "How do you declare a variable in JavaScript?",
		answer1: "var",
		answer2: "function",
		answer3: "if", 
		answer4: "for",
		correct_answer: "var"
}

var list = [
	question1,
	question2,
	question3
]

var currentQuestion = 0
var playerScore = 0

function play (q) {
	$('#question').html(list[q].question)
	$('#answer1').html(list[q].answer1)
	$('#answer2').html(list[q].answer2)
	$('#answer3').html(list[q].answer3)
	$('#answer4').html(list[q].answer4)
}

$(".answers").on("click", function (a) {
	console.log(a)
	if (this.innerHTML === list[currentQuestion].correct_answer){
		console.log("correct")
		this.innerHTML = "CORRECT!";
		playerScore += 2;
		$('#score').html(playerScore)		
	} else {
		console.log("wrong answer")
		this.innerHTML = "WRONG ANSWER!"
		playerScore += -1;
		$('#score').html(playerScore)
	}
})

$("#play").on("click", function(){
	console.log(currentQuestion)
	play(currentQuestion)
})

$('#next').on("click", function(){
	currentQuestion ++
	play(currentQuestion)
})



//TODO :
 
// make it a 2 player game
// come up with more Q's
// explore 50/50 hint

// simple tasks: 

// change the flow so you land on an empty page that explains some rules, and just has a play button
// then on next page play button is no longer necessary
// At end of quiz, display message that quiz is over and display final score
// if answer is correct, move to next question after short pause



