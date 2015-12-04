var question1 = {
		question: "What does the in CSS stand for?",
		answer1: "Computer",
		answer2: "Cascading",
		answer3: "Creative",
		answer4: "Colorful",
		correct_answer: "Cascading"
} 

var question2 = {
		question: "What does the H in HTML stand for?",
		answer1: "Handle",
		answer2: "High",
		answer3: "Hanging", 
		answer4: "Hyper",
		correct_answer: "Hyper"
}

var question3 = {
		question: "How do you declare a variable in JavaScript?",
		answer1: "var",
		answer2: "function",
		answer3: "if", 
		answer4: "for",
		correct_answer: "var"	
}
var question4 = {
		question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
		answer1: "&lt;script src='xxx.js'&gt",
		answer2: "&lt;script href='xxx.js'&gt",
		answer3: "&lt;script name='xxx.js'&gt",
		answer4: "&lt;script src='xxx.css'&gt",
		correct_answer: "&lt;script src='xxx.js'&gt"
}

var question5 = { 
		question: "Which jQuery function is used to prevent code from running, before the document is finished loading?",
		answer1: "$(document).ready()",
		answer2: "$(body).onload()",
		answer3: "$(document).load()",
		correct_answer: "$(document.ready()"
}

var question6 = { 
		question: "How to write an IF statement in JavaScript?",
		answer1: "if i = 5",
		answer2: "if (i == 5)",
		answer3: "if i = 5 then",
		answer4: "if i == 5 then",
		correct_answer: "if (i == 5)"
}

var question7 = { 
		question: "How do you display hyperlinks without an underline?",
		answer1: "a {text-decoration:none;}",
		answer2: "a {underline:none;}",
		answer3: "a {text-decoration:no-underline;}",
		answer4: "a {decoration:no-underline;}",
		correct_answer: "{text-decoration: no-underline"
}

var question8 = { 
		question: "Comments are done in CSS with what opening and closing symbols?",
		answer1: "** to open and ** to close",
		answer2: " /* to open and */ to close",
		answer3: "// to open and // to close",
		answer4: " !-- to open and --! to close",
		correct_answer: "/* to open and */ to close"
}

var question9 = { 
		question: "In CSS, how would you select all the <p> tags on a page?",
		answer1: "p { }",
		answer2: "#p { }",
		answer3: ".p { }",
		answer4: "<p> { }",
		correct_answer: "p { }"
}

var question10 = { 
		question: "How does a WHILE loop start?",
		answer1: "while (i <= 10)",
		answer2: "while i = 1 to 10",
		answer3: "while (i <= 10; i++)",
		correct_answer: "while (i < 10)"
}


var list = [
	question1,
	question2,
	question3,
	question4,
	question5,
	question6,
	question7,
	question8,
	question9,
	question10
]

var currentQuestion = 0
var playerScore = 0
var p1score = 0 
var p2score = 0 
var p1turn = 0 
var p2turn = 0 
var playerTurn = 'p1' 

$(document).ready(function() {
   $(".game").hide()
})

$(".start").click(function(){
    $(".rules").hide();
    $(".game").show()
    play(currentQuestion)
})


function play (q) {
	$('#question').html(list[q].question)
	$('#answer1').html(list[q].answer1)
	$('#answer2').html(list[q].answer2)
	$('#answer3').html(list[q].answer3)
	$('#answer4').html(list[q].answer4)
	$('#answer5').html(list[q].answer5)
	$('#answer6').html(list[q].answer6)
	$('#answer7').html(list[q].answer7)
	$('#answer8').html(list[q].answer8)
	$('#answer9').html(list[q].answer9)
	$('#answer10').html(list[q].answer10)
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
	next()
})


$("#play").on("click", function(){
	console.log(currentQuestion)
	play(currentQuestion)
})

function next () {
	if (currentQuestion == 9) {
		if (playerTurn == 'p1') {
			endTurn('p1')
			playerTurn = 'p2'
			currentQuestion = 0
			play(currentQuestion) 
		} else {
			endTurn('p2')
			playerTurn = 'p1' 
			check()
		}
	} else {
		currentQuestion ++
		play(currentQuestion)
	}
}


//after third question 
function endTurn (player) {
	if (player == 'p1') {
		p1score =playerScore
		alert( "Now it's players 2 turn!" )
	} else {
		p2score = playerScore 	
	} 
		playerScore = 0
		$('#score').html(playerScore)
}


function check () {
	if (p1score > p2score){ 
	    alert("Player 1 Wins!");    
	} else if (p2score > p1score){ 
	    alert("Player 2 Wins!");
	} else {
		alert("Tie!")
	} 
}












//TODO :
 
// make it a 2 player game
// explore 50/50 hint

// simple tasks: 

// change the flow so you land on an empty page that explains some rules, and just has a play button
// then on next page play button is no longer necessary
// At end of quiz, display message that quiz is over and display final score
// if answer is correct, move to next question after short pause




