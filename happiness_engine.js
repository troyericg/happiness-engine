// SAD, BROKEN CODE: The Genesis of The Happiness Engine
// function Smileyface() {
// 	var Eyes = ":";
// 	var Mouth = ")";
// 	Face = [":","-",")"];
// 	for(i = 0; i < Face.length; i++) { 
// 		Smile.push(Face[i]);
// 	}
// return Smile;
// }

// I presented the above code to Meghan Louttit.
// It didn't work.
// I decided this was better than trying to fix it.

// Title: The Happiness Engine: How Happy is Your Code?
// Program: Count number of possible smiley faces in a block of text.

// This is the 6th iteration of this code.


function SmileFinder() {
		var formText = document.formie.textie.value;
		var eyes = ":", nose = "-", mouth = ")";
		var numEyes = [], numNoses = [], numMouths = [];
		
		var findSmiles = function() { 
			for (i=0; i < formText.length; i++) {
			if (formText[i] == eyes) {
				keepEyes = eyes.slice();
				numEyes.push(keepEyes);
			} 
			if (formText[i] == nose) {
				keepNose = nose.slice();
				numNoses.push(keepNose);
			}
			if (formText[i] == mouth) {
				keepMouth = mouth.slice();
				numMouths.push(keepMouth);
			}
		}
	}
	findSmiles(formText);
	
		if (numEyes.length <= numNoses.length && numEyes.length <= numMouths.length) {
			var si = numEyes.length;
		} else if (numNoses.length <= numMouths.length && numEyes.length) {
			var si = numNoses.length;
		} else if (numMouths.length <= numEyes.length && numNoses.length) {
			var si = numMouths.length;
		}
		
	var numOfSmiles = si;
		document.getElementById("NumSmiles").style.color = "#3e3e3e";
		document.getElementById("NumSmiles").innerHTML = numOfSmiles;
		if (numOfSmiles == 1) {
			document.getElementById("wordSmile").innerHTML = "Time";
		} else {
			document.getElementById("wordSmile").innerHTML = "Times";
		}
}

function clearItOut() { 
	document.formie.textie.value = "";
	document.getElementById("NumSmiles").innerHTML = "_";
	document.getElementById("NumSmiles").style.color = "#fff";
	document.getElementById("wordSmile").innerHTML = "Times";
	return false;
}

document.getElementById("gobutton").onclick = SmileFinder;
document.getElementById("clearbutton").onclick = clearItOut;