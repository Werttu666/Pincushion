static var pimeydessa = 0;
static var lahdePeraan1 = 0;
var saaLiikkua = 0;

function Start() {
	pimeydessa = 0;
	lahdePeraan1 = 0;
}

function Update () {

	target = gameObject.Find("NeulaTyyny").transform;
	
	if(target.rigidbody2D.velocity.magnitude > 0.5) {
		saaLiikkua = 1;
	}
	else {
		saaLiikkua = 0;
	}

	if(pimeydessa == 1 && lahdePeraan1 == 1){
		rigidbody2D.velocity = (target.position - transform.position) * saaLiikkua * 100 * Time.deltaTime;
	
		//rigidbody2D.AddForce((target.position - transform.position)* 5 * Time.deltaTime);
	}
	else {
		rigidbody2D.velocity = Vector2(0,0);	
	}
}