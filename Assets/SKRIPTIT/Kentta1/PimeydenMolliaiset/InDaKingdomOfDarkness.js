
function OnTriggerStay (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		PimeydenMolliainen.pimeydessa = 1;
	}
}

function OnTriggerExit (other:Collider) {
	if(other.gameObject.name == "PelaajanDetektori3D"){
		PimeydenMolliainen.pimeydessa = 0;
		PimeydenMolliainen.lahdePeraan1 = 0;
		PimeydenMolliainen2.lahdePeraan2 = 0;
		PimeydenMolliainen3.lahdePeraan3 = 0;
		PimeydenMolliainen4.lahdePeraan4 = 0;
	}
}