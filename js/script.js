
document.addEventListener("DOMContentLoaded", 
	function (event) {

			function answer1 (event) {
			 		var number1 = document.getElementById("input1").value;
			 		if (number1 < 11) {
			 		var resp1 = "<h5> Hard luck! you should work more on your forecasting skills! You must opt for a higher value. Try again! </h5>";
			 		this.textContent = " :( ";
			 		document.getElementById("ans1").innerHTML= resp1;
			 	}
			 	else if (number1 > 20) {
			 		var resp1 = "<h5> Hard luck! you should work more on your forecasting skills! You must opt for a lower value. Try again! </h5>";
			 		this.textContent = " :( ";
			 		document.getElementById("ans1").innerHTML= resp1;
			 	}
			 	else {
			 		var resp1 = "<h5> You're almost there. To be extremely over-super-precise, the number of days verifies the normal distribution N(15,9). </h5>";
			 		this.textContent = " :) ";
			 		document.getElementById("ans1").innerHTML= resp1;
			 	}
	
			}

			function answer2 (event) {
			 		var name2 = document.getElementById("input2").value;
			 		var wishes = "<h5> Wishing you a happy day " + name2 + "!</h5>";
			 		this.textContent = " :) ";
			 		document.getElementById("ans2").innerHTML= wishes;
			 		var title2 = "Done with the FAQ for now, check soon for less FAQs :D ";
			 		document.querySelector("#title1").textContent = title2;
			// 	//console.log(this);
			// 	console.log(event);
			}

			document.querySelector("#buttonq1")
					.addEventListener("click", answer1);
			document.querySelector("#buttonq2")
					.addEventListener("click", answer2);
	}
	);
