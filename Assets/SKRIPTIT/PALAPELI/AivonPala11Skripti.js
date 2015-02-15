

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina11"){
		AivoSkripti.aivoPala11paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina12" || other.gameObject.name == "Paloina7" ||other.gameObject.name == "Paloina14"||other.gameObject.name == "Paloina8"){
		AivoSkripti.collisioi11 = 1;
	}
	else{
		AivoSkripti.collisioi11 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina11"){
		AivoSkripti.aivoPala11paikalla = 0;
		print("Pala pois");
	}
}