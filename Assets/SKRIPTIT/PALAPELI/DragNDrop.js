// #pragma strict
    private var dist : Vector3;
    private var posX : float;
    private var posY : float;

    function OnMouseDown(){
      dist = Camera.main.WorldToScreenPoint(transform.position);
      posX = Input.mousePosition.x - dist.x;
      posY = Input.mousePosition.y - dist.y;

    }

    function OnMouseDrag(){
      var curPos = new Vector3(Input.mousePosition.x - posX, 
                     Input.mousePosition.y - posY, dist.z);
               
      var worldPos = Camera.main.ScreenToWorldPoint(curPos);
      rigidbody2D.MovePosition(worldPos);
    }
   
function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "Blokki"){
		resetti = GameObject.Find("aIVOpALANrESETTI").transform;
		transform.position = resetti.transform.position;
	}
}