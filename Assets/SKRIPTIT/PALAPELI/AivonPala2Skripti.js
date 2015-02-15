

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina2"){
		AivoSkripti.aivoPala02paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina1" || other.gameObject.name == "Paloina14" ||other.gameObject.name == "Paloina5"||other.gameObject.name == "Paloina3"){
		AivoSkripti.collisioi02 = 1;
	}
	else{
		AivoSkripti.collisioi02 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina2"){
		AivoSkripti.aivoPala02paikalla = 0;
		print("Pala pois");
	}
}