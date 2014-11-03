var math = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 106"];
var coen = ["COEN 10", "COEN 11", "COEN 12", "CORE", "CORE"];
var sci = [ "CHEM 11", "PHYS 31", "PHYS 32"];
var core = ["CTW 1", "CTW 2", "COEN 19"];
var replace = "CORE";

function CalcAB( ABScore, CRE ){
	if(ABScore > 3){
		var start = 2;
		}
	else{
		if(CRE){
			start = 1;
		}
		else{
			start = 0;
		}
	}
	Fall0 = math[start];
	Winter0 = math[start+1];
	Spring0 = math[start=2];
}

function CalcBC( BCScore, CRE ){
	if(BCScore > 3){
		start = 3;
		}
	else if(BCScore == 3){
		start = 2;
	}
	else{
		if(CRE){
			start = 1;
		}
		else{
			start = 0;
		}
	}
	Fall0 = math[start];
	Winter0 = math[start+1];
	Spring0 = math[start=2];
	}

}

function APcalc( ABScore, BCScore, CRE ){
	if(BCScore >= 3){
		CalcBC( BCScore, CRE );
	}
	else{
		CalcAB( ABScore, CRE );
	}
}

function SciCred(APScore, IBScore, CScore){
	if(APScore > 2 || IBScore > 5){
		Fall2 = replace;
	}
	else{
		Fall2 = sci[0];
	}
	if(CScore > 3){
		Winter2 = replace;
	}
	else{
		Winter2 = sci[1];
	}
	Spring2 = sci[2];
}


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
	
	
	//these will be the output variables, these are the classes that go in the matrix
	var Fall1;
	var Winter1;
	var Spring1;
	
	if (APCompSci < 3 || IBCompSci < 6 ||(APCompSci == NA && IBCompSci == NA )){
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
	
}

function CTW(){
	var Fall3 = core[0];
	var Winter3 = core[1];
	var Spring3 = core[2];
	return;
}

function addCI(){
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