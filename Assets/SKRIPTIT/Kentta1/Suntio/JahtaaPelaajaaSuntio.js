
function OnTriggerEnter (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		Suntio.jahtaa = 1;
		print("havaittu");
	}
}