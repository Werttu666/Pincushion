

function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "Paloina6"){
		AivoSkripti.aivoPala06paikalla = 1;
		print("Pala paikallaan");
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "AIVO_Reuna_Kollisio" || other.gameObject.name == "Paloina13" || other.gameObject.name == "Paloina12" ||other.gameObject.name == "Paloina4"){
		AivoSkripti.collisioi06 = 1;
	}
	else{
		AivoSkripti.collisioi06 = 0;
	}
}

function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina6"){
		AivoSkripti.aivoPala06paikalla = 0;
		print("Pala pois");
	}
}