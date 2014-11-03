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
});

function msc(bID){
		document.getElementById("test").innerHTML="Oh you didn't take that" + bID;
}

var math = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 106"];
var coen = ["COEN 10", "COEN 11", "COEN 12", "CORE", "CORE"];
var sci = [ "CHEM 11", "PHYS 31", "PHYS 32"];
var core = ["CTW 1", "CTW 2", "COEN 19"];
var replace = "CORE";

function COEN(){
	//these will be the input variables
	//set these it be the test scores
	var APCompSci;
	var IBCompSci;
	
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
	document.getElementById("tester2").innerHTML="And you scored: " + APCompSci;
	
	
	//these will be the output variables, these are the classes that go in the matrix
	var Fall1;
	var Winter1;
	var Spring1;
	
	//if (APCompSci < 3 || IBCompSci < 6 ||(APCompSci == NA && IBCompSci == NA ))
	if (APCompSci < 3 || IBCompSci < 6){
		//no credit follow the suggested plan
		Fall1 = coen[0];
		Winter1 = coen[1];
		Spring1 = coen[2];
	}else if (APCompSci == 3){
		Fall1 = coen[1];
		Winter1 = coen[2];
		Spring1 = coen[3];
	} else if (APCompSci >= 4 || IBCompSci >= 6){
		Fall1 = coen[2];
		Winter1 = coen[3];
		Spring1 = coen[4];
	}
	
	document.getElementById("b1").innerHTML = Fall1;
	document.getElementById("b2").innerHTML = Winter1;
	document.getElementById("b3").innerHTML = Spring1;
}