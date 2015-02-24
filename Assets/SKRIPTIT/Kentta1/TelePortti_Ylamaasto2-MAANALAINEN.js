
function OnTriggerStay2D (other : Collider2D) {
	if (other.gameObject.name == "NeulaTyyny" && Input.GetKeyDown("e") ){
		resetti = GameObject.Find("TunneliinSpawnaaja2").transform;
		other.gameObject.transform.position = resetti.transform.position;
	}
}