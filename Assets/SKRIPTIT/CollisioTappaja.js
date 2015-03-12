
function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "NeulaTyyny" ){
		Application.LoadLevel ("Kentta1");
	}
}