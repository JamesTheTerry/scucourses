// JavaScript Document
// NOOCH!!!!

$(document).ready(function(){
	//this hides and shows AP and IB possibilities
	$('input[type="checkbox"]').click(function(){
		if($(this).attr("value")=="APyes"){
			$("#apSection").toggle();
		}
		if($(this).attr("value")=="IByes"){
			$("#ibSection").toggle();
		}
	});
	
	//I must create the default schedule by running the algorithms on load
	CTW();
	COEN();
	CalcFull();
	SciCred()
	addCI();
	engr1();
});

var math1 = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 106", "AMTH 108", "MATH 53", "CORE"];
var math2 = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 108", "MATH 53", "CORE"];
var coen1 = ["COEN 10", "COEN 11", "CORE", "CORE"];
var coen2 = "COEN 12";
var sci = [ "CHEM 11", "PHYS 31", "PHYS 32"];
var core = ["CTW1", "CTW2", "COEN 19"];
var replace = "CORE";


function removeCI(){
	var Fall = [];
	var Winter = [];
	var Spring = [];
	Fall[0] = document.getElementById("a1").innerHTML;
	Fall[1] = document.getElementById("b1").innerHTML;
	Fall[2] = document.getElementById("c1").innerHTML;
	Fall[3] = document.getElementById("d1").innerHTML;
	Winter[0] = document.getElementById("a2").innerHTML;
	Winter[1] = document.getElementById("b2").innerHTML;
	Winter[2] = document.getElementById("c2").innerHTML;
	Winter[3] = document.getElementById("d2").innerHTML;
	Spring[0] = document.getElementById("a3").innerHTML;
	Spring[1] = document.getElementById("b3").innerHTML;
	Spring[2] = document.getElementById("c3").innerHTML;
	Spring[3] = document.getElementById("d3").innerHTML;
	
	for (i=0; i<4; i++){
		if (Fall[i] == "CI1" || Fall[i] == "CI2"){
			Fall[i] = "CORE";
		}
		if (Winter[i] == "CI1" || Winter[i] == "CI2"){
			Winter[i] = "CORE";
		}
		if (Spring[i] == "CI1" || Spring[i] == "CI2"){
			Spring[i] = "CORE";
		}
	}
	document.getElementById("a1").innerHTML = Fall[0];
	document.getElementById("b1").innerHTML = Fall[1];
	document.getElementById("c1").innerHTML = Fall[2];
	document.getElementById("d1").innerHTML = Fall[3];
	document.getElementById("a2").innerHTML = Winter[0];
	document.getElementById("b2").innerHTML = Winter[1];
	document.getElementById("c2").innerHTML = Winter[2];
	document.getElementById("d2").innerHTML = Winter[3];
	document.getElementById("a3").innerHTML = Spring[0];
	document.getElementById("b3").innerHTML = Spring[1];
	document.getElementById("c3").innerHTML = Spring[2];
	document.getElementById("d3").innerHTML = Spring[3];
}


function MathSci(){
	CalcFull();
	SciCred();
	COEN()
	
}

