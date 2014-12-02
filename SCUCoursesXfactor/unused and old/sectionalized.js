//This JavaScript file is to be merged with frontScript.js
//It has been made only for ease of programming
//This code is for the COEN major only!  Will not work with web design
//Code for this file has been gathered from SCUCoursesTrial4 -> jamesOnly.js

//NEED TO RUN THESE FUNCTIONS ON LOAD:
/*
	CTW();
	COEN();
	CalcFull();
	SciCred()
	addCI();
	engr1();
*/
//BE SURE TO ADD THEM IN


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

//done I believe
//no connections necessary
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

//needs to be called by transfer classes
//transfer commented out for now
function MathSci(){
	CalcFull();
	SciCred();
	COEN();	
}

//calcFull needs transfer system optimization
//transfer commented out for now
function CalcFull(){
	//set the scores
	var APCalcScoreAB = q_apCalcAbScore;
	var APCalcScoreBC = q_apCalcBcScore;
	var APChem = q_apChemScore;
	var APEnvSci = q_apEnviroScore;
	
	//other variables
	var start;
	var natSci = 0;
	
	//THIS SECTION NEEDS TO BE FIXED WITH NEW TRANSFER SYSTEM
	//checkbox settings stuff
	/*
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
	*/
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
  	/*
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
	*/
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
//transfer commented out for now
//Test connection confirmed
function AddPhys(){

	removeCore();
	
	//this is for AP Physics C Electrical & Magnets or whatever
	var phycsEM = q_apPhysCElecScore;
	
	//TRANSFER SYSTEM UPDATED NEEDED
	/*
	var phys33 = document.getElementById("check14").checked;
	*/
	var phys33 = false; //Delete this after transfer implemenation
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

//looks good
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
//transfer commented out for now
function COEN(){
	//set test scores
	var APCompSci = q_apCompSciAScore;
	var IBCompSci = q_ibCompSciScore;
	
  	//TRANSFER CREDIT SECTION
  	//NEEDS UPDATE
  	/*
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
	*/
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

//call when transfer for COEN 19 is activated/deactivated
//transfer commented out for now
function CTW(){
	var transfer19 = 0; // have they trnasfered out of COEN19
	
	//TRANSFER SECTION
	//replace this with transfer system
	/*
	var coen19 = document.getElementById("check8").checked;	
	if (coen19 == true){
		transfer19 = 1;
	}
	*/
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

//looks good
//no transfer needed
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

//looks good and is called
//no transfer needed
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

//looks good I think
//no transfer needed
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

function build(){
	document.getElementById("rowA1").backgroundImage = buildToImage(Fall[0]);
	document.getElementById("rowB1").backgroundImage = buildToImage(Fall[1]);
	document.getElementById("rowC1").backgroundImage = buildToImage(Fall[2]);
	document.getElementById("rowD1").backgroundImage = buildToImage(Fall[3]);
	document.getElementById("rowE1").backgroundImage = buildToImage(Fall[4]);
	document.getElementById("rowA2").backgroundImage = buildToImage(Winter[0]);
	document.getElementById("rowB2").backgroundImage = buildToImage(Winter[1]);
	document.getElementById("rowC2").backgroundImage = buildToImage(Winter[2]);
	document.getElementById("rowD2").backgroundImage = buildToImage(Winter[3]);
	document.getElementById("rowE2").backgroundImage = buildToImage(Winter[4]);
	document.getElementById("rowA3").backgroundImage = buildToImage(Spring[0]);
	document.getElementById("rowB3").backgroundImage = buildToImage(Spring[1]);
	document.getElementById("rowC3").backgroundImage = buildToImage(Spring[2]);
	document.getElementById("rowD3").backgroundImage = buildToImage(Spring[3]);
}

//this function translates logic array notation into variables containing the image urls
function buildToImage(passer){
	//pairs image url with variables
	var amth106PNG = "url('amth106.png')";
	var amth108PNG = "url('amth108.png')";
	var BLANKPNG = "url('BLANK.png')";
	var chem11PNG = "url('chem11.png')";
	var coen10PNG = "url('coen10.png')";
	var coen11PNG = "url('coen11.png')";
	var coen12PNG = "url('coen12.png')";
	var coen19PNG = "url('coen19.png')";
	var core = "url('core.png')";
	var ctw1PNG = "url('ctw1.png')";
	var ctw2PNG = "url('ctw2.png')";
	var engr1PNG = "url('engr1.png')";
	var math9PNG = "url('math9.png')";
	var math11PNG = "url('math11.png')";
	var math12PNG = "url('math12.png')";
	var math13PNG = "url('math13.png')";
	var math14PNG = "url('math14.png')";
	var math53PNG = "url('math53.png')";
	var phys31PNG = "url('phys31.png')";
	var phys32PNG = "url('phys32.png')";
	var ci1PNG = "url('core/ci1.png')";
	var ci2PNG = "url('core/ci2.png')";
	var ci3PNG = "url('core/ci3.png')";
	var diversityPNG = "url('core/diversity.png')";
	var elsjPNG = "url('core/elsj.png')";
	var ethicsPNG = "url('core/ethics.png')";
	var rtc1PNG = "url('core/rtc1.png')";
	var rtc2PNG = "url('core/rtc2.png')";
	var rtc3PNG = "url('core/rtc3.png')";
	var seeAdvisorPNG = "url('core/seeAdvisor.png')";
	var socSciPNG = "url('core/socSci.png')";
	
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