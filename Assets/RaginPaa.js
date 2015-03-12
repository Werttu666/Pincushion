
function Update(){
	target = gameObject.FindWithTag("PaaHaa").transform;
	transform.LookAt(target);
}
