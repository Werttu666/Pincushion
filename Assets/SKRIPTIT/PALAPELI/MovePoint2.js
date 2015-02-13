 private var screenPoint: Vector3;
 private var offset: Vector3;
 private var curScreenPoint : Vector3;
 private var curPosition : Vector3;
     
 function Start () {
 }
 
 function Update () {
 }
 
 function OnMouseDown () {
     screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
     offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
     Screen.showCursor = false;
     }
     
 function OnMouseDrag() { 
     curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
     curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
     transform.position = curPosition;
     }
 
 function OnMouseUp(){
     Screen.showCursor = true;
     }
 