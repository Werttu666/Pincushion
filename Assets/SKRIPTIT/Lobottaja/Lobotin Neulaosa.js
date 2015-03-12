
var voiVoittaa = 0;

var eiVoiVoittaa = 0;

var myAnim : Animator;

function Update () {


	var alas = 0;
	
	if (Input.GetKey ("space")){
		alas = 1;
	}
	else {
		alas = 0;
	}
	
	var ylos = 0;
	
	if (Input.GetKey(KeyCode.LeftControl)){
		ylos = -1;
	}
	else {
		ylos = 0;
	}
	
	player = GameObject.FindGameObjectWithTag("Player").transform;
	
	dist = Vector3.Distance(player.position, transform.position);
	
	if(dist <= 0.8){
		myAnim.SetBool("Pelottaa",true);
	}
	
	rigidbody.velocity = Vector3(0,(ylos+alas)*Time.deltaTime*10,0);
	
	rigidbody.position.y = Mathf.Clamp(rigidbody.position.y,-0.85,-0.5);
}

function OnTriggerEnter (other:Collider){
	
}