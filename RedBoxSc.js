

#pragma strict




public var yellowBoxSprite : Sprite;
public var redBoxSprite : Sprite;
public var orangeBoxSprite : Sprite;
public var pinkBoxSprite : Sprite;

public var val : int = 0;


function OnCollisionEnter2D(coll: Collision2D) {

//se colpisce la palla gialla

	// fa un confronto tra il suo stato e quello della pallina, se tutti e due sono gialli si muove altrimenti no
	if ((coll.gameObject.tag == "yellowBall") && (this.gameObject.tag == "yellowBox"))	{
		//animazione di vittoria
		yield WaitForSeconds(0.01);
			transform.transform.position = Vector3(0.5463169,-5,0);
		rigidbody2D.velocity = Vector3 (0,2,0);
	}
	/*if ((coll.gameObject.tag == "redBall") && (this.gameObject.tag == "yellowBox"))	{
		rigidbody2D.velocity = Vector3 (0,0,0);
	}	
	if ((coll.gameObject.tag == "orangeBall") && (this.gameObject.tag == "yellowBox"))	{
		rigidbody2D.velocity = Vector3 (0,0,0);
	}	*/
// se il quadrato è rosso
	if ((coll.gameObject.tag == "redBall") && (this.gameObject.tag == "redBox"))	{
		//animazione di vittoria
		yield WaitForSeconds(0.01);
		transform.transform.position = Vector3(0.5463169,-5,0);
		rigidbody2D.velocity = Vector3 (0,2,0);
	}
	/*if ((coll.gameObject.tag == "yellowBall") && (this.gameObject.tag == "redBox"))	{
		rigidbody2D.velocity = Vector3 (0,0,0);
	}	
	if ((coll.gameObject.tag == "orangeBall") && (this.gameObject.tag == "redBox"))	{
		rigidbody2D.velocity = Vector3 (0,0,0);
	}*/	
// se il quadrato è arancione	
	if ((coll.gameObject.tag == "orangeBall") && (this.gameObject.tag == "orangeBox"))	{
		//animazione di vittoria
		yield WaitForSeconds(0.01);
			transform.transform.position = Vector3(0.5463169,-5,0);
		rigidbody2D.velocity = Vector3 (0,2,0);
	}
	
	if ((coll.gameObject.tag == "pinkBall") && (this.gameObject.tag == "pinkBox"))	{
		//animazione di vittoria
		yield WaitForSeconds(0.01);
		transform.transform.position = Vector3(0.5463169,-5,0);
		rigidbody2D.velocity = Vector3 (0,2,0);
	}
	
	/*if ((coll.gameObject.tag == "yellowBall") && (this.gameObject.tag == "orangeBox"))	{
		rigidbody2D.velocity = Vector3 (0,0,0);
	}	
	if ((coll.gameObject.tag == "redBall") && (this.gameObject.tag == "orangeBox"))	{
		rigidbody2D.velocity = Vector3 (0,0,0);
	}*/		
		
	if (coll.gameObject.tag == "trigger") 	{
	
	rigidbody2D.velocity = Vector3.zero;
	}
}

