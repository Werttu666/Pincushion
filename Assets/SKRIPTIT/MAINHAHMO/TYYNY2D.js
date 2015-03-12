var speed = 15.0;
var jumpSpeed = 500.0;
static var voiLiikkuu = 1;

var myAnim : Animator;


static var voiLyoda = 1;
static var voiHypata = 0;
static var tiput = 1;



function Start () {

}

function FixedUpdate () {


	var hor = Input.GetAxis("Horizontal");

	rigidbody2D.velocity = Vector2(speed*voiLiikkuu*hor,rigidbody2D.velocity.y);
	
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
	if((Input.GetKeyDown(KeyCode.LeftControl) || Input.GetKeyDown(KeyCode.RightControl)) && voiLyoda == 1){
		myAnim.SetTrigger("Lyo");
		voiLiikkuu = 0;
		SendMessage("Odota");
	}
	if(tiput == 1){
		myAnim.SetBool("Falling", true);
		voiLyoda = 0;
	}
	if(tiput == 0){
		myAnim.SetBool("Falling", false);
		voiLyoda = 1;
	}
}

function Tiput(){
	myAnim.SetBool("Falling", true);
}

function TipuitMaahan(){
	myAnim.SetTrigger("Tipuit");
}

function Odota(){
		voiLiikkuu = 0;
		yield WaitForSeconds (0.5);
		voiLiikkuu = 1;
}
