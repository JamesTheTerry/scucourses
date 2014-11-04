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
});

var math = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 106", "CORE", "CORE", "CORE"];
var coen = ["COEN 10", "COEN 11", "COEN 12", "CORE", "CORE", "CORE"];
var sci = [ "CHEM 11", "PHYS 31", "PHYS 32"];
var core = ["CTW 1", "CTW 2", "COEN 19"];
var replace = "CORE";

function CalcFull(){
	//define the variables
	var APCalcScoreAB;
	var APCalcScoreBC;
	var creScore = document.getElementById("creNumber").value;
	var start;
	
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
	
	var Fall0 = math[start];
	var Winter0 = math[start+1];
	var Spring0 = math[start+2];
	
	document.getElementById("a1").innerHTML = Fall0;
	document.getElementById("a2").innerHTML = Winter0;
	document.getElementById("a3").innerHTML = Spring0;
}

function SciCred(){
	var APChem;
	var APphysics;
	var IBChem;
		
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
  	
  	Transfer32 = 0;
  	
	
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
	if(Transfer32){
		Spring2 = replace;
	} else{
		Spring2 = sci[2];
	}
	
	document.getElementById("c1").innerHTML = Fall2;
	document.getElementById("c2").innerHTML = Winter2;
	document.getElementById("c3").innerHTML = Spring2;
	
	addCI();
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
	
	//these will be the output variables, these are the classes that go in the matrix
	var Fall1;
	var Winter1;
	var Spring1;
	
	if(APCompSci == 6){
		Fall1 = coen[3];
		Winter1 = coen[4];
		Spring1 = coen[5];
	} else if (APCompSci < 3 && IBCompSci < 6){
		//no credit follow the suggested plan
		Fall1 = coen[0];
		Winter1 = coen[1];
		Spring1 = coen[2];
	} else if (APCompSci >= 4 || IBCompSci >= 6){
		Fall1 = coen[2];
		Winter1 = coen[3];
		Spring1 = coen[4];
	} else if (APCompSci == 3){
		Fall1 = coen[1];
		Winter1 = coen[2];
		Spring1 = coen[3];
	}
	
	document.getElementById("b1").innerHTML = Fall1;
	document.getElementById("b2").innerHTML = Winter1;
	document.getElementById("b3").innerHTML = Spring1;
	
	addCI();
}

function CTW(){
	var Fall3 = core[0];
	var Winter3 = core[1];
	var Spring3 = core[2];
	
	document.getElementById("d1").innerHTML = Fall3;
	document.getElementById("d2").innerHTML = Winter3;
	document.getElementById("d3").innerHTML = Spring3;
}

function addCI(){
	var Winter1 = document.getElementById("b2").innerHTML;
	var Spring1 = document.getElementById("b3").innerHTML;
	var Fall2 = document.getElementById("c1").innerHTML;
	var Winter2 = document.getElementById("c2").innerHTML;
	
	if(Winter1 == "CORE" && Spring1 == "CORE"){
		Winter1 = "C&I 1";
		Spring1 = "C&I 2";
	}else if (Fall2 == "CORE" && Winter2 == "CORE"){
		Fall2 = "C&I 1";
		Winter2 = "C&I 2";
	}else if (Spring1 == "CORE" && Winter2 == "CORE"){
		Winter2 = "C&I 1";
		Spring1 = "C&I 2";
	}
	
	document.getElementById("b2").innerHTML = Winter1;
	document.getElementById("b3").innerHTML = Spring1;
	document.getElementById("c1").innerHTML = Fall2;
	document.getElementById("c2").innerHTML = Winter2;
}
