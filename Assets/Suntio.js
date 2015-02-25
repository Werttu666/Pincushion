static var lyo = 0;
static var jahtaa = 0;

var speed = 25.0;

var suntioAnim : Animator;


function Update () {

	target = gameObject.FindWithTag("Player").transform;
	transform.LookAt(Vector3(target.position.x,transform.position.y,target.position.z));
	
	if(jahtaa == 1){
		rigidbody2D.velocity = Vector2(100,rigidbody2D.velocity.y);
	}
}