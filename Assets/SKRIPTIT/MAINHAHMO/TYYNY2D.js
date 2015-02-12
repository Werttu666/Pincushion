var speed = 15.0;
var jumpSpeed = 500.0;

var myAnim : Animator;

static var voiHypata = 0;
static var tiput = 1;



function Start () {

}

function FixedUpdate () {


	var hor = Input.GetAxis("Horizontal");

	rigidbody2D.velocity = Vector2(speed*hor,rigidbody2D.velocity.y);
	
	if(hor > 0.1 ){
		myAnim.SetFloat("MeeOikeelle",1.0);
	}
	else {
		myAnim.SetFloat("MeeOikeelle",0);
	}
	if(hor < -0.1 ){
		myAnim.SetFloat("MeeVasempaan",1.0);
	}
	else {
		myAnim.SetFloat("MeeVasempaan",0);
	}
}

function Update(){
	if(Input.GetButtonDown("Jump") && voiHypata == 1){
		myAnim.SetTrigger("Jumping");
		rigidbody2D.AddForce(Vector2(0.0,jumpSpeed));
	}
	if(tiput == 1){
		myAnim.SetBool("Falling", true);
	}
	if(tiput == 0){
		myAnim.SetBool("Falling", false);
	}
}

function Tiput(){
	myAnim.SetBool("Falling", true);
}

function TipuitMaahan(){
	myAnim.SetTrigger("Tipuit");
}
