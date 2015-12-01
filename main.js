var question1 = {
		question : "What does the C in CSS stand for?",
		answer1: "Console",
		answer2: "Cascading",
		answer3: "Catapult", 
		answer4: "Courtney",
		correct_answer: "Cascading"
	}; 

var question2 = {
		question : "What does the H in HTML stand for?",
		answer1: "Handle",
		answer2: "High",
		answer3: "Hanging", 
		answer4: "Hyper",
		correct_answer: "Hyper"

	};

var question3 = {
		question : "How do you declare a variable in JavaScript?",
		answer1: "var",
		answer2: "function",
		answer3: "if", 
		answer4: "for",
		correct_answer: "var"

	};

var list = [
	question1,
	question2,
	question3
];

 var currentQuestion = 0;
 var playerScore = 0; 


function play (q) {
	$('#question').html(list[q].question)
	$('#answer1').html(list[q].answer1)
	$('#answer2').html(list[q].answer2)
	$('#answer3').html(list[q].answer3)
	$('#answer4').html(list[q].answer4)

}



// function answer (a) {
// 	console.log(a.html)
// }



$(".answers").on("click", function (a) {
	console.log(a)

	if (this.innerHTML === list[currentQuestion].correct_answer){
		console.log("correct")
		this.innerHTML = "CORRECT!";
		// do code here that adds a correct answer to the score
		playerScore ++;
		$('#score').html(playerScore)
		
	} else {
		console.log("wrong answer")
		this.innerHTML = "WRONG ANSWER!"
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


// $("#answer1").on("click", function () {
//     console.log( "correct" ) 
// })
// $("#answer2").on("click", function () {
//     console.log( "incorrect" )
// })
// $("#answer3").on("click", function () {
//     console.log( "incorrect" ) 
// })
// $("#answer4").on("click", function () {
//     console.log( "incorrect" ) 
// })



// $( "answer2" ).click({
//     play function() {
//         console.log( "incorrect" );
//     },
//     $("answer3"): function() {
//         console.log( "incorrect" );
//     },
//     click: function() {
//         console.log( "correct" );
//     }
// });



// figure out how to call different questions, and their appropriate answers, either randomly, or just in order, as long as it works its way through "list" (list of questions (the array of question object literals))
