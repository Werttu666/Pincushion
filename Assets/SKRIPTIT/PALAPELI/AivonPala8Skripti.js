

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina8"){
		AivoSkripti.aivoPala08paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina11" || other.gameObject.name == "Paloina9" ||other.gameObject.name == "Paloina10"||other.gameObject.name == "Paloina14"){
		AivoSkripti.collisioi08 = 1;
	}
	else{
		AivoSkripti.collisioi08 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina8"){
		AivoSkripti.aivoPala08paikalla = 0;
		print("Pala pois");
	}
}