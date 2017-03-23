
//Whiskey Trivia Game Logic

$("document").ready(function() {


	//Wrapping all of the data/variables for the game within an object
	var quiz = {
		questions: {
			easy: [
			{
				question: "This is question 1?", 
				answers: [
				{
					text: "Sample Answer 1", correct: false
				}, {
					text: "Sample Answer 2", correct: true
				}, {
					text: "Sample Answer 3", correct: false
				}, {
					text: "Sample Answer 4", correct: false
				}]
			}, {
				question: "This is question 2?", 
				answers: [
				{
					text: "Sample Answer 1", correct: false
				}, {
					text: "Sample Answer 2", correct: false
				}, {
					text: "Sample Answer 3", correct: true
				}, {
					text: "Sample Answer 4", correct: false
				}]
			}, {
				question: "This is question 3?", 
				answers: [
				{
					text: "Sample Answer 1", correct: true
				}, {
					text: "Sample Answer 2", correct: false
				}, {
					text: "Sample Answer 3", correct: false
				}, {
					text: "Sample Answer 4", correct: false
				}]
			}, {
				question: "This is question 4?", 
				answers: [
				{
					text: "Sample Answer 1", correct: false
				}, {
					text: "Sample Answer 2", correct: false
				}, {
					text: "Sample Answer 3", correct: false
				}, {
					text: "Sample Answer 4", correct: true
				}]
			}
			],
			medium: [ 
			{
				question: "This is question 1?", 
				answers: [
				{
					text: "Sample Answer 1", correct: false
				}, {
					text: "Sample Answer 2", correct: true
				}, {
					text: "Sample Answer 3", correct: false
				}, {
					text: "Sample Answer 4", correct: false
				}]
			}, {
				question: "This is question 2?", 
				answers: [
				{
					text: "Sample Answer 1", correct: false
				}, {
					text: "Sample Answer 2", correct: false
				}, {
					text: "Sample Answer 3", correct: true
				}, {
					text: "Sample Answer 4", correct: false
				}]
			}, {
				question: "This is question 3?", 
				answers: [
				{
					text: "Sample Answer 1", correct: true
				}, {
					text: "Sample Answer 2", correct: false
				}, {
					text: "Sample Answer 3", correct: false
				}, {
					text: "Sample Answer 4", correct: false
				}]
			}, {
				question: "This is question 4?", 
				answers: [
				{
					text: "Sample Answer 1", correct: false
				}, {
					text: "Sample Answer 2", correct: false
				}, {
					text: "Sample Answer 3", correct: false
				}, {
					text: "Sample Answer 4", correct: true
				}]
			}
			]
		},
		run() { 
			$("#start").hide();
			var running = {
				vars: {
					i: 0,
					j: 0
				},
				answer() {
					$(".answer").click(function() {
						if ($(this).data("data-correct") == true) {
							console.log($(this).data("data-correct"));
							alert("well done sir");	
						} else {
							alert("do you even sip bro?");
							console.log($(this).data("data-correct"));
						}
						$("#start").attr("id","next").show().html("Next Question");
						
					});
				},
				firstQ() {
					$("#answers").append($("<h4 class='answer'></h4>"));
				},
				Qs() {
					$("#answers").html($("<h4 class='answer'>" + tempAns.text + "</h4>").data("data-correct", tempAns.correct));
				},
				ansLoop() {
					while (running.vars.j < quiz.questions.easy[running.vars.i].answers.length) {
						tempAns = quiz.questions.easy[running.vars.i].answers[running.vars.j];
						if (running.vars.i == 0) {
							running.firstQ();
						} else {
							running.Qs();
						};
						running.vars.j++;
						running.answer();
					};
				}
			};
			for (running.vars.i; running.vars.i < quiz.questions.easy.length; running.vars.i++) {
				$("#question").show();
				running.ansLoop();
				$("#next").click(running.ansLoop);
			}
		}
	};
	$("#start").click(quiz.run);
}); 






// for (running.vars.i; running.vars.i < quiz.questions.easy.length; running.vars.i++) {


