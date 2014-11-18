//JavaScript Bitches

$(document).ready(function(){
	//put anything that needs to be run onLoad here
});


//global selection variables used to determine what has been activated and what has not
//unless otherwise specified:
// 0 means inactive
// 1 means active

var majorConfidence = 0; //if 1 then ENGR1 to winter, if 0 then ENGR1 to fall
var cProgConfidence = 0;
var aps = 0; //for AP category
var ibs = 0; //for IB category
var apcalcabGB = 0;
var apcalcbcGB = 0;
var apchemGB = 0;
var apcompsciGB = 0;
var apphyscmechGB = 0;
var apphyscelecGB = 0;
var apenviGB = 0;
var apgovtGB = 0;
var apmacroeconGB = 0;
var apmicroeconGB = 0;
var apPsychologyGB = 0;
var ibchemGB = 0;
var ibcompsciGB = 0;
var ibphysGB = 0;
var ibeconGB = 0;
var crePF = 0; //1 is a pass of cre, 0 is a fail of cre.  That's what it is called crePF cre Pass/Fail.  Get it?


//END Variable declaration

function webDesignClick(){
	//set the styles of the Web Design Text
	document.getElementById("webDesign").style.color = "#1580ea";
	document.getElementById("webDesign").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
	
	//reset the styles of COEN
	document.getElementById("coen").style.color = "#999999";
	document.getElementById("coen").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
}

function coenClick(){
	//set the styles of the Web Design Text
	document.getElementById("coen").style.color = "#1580ea";
	document.getElementById("coen").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
	
	//reset the styles of COEN
	document.getElementById("webDesign").style.color = "#999999";
	document.getElementById("webDesign").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
}

