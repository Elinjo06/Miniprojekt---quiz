//Funktion 1
function kontroll(){
var correct = 0;
document.getElementById('tryckt').style.visibility = "visible";


	var val1 = document.fragor.val1.value;
	var val2 = document.fragor.val2.value;
	var val3 = document.fragor.val3.value
	var val4 = document.fragor.val4.value;
	var val5 = document.fragor.val5.value;
var correct = 0;
		if (val1 == "blekinge") {
			correct++;
		}

		if (val2 == "uppland") {
			correct++;
		}


		if (val3 == "gastrikland") {
			correct++;
		}

		if (val4 == "smaland") {
			correct++;
		}

		if (val5 == "oland") {
			correct++;
		}


		
document.getElementById('ratantal').innerHTML = "Du har " + correct + " rätt.";
}