function CalcFull(){
	//define the variables
	var APCalcScoreAB;
	var APCalcScoreBC;
	var creScore = document.getElementById("creNumber").value;
	var start;
	var natSci=0;
	var APChem;
	var APEnvSci;
	
	//set APCalcScoreAB
	if(document.getElementById('radio10').checked) {
		APCalcScoreAB = document.getElementById('radio10').value;
	} else if (document.getElementById('radio11').checked) {
		APCalcScoreAB = document.getElementById('radio11').value;
	} else if (document.getElementById('radio12').checked) {
		APCalcScoreAB = document.getElementById('radio12').value;
	} else if (document.getElementById('radio13').checked) {
		APCalcScoreAB = document.getElementById('radio13').value;
	} else if (document.getElementById('radio14').checked) {
		APCalcScoreAB = document.getElementById('radio14').value;
	} else if (document.getElementById('radio15').checked) {
		APCalcScoreAB = document.getElementById('radio15').value;
	} else {
		APCalcScoreAB = 0;
	}
	
	//set APCalcScoreBC
	if(document.getElementById('radio20').checked) {
		APCalcScoreBC = document.getElementById('radio20').value;
	} else if (document.getElementById('radio21').checked) {
		APCalcScoreBC = document.getElementById('radio21').value;
	} else if (document.getElementById('radio22').checked) {
		APCalcScoreBC = document.getElementById('radio22').value;
	} else if (document.getElementById('radio23').checked) {
		APCalcScoreBC = document.getElementById('radio23').value;
	} else if (document.getElementById('radio24').checked) {
		APCalcScoreBC = document.getElementById('radio24').value;
	} else if (document.getElementById('radio25').checked) {
		APCalcScoreBC = document.getElementById('radio25').value;
	} else {
		APCalcScoreBC = 0;
	}
	
	//get the APChem value
	if (document.getElementById('radio30').checked) {
		APChem = document.getElementById('radio30').value;
  	} else if (document.getElementById('radio31').checked) {
	  	APChem = document.getElementById('radio31').value;
  	} else if (document.getElementById('radio32').checked) {
	  	APChem = document.getElementById('radio32').value;
  	} else if (document.getElementById('radio33').checked) {
	  	APChem = document.getElementById('radio33').value;
  	} else if (document.getElementById('radio34').checked) {
	  	APChem = document.getElementById('radio34').value;
  	} else if (document.getElementById('radio35').checked) {
	  	APChem = document.getElementById('radio35').value;
  	} else {
	  	APChem = 0;
  	}
  	
  	//get the APEnvSci value
	if (document.getElementById('radio30').checked) {
		APEnvSci = document.getElementById('radio60').value;
  	} else if (document.getElementById('radio61').checked) {
	  	APEnvSci = document.getElementById('radio61').value;
  	} else if (document.getElementById('radio62').checked) {
	  	APEnvSci = document.getElementById('radio62').value;
  	} else if (document.getElementById('radio63').checked) {
	  	APEnvSci = document.getElementById('radio63').value;
  	} else if (document.getElementById('radio64').checked) {
	  	APEnvSci = document.getElementById('radio64').value;
  	} else if (document.getElementById('radio65').checked) {
	  	APEnvSci = document.getElementById('radio65').value;
  	} else {
	  	APEnvSci = 0;
  	}

	
	//checkbox settings stuff
	var math11 = document.getElementById("check9").checked;
	var math12 = document.getElementById("check10").checked;
	var math13 = document.getElementById("check11").checked;
	var math14 = document.getElementById("check12").checked;
	var amth106 = document.getElementById("check13").checked;
	
	if (math11 == true && APCalcScoreBC < 3){
		APCalcScoreBC = 3;
	}
	if (math12 == true){
		APCalcScoreBC = 5;
	}
	if (math13 == true){
		APCalcScoreBC = 6;
	}
	if (math14 == true){
		APCalcScoreBC = 7;
	}
	if (amth106 == true){
		APCalcScoreBC = 8;
	}
	
	//BC score of 3+ overides any AB score.  CRE is below all them
	if(APCalcScoreBC == 8){
		start = 6;
	} else if(APCalcScoreBC == 7){
		start = 5;
	} else if(APCalcScoreBC == 6){
		start = 4;
	} else if(APCalcScoreBC >= 3) {		if(APCalcScoreBC > 3){
			start = 3;
		} else if (APCalcScoreBC == 3) {
			start = 2;
		}
	} else if (APCalcScoreAB >= 4) {
		start = 2
	} else if (creScore >= 19) {
		start = 1;
	} else {
		start = 0;
	}
	
	if(APChem > 3 || APEnvSci > 3){
		natSci = 1;
	}
	
	if(natSci){
		var Fall0 = math2[start];
		var Winter0 = math2[start+1];
		var Spring0 = math2[start+2];
	} else{
		var Fall0 = math1[start];
		var Winter0 = math1[start+1];
		var Spring0 = math1[start+2];
	}
	
	document.getElementById("a1").innerHTML = Fall0;
	document.getElementById("a2").innerHTML = Winter0;
	document.getElementById("a3").innerHTML = Spring0;
	
	addCI();
}

