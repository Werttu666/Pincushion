

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina0"){
		AivoSkripti.aivoPala00paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina1" || other.gameObject.name == "Paloina9" ||other.gameObject.name == "Paloina10"){
		AivoSkripti.collisioi00 = 1;
	}
	else{
		AivoSkripti.collisioi00 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina0"){
		AivoSkripti.aivoPala00paikalla = 0;
		print("Pala pois");
	}
}