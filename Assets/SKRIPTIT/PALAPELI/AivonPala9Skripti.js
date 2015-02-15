

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina9"){
		AivoSkripti.aivoPala09paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina1" || other.gameObject.name == "Paloina8" ||other.gameObject.name == "Paloina10"||other.gameObject.name == "Paloina14"||other.gameObject.name == "Paloina0"){
		AivoSkripti.collisioi09 = 1;
	}
	else{
		AivoSkripti.collisioi09 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina9"){
		AivoSkripti.aivoPala09paikalla = 0;
		print("Pala pois");
	}
}