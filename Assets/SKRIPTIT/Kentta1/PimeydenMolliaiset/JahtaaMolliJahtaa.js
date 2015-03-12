
function OnTriggerEnter (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		PimeydenMolliainen.lahdePeraan1 = 1;
	}
}