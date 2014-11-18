//alpha.js
//This is the combined script of frontScript.js and sectionalized.js
//If this works, the other files will be redundant (and unused)
//I sure hope this works


//
//BEGIN frontScript.js SECTION
//


$(document).ready(function(){
	CTW();
	COEN();
	CalcFull();
	SciCred()
	addCI();
	engr1();
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
	COEN();
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
	CalcFull();
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


//
//END OF frontScript.js SECTION
//


//the possible courses
var math1 = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 106", "AMTH 108", "MATH 53", "CORE"];
var math2 = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 108", "MATH 53", "CORE"];
var coen1 = ["COEN 10", "COEN 11", "CORE", "CORE"];
var coen2 = "COEN 12";
var sci = [ "CHEM 11", "PHYS 31", "PHYS 32"];
var core = ["CTW1", "CTW2", "COEN 19"];
var coreS = ["RTC1", "SocSci", "RTC2", "Diversity", "RTC3", "CI3", "ELSJ", "Ethics","SeeAdvisor", "CI1", "CI2"];
var replace = "CORE";

//whats curently in the aray
var Fall = [];
var Winter = [];
var Spring = [];

//gold
function removeCore(){
	
	for (i=0; i<4; i++){
		for(j=0; j<11; j++){
			if (Fall[i] == coreS[j]){
				Fall[i] = "CORE";
			}
			if (Winter[i] == coreS[j]){
				Winter[i] = "CORE";
			}
			if (Spring[i] == coreS[j]){
				Spring[i] = "CORE";
			}
		}
	}
}

//gold
function MathSci(){
	CalcFull();
	SciCred();
	COEN();	
}

//calcFull needs transfer system optimization
function CalcFull(){
	//set the scores
	var APCalcScoreAB = q_apCalcAbScore;
	var APCalcScoreBC = q_apCalcBcScore;
	var APEnvSci = q_apEnviroScore;
	
	//other variables
	var start;
	var natSci = 0;
	
	//THIS SECTION NEEDS TO BE FIXED WITH NEW TRANSFER SYSTEM
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
	
	//END SECTION
	
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
	} else if (crePF == 1) {
		start = 1;
	} else {
		start = 0;
	}
	
	if(APEnvSci > 3){
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
	
	Fall[0] = Fall0;
	Winter[0] = Winter0;
	Spring[0] = Spring0;
	
	addCI();
	suggest();
	build();
}

//SciCred needs transfer system optimization
//transfer commented out for now
function SciCred(){
	//set test scores
	var APChem = q_apChemScore;
	var APphysics = q_apPhysCMechScore;
	var IBChem = q_ibChemScore;
	
	//other variables
	var Transfer32 = 0;
  	
  	//TRANSFER CREDIT SECTION
  	//NEEDS UPDATE
  	
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
	//END SECTION
	
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
	//ask custumer about 32 also replaceing 31
		Spring2 = replace;
	} else{
		Spring2 = sci[2];
	}
	
	Fall[2] = Fall2;
	Winter[2] = Winter2;
	Spring[2] = Spring2;
	
	AddPhys();//adds Phys 33 if appropriate
	addCI();
	suggest();
	build();
}

//needs transfer system update
function AddPhys(){

	removeCore();
	
	//this is for AP Physics C Electrical & Magnets or whatever
	var phycsEM = q_apPhysCElecScore;
	
	//TRANSFER SYSTEM UPDATED NEEDED
	var phys33 = document.getElementById("check14").checked;
	
	//var phys33 = false; //Delete this after transfer implemenation
	//END TRANSFER SECTION
	
	
	var SciExemp = [];
	SciExemp[0] = Fall[2];
	SciExemp[1] = Winter[2];
	SciExemp[2] = Spring[2];
	
	var i;
	var flag = 0;
	
	//get value from Phys E&M test score
	
	if (phys33 == true){
		phycsEM = 5;
	}  	  	  
	
	for (i=0;i<3;i++){
		if (SciExemp[i] == "CORE"){
			flag++;
		}
	}
	if(flag == 3){
		if(phycsEM > 3){
			Fall[2] = replace;
		} else{
			Fall[2] = "PHYS 33";
		}
	}
}

//gold
function MoveCoen(){

	removeCore();
	
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
		Winter[1] = coen2;
		Spring[1] = replace;
		return;
	}
	
	for (i=0;i<4;i++){
		if (Fall[i] == "CORE"){
			flagF++;
		} else if(Fall[i] == "CTW1" || Fall[i] == "CTW2" ){
			flagF++;
		}

	}
	
	if( flagF > 2){
		//move COEN 12 the winter if more than 2 CORE is Winter
		Fall[1] = coen2;
		Spring[1] = replace;
	}	
}

