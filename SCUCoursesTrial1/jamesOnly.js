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
	
	/*
	//this is for metalSpaceCanoe
	$(input[type="radio"]).click(function(){
		if($(this).attr("value")=="0"){
			document.getElementById("test").value="Oh you didn't take that one";
		}
	});
	*/
});

function msc(bID){
	document.getElementById("test").innerHTML="Oh you didn't take that" + bID;
}