

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina14"){
		AivoSkripti.aivoPala14paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina11" || other.gameObject.name == "Paloina7" ||other.gameObject.name == "Paloina5"||other.gameObject.name == "Paloina2"||other.gameObject.name == "Paloina1"||other.gameObject.name == "Paloina9"||other.gameObject.name == "Paloina8"){
		AivoSkripti.collisioi14 = 1;
	}
	else{
		AivoSkripti.collisioi14 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina14"){
		AivoSkripti.aivoPala14paikalla = 0;
		print("Pala pois");
	}
}