function SciCred(){
	var APChem;
	var APphysics;
	var IBChem;
	var Transfer32 = 0;
		
	//get the APChem value
	if (document.getElementById('radio30').checked) {
		APChem = document.getElementById('radio30').value;
  	} else if (document.getElementById('radio31').checked) {
	  	APChem = document.getElementById('radio31').value;
  	} else if (document.getElementById('radio32').checked) {
	  	APChem = document.getElementById('radio32').value;
  	} else if (document.getElementById('radio33').checked) {
	  	APChem = document.getElementById('radio33').value;
  	} else if (document.getElementById('radio34').checked) {
	  	APChem = document.getElementById('radio34').value;
  	} else if (document.getElementById('radio35').checked) {
	  	APChem = document.getElementById('radio35').value;
  	} else {
	  	APChem = 0;
  	}
  	
  	//get the APphysics value
	if (document.getElementById('radio50').checked) {
		APphysics = document.getElementById('radio50').value;
  	} else if (document.getElementById('radio51').checked) {
	  	APphysics = document.getElementById('radio51').value;
  	} else if (document.getElementById('radio52').checked) {
	  	APphysics = document.getElementById('radio52').value;
  	} else if (document.getElementById('radio53').checked) {
	  	APphysics = document.getElementById('radio53').value;
  	} else if (document.getElementById('radio54').checked) {
	  	APphysics = document.getElementById('radio54').value;
  	} else if (document.getElementById('radio55').checked) {
	  	APphysics = document.getElementById('radio55').value;
  	} else {
	  	APphysics = 0;
  	}
  	
  	//get the IBChem value
  	if (document.getElementById('radio60').checked) {
		IBChem = document.getElementById('radio60').value;
  	} else if (document.getElementById('radio61').checked) {
	  	IBChem = document.getElementById('radio61').value;
  	} else if (document.getElementById('radio62').checked) {
	  	IBChem = document.getElementById('radio62').value;
  	} else if (document.getElementById('radio63').checked) {
	  	IBChem = document.getElementById('radio63').value;
  	} else if (document.getElementById('radio64').checked) {
	  	IBChem = document.getElementById('radio64').value;
  	} else if (document.getElementById('radio65').checked) {
	  	IBChem = document.getElementById('radio65').value;
  	} else if (document.getElementById('radio66').checked) {
	  	IBChem = document.getElementById('radio66').value;
  	} else if (document.getElementById('radio67').checked) {
	  	IBChem = document.getElementById('radio67').value;
  	} else {
	  	IBChem = 0;
  	}
  	
  	//let's set some goddamn checkboxes brother!
  	var chem11 = document.getElementById("check1").checked;
	var phys31 = document.getElementById("check2").checked;
	var phys32 = document.getElementById("check3").checked;
	
	if (chem11 == true){
		APChem = 5;
	}
	if (phys31 == true){
		APphysics = 5;
	}
	if (phys32 == true){
		Transfer32 = 1;
	}  	  	
	
	//logic
	if(APChem > 2 || IBChem > 5){
		Fall2 = replace;
	} else{
		Fall2 = sci[0];
	}
	
	if(APphysics > 3){
		Winter2 = replace;
	} else{
		Winter2 = sci[1];
	}
	if(Transfer32 == 1){
		Spring2 = replace;
	} else{
		Spring2 = sci[2];
	}
	
	document.getElementById("c1").innerHTML = Fall2;
	document.getElementById("c2").innerHTML = Winter2;
	document.getElementById("c3").innerHTML = Spring2;
	
	addCI();
}

