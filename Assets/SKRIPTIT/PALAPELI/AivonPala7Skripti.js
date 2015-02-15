

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina7"){
		AivoSkripti.aivoPala07paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina3" || other.gameObject.name == "Paloina4" ||other.gameObject.name == "Paloina12"||other.gameObject.name == "Paloina11"||other.gameObject.name == "Paloina5"){
		AivoSkripti.collisioi07 = 1;
	}
	else{
		AivoSkripti.collisioi07 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina7"){
		AivoSkripti.aivoPala07paikalla = 0;
		print("Pala pois");
	}
}