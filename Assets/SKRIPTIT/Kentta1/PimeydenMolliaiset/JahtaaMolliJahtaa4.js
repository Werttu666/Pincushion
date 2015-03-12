
function OnTriggerEnter (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		PimeydenMolliainen4.lahdePeraan4 = 1;
	}
}