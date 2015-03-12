static var lyo = 0;
static var jahtaa = 0;

var speed = 25.0;
var voiKavella = 1;

var suntioAnim : Animator;

var target: Transform;

var lookingRight : boolean = true;

function Start(){
	target = gameObject.FindWithTag("Player").transform;
}

function Update(){
	transform.LookAt(Vector3(target.position.x,transform.position.y,target.position.z));
	
	if(transform.position.x <= target.transform.position.x){
		lookingRight=true;
	}
	else if(transform.position.x > target.transform.position.x){
		lookingRight=false;
	}
	
}

function FixedUpdate () {
	
	if(jahtaa == 1 ){
		suntioAnim.SetFloat("Kavelee",1.0);
		if(lookingRight == true){
			
			//rigidbody2D.AddForce(Vector2.right*speed*1000*voiKavella*Time.deltaTime);
			rigidbody2D.velocity = Vector2(speed*10*voiKavella*Time.deltaTime,rigidbody2D.velocity.y);
		}
			if(lookingRight == false){
			rigidbody2D.velocity = Vector2(-speed*10*voiKavella*Time.deltaTime,rigidbody2D.velocity.y);
		}
	}
	if(lyo == 1){
		suntioAnim.SetTrigger("Lyodaan");
		voiKavella = 0;	
	}
	else{
		voiKavella = 1;
	}
}