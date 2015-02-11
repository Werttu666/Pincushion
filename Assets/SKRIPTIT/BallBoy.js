var speed = 15.0;
var jumpSpeed = 500.0;

var myAnim : Animator;

var right = true;
var canJump = false;

var jumpCounter = 2;

var groundCheck : Transform;
var groundCheckRay = 0.5;
var groundMask : LayerMask;

function Start () {

}

function FixedUpdate () {

	canJump = Physics2D.OverlapCircle(groundCheck.transform.position,groundCheckRay,groundMask);

	var hor = Input.GetAxis("Horizontal");
	
	myAnim.SetFloat("verSpeed",rigidbody2D.velocity.y);
	myAnim.SetFloat("Speed",Mathf.Abs(hor));
	myAnim.SetBool("canJump",canJump);
	
	rigidbody2D.velocity = Vector2(speed*hor,rigidbody2D.velocity.y);
	
	if(hor > 0.1 && !right)
	{
		FlipSprite();
	}
	else if(hor < -0.1 && right)
	{
		FlipSprite();
	}
}

function Update(){
	if(Input.GetButtonDown("Jump") && canJump){
		rigidbody2D.AddForce(Vector2(0.0,jumpSpeed));
	}
}

function FlipSprite(){
	right = !right;
	transform.localScale.x *=-1;
}