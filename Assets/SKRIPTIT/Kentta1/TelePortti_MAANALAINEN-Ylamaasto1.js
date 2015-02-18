
function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "NeulaTyyny" ){
		resetti = GameObject.Find("YlaMaastoon1Spawnaaja").transform;
		other.gameObject.transform.position = resetti.transform.position;
	}
}