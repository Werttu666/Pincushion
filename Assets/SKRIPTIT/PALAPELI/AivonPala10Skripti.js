

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina10"){
		AivoSkripti.aivoPala10paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina0" || other.gameObject.name == "Paloina9" ||other.gameObject.name == "Paloina8"){
		AivoSkripti.collisioi10 = 1;
	}
	else{
		AivoSkripti.collisioi10 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina10"){
		AivoSkripti.aivoPala10paikalla = 0;
		print("Pala pois");
	}
}