//COEN needs transfer system optimization
function COEN(){
	//set test scores
	var APCompSci = q_apCompSciAScore;
	var IBCompSci = q_ibCompSciScore;
	
  	//TRANSFER CREDIT SECTION
  	//NEEDS UPDATE
  	var coen10 = document.getElementById("check5").checked;
	var coen11 = document.getElementById("check6").checked;
	var coen12 = document.getElementById("check7").checked;
	
	//not part of transfer
	if ((cProgConfidence == 1) && APCompSci < 3){
		APCompSci = 3;
	}
	
	
	if (coen10 == true  && APCompSci < 3){
		APCompSci = 3;
	}
	if (coen11 == true){
		APCompSci = 5;
	}
	if (coen12 == true){
		APCompSci = 6;
	}
	//END SECTION
	
	
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
	
	Fall[1] = Fall1;
	Winter[1] = Winter1;
	Spring[1] = Spring1;
	
	if(APCompSci < 6){
		//Move COEN12 to a different quarter
		MoveCoen();
	}
	
	addCI();
	suggest();
	build();
}

//needs transfer system update
function CTW(){
	var transfer19 = 0; // have they trnasfered out of COEN19
	
	//TRANSFER SECTION
	//replace this with transfer system
	var coen19 = document.getElementById("check8").checked;	
	if (coen19 == true){
		transfer19 = 1;
	}
	//END TRANSFER SECTION
	
	var Fall3 = core[0];
	var Winter3 = core[1];
	
	if(transfer19){
		var Spring3 = replace;
	} else{
		var Spring3 = core[2];
	}
	
	Fall[3] = Fall3;
	Winter[3] = Winter3;
	Spring[3] = Spring3;
	
	addCI();
	suggest();
	build();
}

//gold
function addCI(){
	
	removeCore();

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
				Winter[0] = "CI2";
			} else if (flag == 1) {
				Winter[1] = "CI2";
			} else if (flag == 2) {
				Winter[2] = "CI2";
			} else if (flag == 3) {
				Winter[3] = "CI2";
			}
			
			if (i == 0){
				Fall[0] = "CI1";
			} else if (i == 1) {
				Fall[1] = "CI1";
			} else if (i == 2) {
				Fall[2] = "CI1";
			} else if (i == 3) {
				Fall[3] = "CI1";
			}
			
			return;			
		}
	}	
	for (i=0;i<4;i++){
		if (Spring[i] == "CORE"){
			Spring[i]= "CI2";//this needs to change the class in the matrix
			Winter[flag] = "CI1";//this needs to change the class in the matrix
			
			if (flag == 0){
				Winter[0] = "CI1";
			} else if (flag == 1) {
				Winter[1] = "CI1";
			} else if (flag == 2) {
				Winter[2] = "CI1";
			} else if (flag == 3) {
				Winter[3] = "CI1";
			}
			
			if (i == 0){
				Spring[0] = "CI2";
			} else if (i == 1) {
				Spring[1] = "CI2";
			} else if (i == 2) {
				Spring[2] = "CI2";
			} else if (i == 3) {
				Spring[3] = "CI2";
			}
			
			return;			
		}
	}
}

//gold
function engr1(){	
	var x = majorConfidence;
	
	if (x == true){
		Winter[4] = "ENGR 1";
		Fall[4] = "";
	} else{
		Fall[4] = "ENGR 1";
		Winter[4] = "";
	}
	build();

}

//gold
function suggest(){

	removeCore();
	addCI();

	var coreCred = [];
	var coreCount = 0;
	var i;
	
	var GovAP = q_apGovtScore;
	var MacroAP = q_apMacroEconScore;
	var MicroAP = q_apMicroEconScore;
	var PsychAP = q_apPsychologyScore;
	var EconIB = q_ibEconScore;
	
	for(i=0; i<11; i++){
		coreCred[i] = 0;
	}
	
	if(GovAP > 3 || MacroAP > 3 || MicroAP > 3 || PsychAP > 3 || EconIB > 5){
		coreCred[1] = 1;
	} else{
		coreCred[1] = 0;
	}
	
	for (i=0; i<4; i++){
		if(coreCred[coreCount]){
			coreCount++;
		}
		if (Fall[i] == "CORE"){
			Fall[i] = coreS[coreCount];
			coreCount++;
		}
	}
	for (i=0; i<4; i++){
		if(coreCred[coreCount]){
			coreCount++;
		}
		if (Winter[i] == "CORE"){
			Winter[i] = coreS[coreCount];
			coreCount++;
		}
	}
	for (i=0; i<4; i++){
		if(coreCred[coreCount]){
			coreCount++;
		}
		if (Spring[i] == "CORE"){
			Spring[i] = coreS[coreCount];
			coreCount++;
		}
	}

	
}


