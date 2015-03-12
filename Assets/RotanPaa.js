
function Update(){
	target = gameObject.FindWithTag("Player").transform;
	transform.LookAt(target);
}
