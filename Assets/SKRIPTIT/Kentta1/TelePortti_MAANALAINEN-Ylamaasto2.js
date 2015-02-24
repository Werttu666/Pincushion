
function OnTriggerEnter2D (other : Collider2D) {
	if (other.gameObject.name == "NeulaTyyny" ){
		resetti = GameObject.Find("YlaMaastoon2Spawnaaja").transform;
		other.gameObject.transform.position = resetti.transform.position;
	}
}