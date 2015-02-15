

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina12"){
		AivoSkripti.aivoPala12paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina13" || other.gameObject.name == "Paloina6" ||other.gameObject.name == "Paloina4"||other.gameObject.name == "Paloina7"||other.gameObject.name == "Paloina11"){
		AivoSkripti.collisioi12 = 1;
	}
	else{
		AivoSkripti.collisioi12 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina12"){
		AivoSkripti.aivoPala12paikalla = 0;
		print("Pala pois");
	}
}