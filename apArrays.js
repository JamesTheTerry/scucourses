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

function Chem(APScore, IBScore){
	if(APScore > 2 || IBScore > 5){
		sci[0] = replace;
	}
	for(var i = 0; i < 3; i++){
			writeln(sci[i]);
	}
}

function Phys(CScore){
	if(CScore > 3){
		sci[1] = replace;
	}
	for(var i = 0; i < 3; i++){
			writeln(sci[i]);
	}
}