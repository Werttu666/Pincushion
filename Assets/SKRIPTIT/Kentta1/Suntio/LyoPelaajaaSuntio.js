
function OnTriggerEnter (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		Suntio.lyo = 1;
		print("lyo");
	}
}
function OnTriggerExit (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		Suntio.lyo = 0;
	}
}