function MoveCoen(){

	removeCI();
	
	//find what classes are currently in the schedule
	var Fall = [];
	var Winter = [];
	var Spring = [];
	Fall[0] = document.getElementById("a1").innerHTML;
	Fall[1] = document.getElementById("b1").innerHTML;
	Fall[2] = document.getElementById("c1").innerHTML;
	Fall[3] = document.getElementById("d1").innerHTML;
	Winter[0] = document.getElementById("a2").innerHTML;
	Winter[1] = document.getElementById("b2").innerHTML;
	Winter[2] = document.getElementById("c2").innerHTML;
	Winter[3] = document.getElementById("d2").innerHTML;
	Spring[0] = document.getElementById("a3").innerHTML;
	Spring[1] = document.getElementById("b3").innerHTML;
	Spring[2] = document.getElementById("c3").innerHTML;
	Spring[3] = document.getElementById("d3").innerHTML;
	
	var i;
	var flagW = 0;
	var flagF = 0;
	
	for (i=0;i<4;i++){
		if (Winter[i] == "CORE"){
			flagW++;
		} else if(Winter[i] == "CTW1" || Winter[i] == "CTW2" ){
			flagW++;
		}

	}
	
	if( flagW > 2){
		//move COEN 12 the winter if more than 2 CORE is Winter
		document.getElementById("b2").innerHTML = coen2;
		document.getElementById("b3").innerHTML = replace;
		return;
	}

	
}


function COEN(){
	//these will be the input variables
	//set these it be the test scores
	var APCompSci;
	var IBCompSci;
	
	//get the APCompSci value
	if (document.getElementById('radio40').checked) {
		APCompSci = document.getElementById('radio40').value;
  	} else if (document.getElementById('radio41').checked) {
	  	APCompSci = document.getElementById('radio41').value;
  	} else if (document.getElementById('radio42').checked) {
	  	APCompSci = document.getElementById('radio42').value;
  	} else if (document.getElementById('radio43').checked) {
	  	APCompSci = document.getElementById('radio43').value;
  	} else if (document.getElementById('radio44').checked) {
	  	APCompSci = document.getElementById('radio44').value;
  	} else if (document.getElementById('radio45').checked) {
	  	APCompSci = document.getElementById('radio45').value;
  	} else {
	  	APCompSci = 0;
  	}
  	
  	//get the IBCompSci value
  	if (document.getElementById('radio70').checked) {
		IBCompSci = document.getElementById('radio70').value;
  	} else if (document.getElementById('radio71').checked) {
	  	IBCompSci = document.getElementById('radio71').value;
  	} else if (document.getElementById('radio72').checked) {
	  	IBCompSci = document.getElementById('radio72').value;
  	} else if (document.getElementById('radio73').checked) {
	  	IBCompSci = document.getElementById('radio73').value;
  	} else if (document.getElementById('radio74').checked) {
	  	IBCompSci = document.getElementById('radio74').value;
  	} else if (document.getElementById('radio75').checked) {
	  	IBCompSci = document.getElementById('radio75').value;
  	} else if (document.getElementById('radio76').checked) {
	  	IBCompSci = document.getElementById('radio76').value;
  	} else if (document.getElementById('radio77').checked) {
	  	IBCompSci = document.getElementById('radio77').value;
  	} else {
	  	IBCompSci = 0;
  	}
	
	//let's set some goddamn checkboxes brother!
  	var coen10 = document.getElementById("check5").checked;
	var coen11 = document.getElementById("check6").checked;
	var coen12 = document.getElementById("check7").checked;
	
	if (coen10 == true  && APCompSci < 3){
		APCompSci = 3;
	}
	if (coen11 == true){
		APCompSci = 5;
	}
	if (coen12 == true){
		APCompSci = 6;
	}
	
	
	//these will be the output variables, these are the classes that go in the matrix
	var Fall1;
	var Winter1;
	var Spring1;
	
	if(APCompSci == 6){
		//no COEN 12
		Fall1 = coen1[2];
		Winter1 = coen1[3];
		Spring1 = replace;
	} else if (APCompSci < 3 && IBCompSci < 6){
		//no credit follow the suggested plan
		Fall1 = coen1[0];
		Winter1 = coen1[1];
		Spring1 = coen2;
	} else if (APCompSci >= 4 || IBCompSci >= 6){
		//no COEN 11
		Fall1 = coen1[2];
		Winter1 = coen1[3];
		Spring1 = coen2;
	} else if (APCompSci == 3){
		//no COEN 10
		Fall1 = coen1[1];
		Winter1 = coen1[2];
		Spring1 = coen2;
	}
	
	document.getElementById("b1").innerHTML = Fall1;
	document.getElementById("b2").innerHTML = Winter1;
	document.getElementById("b3").innerHTML = Spring1;
	
	if(APCompSci < 6){
		//Move COEN12 to a different quarter
		MoveCoen();
	}
	
	addCI();
}

