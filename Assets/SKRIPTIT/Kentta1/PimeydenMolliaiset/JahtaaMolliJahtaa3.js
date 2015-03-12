
function OnTriggerEnter (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		PimeydenMolliainen3.lahdePeraan3 = 1;
	}
}