//call set
//confirmed connection
function conf(level){
	if (level == 1){
		majorConfidence = 1;
		document.getElementById("fConf").style.color = "#1580ea";
		document.getElementById("fConf").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("uConf").style.color = "#999999";
		document.getElementById("uConf").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	if (level == 0){
		majorConfidence = 0;
		document.getElementById("uConf").style.color = "#1580ea";
		document.getElementById("uConf").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("fConf").style.color = "#999999";
		document.getElementById("fConf").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	engr1();
}

//NOTHING IS SET!
function cProg(level){
	if (level == 1){
		cProgConfidence = 1;
		document.getElementById("fcProg").style.color = "#1580ea";
		document.getElementById("fcProg").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("ucProg").style.color = "#999999";
		document.getElementById("ucProg").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	if (level == 0){
		cProgConfidence = 0;
		document.getElementById("ucProg").style.color = "#1580ea";
		document.getElementById("ucProg").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("fcProg").style.color = "#999999";
		document.getElementById("fcProg").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

function apClick(){
	if (aps == 0){
		document.getElementById("apGrey").style.opacity = "0.0";
		aps = 1;
	} else {
		document.getElementById("apGrey").style.opacity = "1.0";
		aps = 0;
		resetAllAP();
	}
	$("#apSelector").toggle();
}

function ibClick(){
	if (ibs == 0){
		document.getElementById("ibGrey").style.opacity = "0.0";
		ibs = 1;
	} else {
		document.getElementById("ibGrey").style.opacity = "1.0";
		ibs = 0;
		resetAllIB();
	}
	$("#ibSelector").toggle();
}

//I believe this should work once all the functions are in one place
function resetAllAP(){
	document.getElementById("apCalcABGrey").style.opacity = "1.0";
	apcalcabGB = 0;
	apCalcAbScore(0);
	$("#a0").hide();

	document.getElementById("apCalcBCGrey").style.opacity = "1.0";
	apcalcbcGB = 0;
	apCalcBcScore(0);
	$("#b0").hide();
	
	document.getElementById("apChemGrey").style.opacity = "1.0";
	apchemGB = 0;
	apChemScore(0);
	$("#c0").hide();
	
	document.getElementById("apCompSciAGrey").style.opacity = "1.0";
	apcompsciGB = 0;
	apCompSciAScore(0);
	$("#d0").hide();
	
	document.getElementById("apPhysCMechGrey").style.opacity = "1.0";
	apphyscmechGB = 0;
	apPhysCMechScore(0);
	$("#e0").hide();
	
	document.getElementById("apPhysCElecGrey").style.opacity = "1.0";
	apphyscelecGB = 0;
	apPhysCElecScore(0);
	$("#eX0").hide();
	
	document.getElementById("apEnviGrey").style.opacity = "1.0";
	apenviGB = 0;
	apEnviroScore(0);
	$("#f0").hide()
	
	document.getElementById("apGovtGrey").style.opacity = "1.0";
	apgovtGB = 0;
	apGovtScore(0);
	$("#fW0").hide();
	
	document.getElementById("apMacroEconGrey").style.opacity = "1.0";
	apmacroeconGB = 0;
	apMacroEconScore(0);
	$("#fX0").hide();
	
	document.getElementById("apMicroEconGrey").style.opacity = "1.0";
	apmicroeconGB = 0;
	apMicroEconScore(0);
	$("#fY0").hide();
	
	document.getElementById("apPsychologyGrey").style.opacity = "1.0";
	apPsychologyGB = 0;
	apPsychologyScore(0);
	$("#fZ0").hide();
}

//This works, which is why resetAllAP should work once all the functions are in one place
function resetAllIB(){
	document.getElementById("ibChemGrey").style.opacity = "1.0";
	ibchemGB = 0;
	ibChemScore(0);
	$("#g0").hide();
	
	document.getElementById("ibCompSciGrey").style.opacity = "1.0";
	ibcompsciGB = 0;
	ibCompSciScore(0);
	$("#h0").hide();
	
	document.getElementById("ibPhysGrey").style.opacity = "1.0";
	ibphysGB = 0;
	ibPhysScore(0);
	$("#i0").hide();
	
	document.getElementById("ibEconGrey").style.opacity = "1.0";
	ibeconGB = 0;
	ibEconScore(0);
	$("#j0").hide();
}


//the following functions are activated when you click on a test
//they will display/hide the reflective test score picker
function apCalcABClick(){
	if (apcalcabGB == 0){
		document.getElementById("apCalcABGrey").style.opacity = "0.0";
		apcalcabGB = 1;
	} else {
		document.getElementById("apCalcABGrey").style.opacity = "1.0";
		apcalcabGB = 0;
		apCalcAbScore(0);
	}
	$("#a0").toggle();
}

function apCalcBCClick(){
	if (apcalcbcGB == 0){
		document.getElementById("apCalcBCGrey").style.opacity = "0.0";
		apcalcbcGB = 1;
	} else {
		document.getElementById("apCalcBCGrey").style.opacity = "1.0";
		apcalcbcGB = 0;
		apCalcBcScore(0);
	}
	$("#b0").toggle();
}

function apChemClick(){
	if (apchemGB == 0){
		document.getElementById("apChemGrey").style.opacity = "0.0";
		apchemGB = 1;
	} else {
		document.getElementById("apChemGrey").style.opacity = "1.0";
		apchemGB = 0;
		apChemScore(0);
	}
	$("#c0").toggle();
}

function apCompSciAClick(){
	if (apcompsciGB == 0){
		document.getElementById("apCompSciAGrey").style.opacity = "0.0";
		apcompsciGB = 1;
	} else {
		document.getElementById("apCompSciAGrey").style.opacity = "1.0";
		apcompsciGB = 0;
		apCompSciAScore(0);
	}
	$("#d0").toggle();
}

function apPhysCMechClick(){
	if (apphyscmechGB == 0){
		document.getElementById("apPhysCMechGrey").style.opacity = "0.0";
		apphyscmechGB = 1;
	} else {
		document.getElementById("apPhysCMechGrey").style.opacity = "1.0";
		apphyscmechGB = 0;
		apPhysCMechScore(0);
	}
	$("#e0").toggle();
}

function apPhysCElecClick(){
	if (apphyscelecGB == 0){
		document.getElementById("apPhysCElecGrey").style.opacity = "0.0";
		apphyscelecGB = 1;
	} else {
		document.getElementById("apPhysCElecGrey").style.opacity = "1.0";
		apphyscelecGB = 0;
		apPhysCElecScore(0);
	}
	$("#eX0").toggle();
}

function apEnviClick(){
	if (apenviGB == 0){
		document.getElementById("apEnviGrey").style.opacity = "0.0";
		apenviGB = 1;
	} else {
		document.getElementById("apEnviGrey").style.opacity = "1.0";
		apenviGB = 0;
		apEnviroScore(0);
	}
	$("#f0").toggle();
}

function apGovtClick(){
	if (apgovtGB == 0){
		document.getElementById("apGovtGrey").style.opacity = "0.0";
		apgovtGB = 1;
	} else {
		document.getElementById("apGovtGrey").style.opacity = "1.0";
		apgovtGB = 0;
		apGovtScore(0);
	}
	$("#fW0").toggle();
}

function apMacroEconClick(){
	if (apmacroeconGB == 0){
		document.getElementById("apMacroEconGrey").style.opacity = "0.0";
		apmacroeconGB = 1;
	} else {
		document.getElementById("apMacroEconGrey").style.opacity = "1.0";
		apmacroeconGB = 0;
		apMacroEconScore(0);
	}
	$("#fX0").toggle();
}

function apMicroEconClick(){
	if (apmicroeconGB == 0){
		document.getElementById("apMicroEconGrey").style.opacity = "0.0";
		apmicroeconGB = 1;
	} else {
		document.getElementById("apMicroEconGrey").style.opacity = "1.0";
		apmicroeconGB = 0;
		apMicroEconScore(0);
	}
	$("#fY0").toggle();
}

function apPsychologyClick(){
	if (apPsychologyGB == 0){
		document.getElementById("apPsychologyGrey").style.opacity = "0.0";
		apPsychologyGB = 1;
	} else {
		document.getElementById("apPsychologyGrey").style.opacity = "1.0";
		apPsychologyGB = 0;
		apPsychologyScore(0);
	}
	$("#fZ0").toggle();
}

function ibChemClick(){
	if (ibchemGB == 0){
		document.getElementById("ibChemGrey").style.opacity = "0.0";
		ibchemGB = 1;
	} else {
		document.getElementById("ibChemGrey").style.opacity = "1.0";
		ibchemGB = 0;
		ibChemScore(0);
	}
	$("#g0").toggle();
}

function ibCompClick(){
	if (ibcompsciGB == 0){
		document.getElementById("ibCompSciGrey").style.opacity = "0.0";
		ibcompsciGB = 1;
	} else {
		document.getElementById("ibCompSciGrey").style.opacity = "1.0";
		ibcompsciGB = 0;
		ibCompSciScore(0);
	}
	$("#h0").toggle();
}

function ibPhysClick(){
	if (ibphysGB == 0){
		document.getElementById("ibPhysGrey").style.opacity = "0.0";
		ibphysGB = 1;
	} else {
		document.getElementById("ibPhysGrey").style.opacity = "1.0";
		ibphysGB = 0;
		ibPhysScore(0);
	}
	$("#i0").toggle();
}

function ibEconClick(){
	if (ibeconGB == 0){
		document.getElementById("ibEconGrey").style.opacity = "0.0";
		ibeconGB = 1;
	} else {
		document.getElementById("ibEconGrey").style.opacity = "1.0";
		ibeconGB = 0;
		ibEconScore(0);
	}
	$("#j0").toggle();
}

//I've moved the creClick funciton above the score selction section.
//Normally I wouldn't do this, but the score selection is just too damn long
function creClick(level){
	if (level == 1){
		crePF = 1;
		document.getElementById("crePass").style.color = "#1580ea";
		document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("creFail").style.color = "#999999";
		document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	if (level == 0){
		crePF = 0;
		document.getElementById("creFail").style.color = "#1580ea";
		document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("crePass").style.color = "#999999";
		document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

function creReset(){
	//code this baby up son!
	crePF = 0;
	document.getElementById("crePass").style.color = "#999999";
	document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	document.getElementById("creFail").style.color = "#999999";
	document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	CalcFull();
}

//
//
//
//THIS SECTION IS FOR SCORE SELECTION OF TESTS
//THE CODE IS SIMPLE BUT LONG
//SERIOUSLY LIKE WAY TOO LONG

//here's the test score global variables
var q_apCalcAbScore = 0;
var q_apCalcBcScore = 0;
var q_apChemScore = 0;
var q_apCompSciAScore = 0;
var q_apPhysCMechScore = 0;
var q_apPhysCElecScore = 0;
var q_apEnviroScore = 0;
var q_apGovtScore = 0;
var q_apMacroEconScore = 0;
var q_apMicroEconScore = 0;
var q_apPsychologyScore = 0;
var q_ibChemScore = 0;
var q_ibCompSciScore = 0;
var q_ibPhysScore = 0;
var q_ibEconScore = 0;

//call set
function apCalcAbScore(score){
	q_apCalcAbScore = score;
	
	//cre stuff
	if ((score == 4) || (score == 5)){
		$("#creSuper1").hide();
		$("#creSuper2").show();
		creReset();
	} else {
		$("#creSuper1").show();
		$("#creSuper2").hide();
	}
	
	CalcFull();
	
	if (score == 0){
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("a1").style.color = "#1580ea";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("a2").style.color = "#1580ea";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("a3").style.color = "#1580ea";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("a4").style.color = "#1580ea";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("a5").style.color = "#1580ea";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apCalcBcScore(score){
	q_apCalcBcScore = score;
		
	//cre stuff
	if ((score == 3) || (score == 4) || (score == 5)){
		$("#creSuper1").hide();
		$("#creSuper2").show();
		creReset();
	} else {
		$("#creSuper1").show();
		$("#creSuper2").hide();
	}
	
	CalcFull();
	
	if (score == 0){
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("b1").style.color = "#1580ea";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("b2").style.color = "#1580ea";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("b3").style.color = "#1580ea";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("b4").style.color = "#1580ea";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("b5").style.color = "#1580ea";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apChemScore(score){
	q_apChemScore = score;
	
	MathSci();
	
	if (score == 0){
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("c1").style.color = "#1580ea";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("c2").style.color = "#1580ea";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("c3").style.color = "#1580ea";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("c4").style.color = "#1580ea";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("c5").style.color = "#1580ea";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apCompSciAScore(score){
	q_apCompSciAScore = score;
	
	COEN();
	
	if (score == 0){
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("d1").style.color = "#1580ea";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("d2").style.color = "#1580ea";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("d3").style.color = "#1580ea";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("d4").style.color = "#1580ea";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("d5").style.color = "#1580ea";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apPhysCMechScore(score){
	q_apPhysCMechScore = score;
	
	MathSci();
	
	if (score == 0){
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("e1").style.color = "#1580ea";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("e2").style.color = "#1580ea";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("e3").style.color = "#1580ea";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("e4").style.color = "#1580ea";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("e5").style.color = "#1580ea";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apPhysCElecScore(score){
	q_apPhysCElecScore = score;
	
	AddPhys();
	
	if (score == 0){
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("eX1").style.color = "#1580ea";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("eX2").style.color = "#1580ea";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("eX3").style.color = "#1580ea";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("eX4").style.color = "#1580ea";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("eX5").style.color = "#1580ea";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apEnviroScore(score){
	q_apEnviroScore = score;
	
	CalcFull();
	
	if (score == 0){
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("f1").style.color = "#1580ea";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("f2").style.color = "#1580ea";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("f3").style.color = "#1580ea";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("f4").style.color = "#1580ea";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("f5").style.color = "#1580ea";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apGovtScore(score){
	q_apGovtScore = score;
	
	suggest();
	
	if (score == 0){
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("fW1").style.color = "#1580ea";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fW2").style.color = "#1580ea";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fW3").style.color = "#1580ea";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fW4").style.color = "#1580ea";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fW5").style.color = "#1580ea";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apMacroEconScore(score){
	q_apMacroEconScore = score;
	
	suggest();
	
	if (score == 0){
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("fX1").style.color = "#1580ea";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fX2").style.color = "#1580ea";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fX3").style.color = "#1580ea";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fX4").style.color = "#1580ea";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fX5").style.color = "#1580ea";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apMicroEconScore(score){
	q_apMicroEconScore = score;
	
	suggest();
	
	if (score == 0){
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("fY1").style.color = "#1580ea";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fY2").style.color = "#1580ea";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fY3").style.color = "#1580ea";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fY4").style.color = "#1580ea";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fY5").style.color = "#1580ea";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function apPsychologyScore(score){
	q_apPsychologyScore = score;
	
	suggest();
	
	if (score == 0){
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("fZ1").style.color = "#1580ea";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fZ2").style.color = "#1580ea";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fZ3").style.color = "#1580ea";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fZ4").style.color = "#1580ea";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fZ5").style.color = "#1580ea";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
//confirmed variable connection
function ibChemScore(score){
	q_ibChemScore = score;
	
	MathSci();
	
	if (score == 0){
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("g1").style.color = "#1580ea";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("g2").style.color = "#1580ea";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("g3").style.color = "#1580ea";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("g4").style.color = "#1580ea";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("g5").style.color = "#1580ea";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("g6").style.color = "#1580ea";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("g7").style.color = "#1580ea";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
//confirmed variable connection
function ibCompSciScore(score){
	q_ibCompSciScore = score;
	
	COEN();
	
	if (score == 0){
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("h1").style.color = "#1580ea";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("h2").style.color = "#1580ea";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("h3").style.color = "#1580ea";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("h4").style.color = "#1580ea";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("h5").style.color = "#1580ea";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("h6").style.color = "#1580ea";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("h7").style.color = "#1580ea";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//for web design only
//has no logic connections currently
//so it's good
function ibPhysScore(score){
	q_ibPhysScore = score;
	
	if (score == 0){
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("i1").style.color = "#1580ea";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("i2").style.color = "#1580ea";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("i3").style.color = "#1580ea";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("i4").style.color = "#1580ea";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("i5").style.color = "#1580ea";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("i6").style.color = "#1580ea";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("i7").style.color = "#1580ea";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}

//call set
function ibEconScore(score){
	q_ibEconScore = score;
	
	suggest();
	
	if (score == 0){
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("j1").style.color = "#1580ea";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("j2").style.color = "#1580ea";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("j3").style.color = "#1580ea";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("j4").style.color = "#1580ea";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("j5").style.color = "#1580ea";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("j6").style.color = "#1580ea";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("j7").style.color = "#1580ea";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Bold, Arial, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, Arial, sans-serif";
	}
}



//Beyond this point is logic functions


