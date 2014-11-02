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
	for(var i = start; i < (start+3); i++){
			writeln(math[i]);
	
	}
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
	for(var i = start; i < (start+3); i++){
			writeln(math[i]);
	
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

function COEN(){
	//these will be the input variables
	//set these it be the test scores
	var APCompSci ;
	var IBCompSci ;
	
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
	return;
}

function CTW(){
	//these are the variables that go into the matrix
	var Fall3 = core[0];
	var Winter3 = core[1];
	var Spring3 = core[2];
	return;
}