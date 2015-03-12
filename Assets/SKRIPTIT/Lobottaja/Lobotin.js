
function Update () {
	var hor = Input.GetAxis("Horizontal");
	var ver = Input.GetAxis("Vertical");
	transform.Translate(hor*Time.deltaTime*1,0,ver*Time.deltaTime*1);
	
	transform.position.x = Mathf.Clamp(transform.position.x,3.09,3.6);
	transform.position.z = Mathf.Clamp(transform.position.z,-1.4,-1.12);
}