//builds the table you see on screen
function build(){
	document.getElementById("rowA1").style.backgroundImage = buildToImage(Fall[0]);
	document.getElementById("rowB1").style.backgroundImage = buildToImage(Fall[1]);
	document.getElementById("rowC1").style.backgroundImage = buildToImage(Fall[2]);
	document.getElementById("rowD1").style.backgroundImage = buildToImage(Fall[3]);
	document.getElementById("rowE1").style.backgroundImage = buildToImage(Fall[4]);
	document.getElementById("rowA2").style.backgroundImage = buildToImage(Winter[0]);
	document.getElementById("rowB2").style.backgroundImage = buildToImage(Winter[1]);
	document.getElementById("rowC2").style.backgroundImage = buildToImage(Winter[2]);
	document.getElementById("rowD2").style.backgroundImage = buildToImage(Winter[3]);
	document.getElementById("rowE2").style.backgroundImage = buildToImage(Winter[4]);
	document.getElementById("rowA3").style.backgroundImage = buildToImage(Spring[0]);
	document.getElementById("rowB3").style.backgroundImage = buildToImage(Spring[1]);
	document.getElementById("rowC3").style.backgroundImage = buildToImage(Spring[2]);
	document.getElementById("rowD3").style.backgroundImage = buildToImage(Spring[3]);
}

//this function translates logic array notation into variables containing the image urls
function buildToImage(passer){
	//pairs image url with variables
	var amth106PNG = "url('images/classes/amth106.png')";
	var amth108PNG = "url('images/classes/amth108.png')";
	var BLANKPNG = "url('images/classes/BLANK.png')";
	var chem11PNG = "url('images/classes/chem11.png')";
	var coen10PNG = "url('images/classes/coen10.png')";
	var coen11PNG = "url('images/classes/coen11.png')";
	var coen12PNG = "url('images/classes/coen12.png')";
	var coen19PNG = "url('images/classes/coen19.png')";
	var core = "url('images/classes/core.png')";
	var ctw1PNG = "url('images/classes/ctw1.png')";
	var ctw2PNG = "url('images/classes/ctw2.png')";
	var engr1PNG = "url('images/classes/engr1.png')";
	var math9PNG = "url('images/classes/math9.png')";
	var math11PNG = "url('images/classes/math11.png')";
	var math12PNG = "url('images/classes/math12.png')";
	var math13PNG = "url('images/classes/math13.png')";
	var math14PNG = "url('images/classes/math14.png')";
	var math53PNG = "url('images/classes/math53.png')";
	var phys31PNG = "url('images/classes/phys31.png')";
	var phys32PNG = "url('images/classes/phys32.png')";
	var ci1PNG = "url('images/classes/core/ci1.png')";
	var ci2PNG = "url('images/classes/core/ci2.png')";
	var ci3PNG = "url('images/classes/core/ci3.png')";
	var diversityPNG = "url('images/classes/core/diversity.png')";
	var elsjPNG = "url('images/classes/core/elsj.png')";
	var ethicsPNG = "url('images/classes/core/ethics.png')";
	var rtc1PNG = "url('images/classes/core/rtc1.png')";
	var rtc2PNG = "url('images/classes/core/rtc2.png')";
	var rtc3PNG = "url('images/classes/core/rtc3.png')";
	var seeAdvisorPNG = "url('images/classes/core/seeAdvisor.png')";
	var socSciPNG = "url('images/classes/core/socSci.png')";
	
	//set logic array notation to variables with urls
	if (passer == "AMTH 106"){
		return amth106PNG;
	}
	if (passer == "AMTH 108"){
		return amth108PNG;
	}
	if (passer == ""){
		return BLANKPNG;
	}
	if (passer == "CHEM 11"){
		return chem11PNG;
	}
	if (passer == "COEN 10"){
		return coen10PNG;
	}
	if (passer == "COEN 11"){
		return coen11PNG;
	}
	if (passer == "COEN 12"){
		return coen12PNG;
	}
	if (passer == "COEN 19"){
		return coen19PNG;
	}
	if (passer == "CORE"){
		return core;
	}
	if (passer == "CTW1"){
		return ctw1PNG;
	}
	if (passer == "CTW2"){
		return ctw2PNG;
	}
	if (passer == "ENGR 1"){
		return engr1PNG;
	}
	if (passer == "MATH 9"){
		return math9PNG;
	}
	if (passer == "MATH 11"){
		return math11PNG;
	}
	if (passer == "MATH 12"){
		return math12PNG;
	}
	if (passer == "MATH 13"){
		return math13PNG;
	}
	if (passer == "MATH 14"){
		return math14PNG;
	}
	if (passer == "MATH 53"){
		return math53PNG;
	}
	if (passer == "PHYS 31"){
		return phys31PNG;
	}
	if (passer == "PHYS 32"){
		return phys32PNG;
	}
	if (passer == "CI1"){
		return ci1PNG;
	}
	if (passer == "CI2"){
		return ci2PNG;
	}
	if (passer == "CI3"){
		return ci3PNG;
	}
	if (passer == "Diversity"){
		return diversityPNG;
	}
	if (passer == "ELSJ"){
		return elsjPNG;
	}
	if (passer == "Ethics"){
		return ethicsPNG;
	}
	if (passer == "RTC1"){
		return rtc1PNG;
	}
	if (passer == "RTC2"){
		return rtc2PNG;
	}
	if (passer == "RTC3"){
		return rtc3PNG;
	}
	if (passer == "SeeAdvisor"){
		return seeAdvisorPNG;
	}
	if (passer == "SocSci"){
		return socSciPNG;
	}
}