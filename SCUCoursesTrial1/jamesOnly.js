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

