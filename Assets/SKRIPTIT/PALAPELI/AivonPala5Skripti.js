

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina5"){
		AivoSkripti.aivoPala05paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina2" || other.gameObject.name == "Paloina7" ||other.gameObject.name == "Paloina14"){
		AivoSkripti.collisioi05 = 1;
	}
	else{
		AivoSkripti.collisioi05 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina5"){
		AivoSkripti.aivoPala05paikalla = 0;
		print("Pala pois");
	}
}