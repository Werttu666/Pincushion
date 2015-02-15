

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina4"){
		AivoSkripti.aivoPala04paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina6" || other.gameObject.name == "Paloina12" ||other.gameObject.name == "Paloina7"||other.gameObject.name == "Paloina3"){
		AivoSkripti.collisioi04 = 1;
	}
	else{
		AivoSkripti.collisioi04 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina4"){
		AivoSkripti.aivoPala04paikalla = 0;
		print("Pala pois");
	}
}