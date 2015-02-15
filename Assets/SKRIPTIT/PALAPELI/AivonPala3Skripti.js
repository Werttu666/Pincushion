

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina3"){
		AivoSkripti.aivoPala03paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina7" || other.gameObject.name == "Paloina5" ||other.gameObject.name == "Paloina2"||other.gameObject.name == "Paloina4"||other.gameObject.name == "Paloina6"){
		AivoSkripti.collisioi03 = 1;
	}
	else{
		AivoSkripti.collisioi03 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina3"){
		AivoSkripti.aivoPala03paikalla = 0;
		print("Pala pois");
	}
}