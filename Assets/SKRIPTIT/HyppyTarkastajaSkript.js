function Start() {
	pelaaja = GameObject.FindGameObjectsWithTag ("Player");
	Physics2D.IgnoreCollision(pelaaja.collider2D, collider2D);
}

function OnTriggerEnter2D (other : Collider2D) {
	print ("kosket maahan");
	TYYNY2D.tiput = 0;
}

function OnTriggerStay2D (other : Collider2D) {
	TYYNY2D.voiHypata = 1;
	TYYNY2D.tiput = 0;
}

function OnTriggerExit2D (other : Collider2D) {
	TYYNY2D.voiHypata = 0;
	TYYNY2D.tiput = 1;
}