function CTW(){
	var transfer19 = 0; // have they trnasfered out of COEN19
	
	//checkboxes...
	var coen19 = document.getElementById("check8").checked;	
	if (coen19 == true){
		transfer19 = 1;
	}
	var Fall3 = core[0];
	var Winter3 = core[1];
	}
	if(transfer19){
		var Spring3 = replace;
	} else{
		var Spring3 = core[2];
	}
	
	document.getElementById("d1").innerHTML = Fall3;
	document.getElementById("d2").innerHTML = Winter3;
	document.getElementById("d3").innerHTML = Spring3;
	
	addCI();
}

function addCI(){
	
	removeCI();
	
	var Fall = [];
	var Winter = [];
	var Spring = [];
	Fall[0] = document.getElementById("a1").innerHTML;
	Fall[1] = document.getElementById("b1").innerHTML;
	Fall[2] = document.getElementById("c1").innerHTML;
	Fall[3] = document.getElementById("d1").innerHTML;
	Winter[0] = document.getElementById("a2").innerHTML;
	Winter[1] = document.getElementById("b2").innerHTML;
	Winter[2] = document.getElementById("c2").innerHTML;
	Winter[3] = document.getElementById("d2").innerHTML;
	Spring[0] = document.getElementById("a3").innerHTML;
	Spring[1] = document.getElementById("b3").innerHTML;
	Spring[2] = document.getElementById("c3").innerHTML;
	Spring[3] = document.getElementById("d3").innerHTML;

	var flag = 9;
	var i;
	
	for (i=0;i<4;i++){
		if (Winter[i] == "CORE"){
			flag = i;
		}
		if (Winter[i] == "CI2" || Winter[i] == "CI1"){
			return;
		}
	}
	
	//this means that there is no core in the winter
	//and you will not add C&I
	if (flag == 9){
		return;
	}
	
	for (i=0;i<4;i++){
		if (Fall[i] == "CORE"){
			Fall[i]= "CI1";//this needs to change the class in the matrix
			Winter[flag] = "CI2";//this needs to change the class in the matrix
			
			if (flag == 0){
				document.getElementById("a2").innerHTML = "CI2";
			} else if (flag == 1) {
				document.getElementById("b2").innerHTML = "CI2";
			} else if (flag == 2) {
				document.getElementById("c2").innerHTML = "CI2";
			} else if (flag == 3) {
				document.getElementById("d2").innerHTML = "CI2";
			}
			
			if (i == 0){
				document.getElementById("a1").innerHTML = "CI1";
			} else if (i == 1) {
				document.getElementById("b1").innerHTML = "CI1";
			} else if (i == 2) {
				document.getElementById("c1").innerHTML = "CI1";
			} else if (i == 3) {
				document.getElementById("d1").innerHTML = "CI1";
			}
			
			return;			
		}
	}	
	for (i=0;i<4;i++){
		if (Spring[i] == "CORE"){
			Spring[i]= "CI2";//this needs to change the class in the matrix
			Winter[flag] = "CI1";//this needs to change the class in the matrix
			
			if (flag == 0){
				document.getElementById("a2").innerHTML = "CI1";
			} else if (flag == 1) {
				document.getElementById("b2").innerHTML = "CI1";
			} else if (flag == 2) {
				document.getElementById("c2").innerHTML = "CI1";
			} else if (flag == 3) {
				document.getElementById("d2").innerHTML = "CI1";
			}
			
			if (i == 0){
				document.getElementById("a3").innerHTML = "CI2";
			} else if (i == 1) {
				document.getElementById("b3").innerHTML = "CI2";
			} else if (i == 2) {
				document.getElementById("c3").innerHTML = "CI2";
			} else if (i == 3) {
				document.getElementById("d3").innerHTML = "CI2";
			}
			
			return;			
		}
	}
}

function engr1()
{
	
	document.getElementById("e2").innerHTML = "ENGR 1";

}