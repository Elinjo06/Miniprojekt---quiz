//Funktion 1
var correct = 0;
function kontroll(){
document.getElementById('tryckt').style.visibility = "visible";


	var val1 = document.fragor.val1.value;
	var val2 = document.fragor.val2.value;
	var val3 = document.fragor.val3.value;
	var val4 = document.fragor.val4.value;
	var val5 = document.fragor.val5.value;
	var val6 = document.fragor.val6.value;
	var val7 = document.fragor.val7.value;
	var val8 = document.fragor.val8.value;
	var val9 = document.fragor.val9.value;
	var val10 = document.fragor.val10.value;

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

		if (val6 == "skane") {
			correct++;
		}

			if (val7 == "bohuslan") {
			correct++;
		}

			if (val8 == "medelpad") {
			correct++;
		}

			if (val9 == "angermanland") {
			correct++;
		}

			if (val10 == "blekinge") {
			correct++;
		}

		

}

$(function(){
	$('#svarskort').hide();
	$('#knapp').click(function(event){ 
		$('#svarskort').show();
		document.getElementById('ratantal').innerHTML = "Du har " + correct + " rätt.";
		console.log(correct);
	});
});