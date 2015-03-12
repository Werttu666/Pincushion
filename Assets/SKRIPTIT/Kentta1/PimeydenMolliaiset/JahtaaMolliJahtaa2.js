
function OnTriggerEnter (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		PimeydenMolliainen2.lahdePeraan2 = 1;
	}
}