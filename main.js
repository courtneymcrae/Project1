

var list = [
	question1 = {
		question : "who was the first president",
		answer1: "washington",
		answer2: "lincoln",
		answer3: "george W", 
		answer4: "obama",
		correct_answer: 1
	}, 
	question2 = {
		question : "who was the second president",
		answer1: "washington",
		answer2: "lincoln",
		answer3: "george W", 
		answer4: "obama",
		correct_answer: 2

	}, 
	question3 ={
		question : "who was the third president",
		answer1: "washington",
		answer2: "lincoln",
		answer3: "george W", 
		answer4: "obama",
		correct_answer: 3

	}

]

function courtney () {
	$('#question').html(list[0].question)
	$('#answer1').html(list[0].answer1)
	$('#answer2').html(list[0].answer2)
	$('#answer3').html(list[0].answer3)
	$('#answer4').html(list[0].answer4)
}

// rename function courtney so that it has an appropriate naming convention
// figure out how to call different questions, and their appropriate answers, either randomly, or just in order, as long as it works its way through "list" (list of questions (the array of question object literals))
