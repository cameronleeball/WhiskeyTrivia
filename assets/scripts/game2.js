$("document").ready(function() {
	var trivia = {
		questions: [
		{	id: 1,
			q: "Single Malt Whiskey can only be distilled in Scotland.",
			a: [
			{
				dt: "True", cor: false
			}, {
				dt: "False", cor: true
			}]
		}, {
			id: 2,
			q: "The list of grains used to make Bourbon is referred to as the: ",
			a: [
			{
				dt: "Recipe", cor: false
			}, {
				dt: "Mash Bill", cor: true
			}, {
				dt: "Fermenter", cor: false
			}, {
				dt: "Cook", cor: false
			}]
		}, {
			id: 3,
			q: "As Whiskey ages in a barrel, some of the liquid evaporates over time. This is referred to as the 'Heaven's Pour.'",
			a: [
			{
				dt: "True", cor: false
			}, {
				dt: "False", cor: true
			}]
		}, {
			id: 4,
			q: "Whiskey gets its brown color from the grains used in its production:",
			a: [
			{
				dt: "True", cor: false
			}, {
				dt: "False", cor: true
			}]
		},  {
			id: 5,
			q: "Bourbon whiskey must be made from 51 percent corn, and aged for at least two years:",
			a: [
			{
				dt: "True", cor: false
			}, {
				dt: "False", cor: true
			}]
		}, {
			id: 6,
			q: "The wood used to make bourbon barrels must come from American oak trees:",
			a: [
			{
				dt: "True", cor: true
			}, {
				dt: "False", cor: false
			}]
		}, {
			id: 7,
			q: "To be labeled bourbon, a whiskey must meet which of the following criteria:",
			a: [
			{
				dt: "Distilled from at least 51% corn.", cor: true
			}, {
				dt: "Distilled from at least 100% corn.", cor: false
			}, {
				dt: "Be aged at least two years in a barrel.", cor: false
			}, {
				dt: "Distilled from at least 100% corn.", cor: false
			}]
		}, {
			id: 8,
			q: "Bourbon barrels cannot be reused to make bourbon because of:",
			a: [
			{
				dt: "High standards for great flavor.", cor: false
			}, {
				dt: "Legislation pushed by the lumber industry in the 1960s.", cor: true
			}, {
				dt: "Concerns over dangerous chemicals leeched into the wood over time.", cor: false
			}, {
				dt: "All of the above", cor: false
			}]
		}, {
			id: 9,
			q: "'Whisky' is different from 'whiskey':",
			a: [
			{
				dt: "True", cor: false
			}, {
				dt: "False", cor: true
			}]
		}, {
			id: 10,
			q: "In which of the following countries is whiskey properly spelled without an 'e'?:",
			a: [
			{
				dt: "Scotland", cor: false
			}, {
				dt: "Canada", cor: false
			}, {
				dt: "France", cor: false
			}, {
				dt: "All of the above", cor: true
			}]
		}],
		app() {
			var i = 0;
			var qId = trivia.questions[i + 1];
			var curQ = trivia.questions[i].q;
			var q1 = true;
			var qInt;
			var guesses = {
				right: 0,
				wrong: 0
			};
			var timer = {
				timeHum: 6,
				timeMach: 6 * 1000,
				totTime: parseInt(trivia.questions.length * time), 
				timeConverter: function(t) {
					var minutes = Math.floor(t / 60);
					var seconds = t - (minutes * 60);

					if (seconds < 10) {
						seconds = "0" + seconds;
					}

					if (minutes === 0) {
						minutes = "00";
					}

					else if (minutes < 10) {
						minutes = "0" + minutes;
					}

					return minutes + ":" + seconds;
				},
				countdown() {
					timer.timeHum--;
					var count = timer.timeConverter(timer.timeHum);
					$("#time").html(count);
				},
				start() {
					timerId = setInterval(timer.countdown, 1000);
				},
				stop() {
					clearInterval(timerId);
				},
				reset() {
					timer.stop();
					timer.timeHum = 6;
				}
			};
			function setQ() {
				$("#question").html(curQ).show();
				if (q1 == false) {
					$("#answers").empty();
				} else {
					q1 = false;
				};
				$("#next").hide();
			};
			function setA() {
				var j = 0;
				$.each(trivia.questions[i].a, function(index, val) {
					$("#answers").append($("<h4 class='answer'>" + val.dt + "</h4>").data("data-cor" , val.cor));
				});
			};
			function checkA() {
				$(".answer").click(function() {
					clearTimeout(qInt);
					if ($(this).data("data-cor") === true) {
						alert("Bro");
						guesses.right++;
						$("#right").html(guesses.right);
						timer.reset();
					} else if ($(this).data("data-cor") === false) {
						alert("no.");
						guesses.wrong++;
						$("#wrong").html(guesses.wrong);
						timer.reset();
					};
					$("#next").show();
					$("#progress").show();
				});
			};
			function end() {
				clearTimeout(qInt);
				$("#next").hide().attr("id","start").html("New Game!");
				if (confirm("Thanks for Playing! Try again?")) {
					$("#start").show();
				};

			};
			function run() {
				$("#start").hide().attr("id","next").html("Next Question");
				function question() {
					timer.start();
					function timeUp() {
						timer.reset();
						clearTimeout(qInt);
						alert("Time's Up! Next Question");
						guesses.wrong++;
						$("#wrong").html(guesses.wrong);
						$("#progress").show();
						question();
					};
					function startTimer() {
						qInt = setTimeout(timeUp, timer.timeMach);
					};
					startTimer();
					setQ();
					setA();
					i++;
					if (i == trivia.questions.length) {
						end();
					};
					curQ = trivia.questions[i].q;
					checkA();
					$("#next").click(question);
				};
				question();
			};
			run();
		}
	};
	$("#start").click(trivia.app);
});


