#pragma strict

public var redBallSpriteBall : Sprite;
public var yellowBallSprite : Sprite;
public var orangeBallSprite : Sprite;
public var pinkBallSprite : Sprite;


public var saliScendi : int = 0;
public var pt : int = 0; //punti
public var val : int = 1; // cambio colori
var pos : int = 0;

////////////////////////////////////////////
//-----------------SUONI------------------
var pop : AudioClip;
var boing : AudioClip;
///////////////////////////////////////////

function Start (){
val = 1;
	rigidbody2D.velocity = Vector3 (0,-0.5,0);
}


function OnCollisionEnter2D(coll: Collision2D) {

//definisco le possibilità di incontro tra quadrati e cerchi
	if ((coll.gameObject.tag == "yellowBox") && (this.gameObject.tag == "yellowBall")){
		transform.transform.position = Vector3(-2,5,0);
		rigidbody2D.velocity = Vector3 (0,-0.5,0);
		pt++;
		saliScendi = saliScendi + 1;
		audio.PlayOneShot(pop);
	} 
	if ((coll.gameObject.tag == "redBox") && (this.gameObject.tag == "yellowBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "orangeBox") && (this.gameObject.tag == "yellowBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "pinkBox") && (this.gameObject.tag == "yellowBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	
// se la palla è rossa
if ((coll.gameObject.tag == "redBox") && (this.gameObject.tag == "redBall")){
		transform.transform.position = Vector3(-2,5,0);
		rigidbody2D.velocity = Vector3 (0,-0.5,0);
		pt++;
		saliScendi = saliScendi + 1;
		audio.PlayOneShot(pop);
	} 
	if ((coll.gameObject.tag == "yellowBox") && (this.gameObject.tag == "redBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "orangeBox") && (this.gameObject.tag == "redBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "pinkBox") && (this.gameObject.tag == "redBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}

//se la palla è arancione
if ((coll.gameObject.tag == "orangeBox") && (this.gameObject.tag == "orangeBall")){
		transform.transform.position = Vector3(-2,5,0);
		rigidbody2D.velocity = Vector3 (0,-0.5,0);
		pt++;
		saliScendi = saliScendi + 1;
		audio.PlayOneShot(pop);
	} 
	if ((coll.gameObject.tag == "yellowBox") && (this.gameObject.tag == "orangeBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "redBox") && (this.gameObject.tag == "orangeBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "pinkBox") && (this.gameObject.tag == "orangeBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}

//se è rosa	
	if ((coll.gameObject.tag == "pinkBox") && (this.gameObject.tag == "pinkBall")){
		transform.transform.position = Vector3(-2,5,0);
		rigidbody2D.velocity = Vector3 (0,-0.5,0);
		pt++;
		saliScendi = saliScendi + 1;
		audio.PlayOneShot(pop);
	} 
	if ((coll.gameObject.tag == "yellowBox") && (this.gameObject.tag == "pinkBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "redBox") && (this.gameObject.tag == "pinkBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	if ((coll.gameObject.tag == "orangeBox") && (this.gameObject.tag == "pinkBall")){
		pos = 1;
		rigidbody2D.velocity = Vector3 (0,2,0);
		saliScendi = saliScendi -1;
		audio.PlayOneShot(boing);
	}
	
	if (coll.gameObject.tag == "roof"){
			pos = 0;
			val = Random.Range(1,5);
			
			if (val >= 5){
				val = 1;
			}
		}	

	if (val == 1){	
				GetComponent(SpriteRenderer).sprite = yellowBallSprite;
				gameObject.tag = "yellowBall";
				rigidbody2D.velocity = Vector3 (0,-0.5,0);
				val = 1;
		}	
	if (val == 2){
				GetComponent(SpriteRenderer).sprite = redBallSpriteBall;
				gameObject.tag = "redBall";
				rigidbody2D.velocity = Vector3 (0,-0.5,0);
				val = 2;
		}	
	if (val == 3){
				GetComponent(SpriteRenderer).sprite = orangeBallSprite;
				gameObject.tag = "orangeBall";
				rigidbody2D.velocity = Vector3 (0,-0.5,0);
				val = 3;
		}

	if (val == 4){
				GetComponent(SpriteRenderer).sprite = pinkBallSprite;
				gameObject.tag = "pinkBall";
				rigidbody2D.velocity = Vector3 (0,-0.5,0);
				val = 4;
		}

	if(pos == 1){
		rigidbody2D.velocity = Vector3 (0,2,0);
	}		
		
	if(saliScendi < 0){
		saliScendi = 0;
	}
	if(saliScendi > 10){
		rigidbody2D.velocity = Vector3.zero;
	}
	
}