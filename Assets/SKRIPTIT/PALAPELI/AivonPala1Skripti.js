

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina1"){
		AivoSkripti.aivoPala01paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina0" || other.gameObject.name == "Paloina9" ||other.gameObject.name == "Paloina14"||other.gameObject.name == "Paloina2"){
		AivoSkripti.collisioi01 = 1;
	}
	else{
		AivoSkripti.collisioi01 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina1"){
		AivoSkripti.aivoPala01paikalla = 0;
		print("Pala pois");
	}
}