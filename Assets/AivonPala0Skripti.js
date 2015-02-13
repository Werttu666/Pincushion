
function OnTriggerStay2D (other:Collider2D){
	if (other.gameObject.name == "Paloina0"){
		AivoSkripti.aivoPala00paikalla = 1;
		print("Pala paikallaan"); 
	}
	else{
		AivoSkripti.aivoPala00paikalla = 0;
		print("Pala pois");
	}
}
function OnTriggerExit2D (other:Collider2D){
	if (other.gameObject.name == "Paloina0"){
		AivoSkripti.aivoPala00paikalla = 0;
		print("Pala pois");
	}
}