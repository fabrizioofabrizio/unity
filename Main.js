#pragma strict


var valY : int = 1;
var valR : int = 1;
var valO : int = 1;
var valP : int = 1;


var yellowBox : GameObject;
var yellowBall : GameObject;
var redBox : GameObject;
var redBall : GameObject;
var orangeBox : GameObject;
var orangeBall : GameObject;
var pinkBox : GameObject;
var pinkBall : GameObject;

///////////////////////////////////////////////////
//--------------BANNER
var banner : GameObject;
var puntiB : GameObject;
var puntiBDec : GameObject;
var countB : int = 0;
var countBDec: int = 0;
///////////////////////////////////////////////////

//--------------------VARIABILI PUNTEGGIO
var punti : GameObject;
var puntiDec : GameObject;


var numeroDecimale : int = 0;
var numero : int = 0;
var numeroDelIf : int = 0;


//---------------------VARIABILI TRIGGER

var trigger1 : GameObject;
var trigger2 : GameObject;
var trigger3 : GameObject;
var trigger4 : GameObject;


//------------------------ VARIABILI SPRITE--------------------------------

public var yellowBoxSprite : Sprite;
public var redBoxSprite : Sprite;
public var orangeBoxSprite : Sprite;
public var pinkBoxSprite : Sprite;
public var yellowBallSprite : Sprite;
public var redBallSprite : Sprite;
public var orangeBallSprite : Sprite;
public var pinkBallSprite : Sprite;

//
public var puntiSprite0 : Sprite;
public var puntiSprite1 : Sprite;
public var puntiSprite2 : Sprite;
public var puntiSprite3 : Sprite;
public var puntiSprite4 : Sprite;
public var puntiSprite5 : Sprite;
public var puntiSprite6 : Sprite;
public var puntiSprite7 : Sprite;
public var puntiSprite8 : Sprite;
public var puntiSprite9 : Sprite;



//prende il valore VAL dallo script YELLOWBALLSC e lo usa come variabile interna SCORE 
private var scoreY : YellowBallSc;
private var scoreR : RedBallSc;
private var scoreO : OrangeBallSc;
private var scoreP : PinkBallSc;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//---------------------AUDIO

var win : AudioClip;
private var audioInc : int = 0;
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function OnEnable (){
	
	Resources.UnloadUnusedAssets();
	
	//---------------------------------ROSSO
	orangeBox = new GameObject ("orangeBox");

	orangeBox.AddComponent ("Rigidbody2D");
	orangeBox.AddComponent ("BoxCollider2D");
	orangeBox.GetComponent(BoxCollider2D).size = Vector2(1.24,1.24);
	orangeBox.AddComponent("SpriteRenderer");
	orangeBox.GetComponent(SpriteRenderer).sprite = orangeBoxSprite;
	orangeBox.GetComponent(Rigidbody2D).mass = 100;
	orangeBox.GetComponent(Rigidbody2D).gravityScale = 0;
	orangeBox.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	orangeBox.transform.transform.position = Vector3(-0.6,-2.5,0);
	orangeBox.tag = "orangeBox";
	orangeBox.AddComponent("OrangeBoxSc");

	
	//---------------------------------ROSSO
	redBox = new GameObject ("redBox");

	redBox.AddComponent ("Rigidbody2D");
	redBox.AddComponent ("BoxCollider2D");
	redBox.GetComponent(BoxCollider2D).size = Vector2(1.24,1.24);;
	redBox.AddComponent("SpriteRenderer");
	redBox.GetComponent(SpriteRenderer).sprite = redBoxSprite;
	redBox.GetComponent(Rigidbody2D).mass = 100;
	redBox.GetComponent(Rigidbody2D).gravityScale = 0;
	redBox.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	redBox.transform.transform.position = Vector3(0.8,-2.5,0);
	redBox.tag = "redBox";
	redBox.AddComponent("RedBoxSc");


	//---------------------------------GIALLO
	yellowBox = new GameObject ("yellowBox");



	yellowBox.AddComponent ("Rigidbody2D");
	
	yellowBox.AddComponent ("BoxCollider2D");
	yellowBox.GetComponent(BoxCollider2D).size = Vector2(1.24,1.24);
	yellowBox.AddComponent("SpriteRenderer");
	yellowBox.GetComponent(SpriteRenderer).sprite = yellowBoxSprite;
	yellowBox.GetComponent(Rigidbody2D).mass = 100;
	yellowBox.GetComponent(Rigidbody2D).gravityScale = 0;
	yellowBox.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	yellowBox.transform.transform.position = Vector3(-2,-2.5,0);
	yellowBox.tag = "yellowBox";
	yellowBox.AddComponent("YellowBoxSc");
	
	
	
	pinkBox = new GameObject ("pinkBox");



	pinkBox.AddComponent ("Rigidbody2D");
	pinkBox.AddComponent ("BoxCollider2D");
	pinkBox.GetComponent(BoxCollider2D).size = Vector2(1.24,1.24);
	pinkBox.AddComponent("SpriteRenderer");
	pinkBox.GetComponent(SpriteRenderer).sprite = pinkBoxSprite;
	pinkBox.GetComponent(Rigidbody2D).mass = 100;
	pinkBox.GetComponent(Rigidbody2D).gravityScale = 0;
	pinkBox.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	pinkBox.transform.transform.position = Vector3(2,-2.5,0);
	pinkBox.tag = "pinkBox";
	pinkBox.AddComponent("PinkBoxSc");

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
	//------------------------oggetto PUNTI
	punti = new GameObject ("punti");

	punti.AddComponent("SpriteRenderer");
	punti.GetComponent(SpriteRenderer).sprite = puntiSprite0;
	punti.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	punti.transform.transform.position = Vector3(2,3.5,0);

	puntiDec = new GameObject ("puntiDec");

	puntiDec.AddComponent("SpriteRenderer");
	puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite0;
	puntiDec.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	puntiDec.transform.transform.position = Vector3(1.8,3.5,0);
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
	puntiB = new GameObject ("puntiB");

	puntiB.AddComponent("SpriteRenderer");
	puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite0;
	puntiB.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	puntiB.transform.transform.position = Vector3(-1.8,3.5,0);

	puntiBDec = new GameObject ("puntiBDec");

	puntiBDec.AddComponent("SpriteRenderer");
	puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite0;
	puntiBDec.GetComponent(SpriteRenderer).sortingLayerName  = "1";
	puntiBDec.transform.transform.position = Vector3(-2,3.5,0);
	
	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
	
//--------------------------OGGETTI TRIGGER
	trigger1 = new GameObject ("trigger1");

	trigger1.AddComponent ("EdgeCollider2D");
	trigger1.transform.transform.position = Vector3(-2,-2,0);
	trigger1.layer = 15;
	trigger1.tag = "trigger";
	
	trigger2 = new GameObject ("trigger2");

	trigger2.AddComponent ("EdgeCollider2D");
	trigger2.transform.transform.position = Vector3(-0.6132315,-2,0);
	trigger2.layer = 15;
	trigger2.tag = "trigger";
	
	trigger3 = new GameObject ("trigger3");

	trigger3.AddComponent ("EdgeCollider2D");
	trigger3.transform.transform.position = Vector3(0.7394845,-2,0);
	trigger3.layer = 15;
	trigger3.tag = "trigger";
	
	trigger4 = new GameObject ("trigger4");

	trigger4.AddComponent ("EdgeCollider2D");
	trigger4.transform.transform.position = Vector3(2.128273,-2,0);
	trigger4.layer = 15;
	trigger4.tag = "trigger";
	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
	banner = new GameObject ("banner");

	banner.AddComponent ("BoxCollider2D");
	banner.transform.transform.position = Vector3(-0.06798878,-3.889832,0);
	banner.layer = 18;
	banner.tag = "banner";
	banner.transform.localScale += new Vector3(5, 0, 0);
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////	
	
}   

function Awake (){
		//dichiarazione alla partenza della variabile score che va a prendere i dati dallo script YELLOWBALLSC nel oggetto yellowBall
		 scoreY = yellowBall.GetComponent(YellowBallSc);
		 scoreR = redBall.GetComponent(RedBallSc);
		 scoreO = orangeBall.GetComponent(OrangeBallSc);
		 scoreP = pinkBall.GetComponent(PinkBallSc);
	}

function Update () {
	Tocco();
	Punteggio();
	SaliScendiY();
	SaliScendiO();
	SaliScendiR();
	SaliScendiP();
	Audio();
	
	BloccoAssiBox();
		
	if (Input.GetKeyDown(KeyCode.Escape)) 
		Application.Quit(); 
	}		

function BloccoAssiBox(){
		yellowBox.transform.rotation = Quaternion.Euler(0,0,0);
		orangeBox.transform.rotation = Quaternion.Euler(0,0,0);
		redBox.transform.rotation = Quaternion.Euler(0,0,0);
		pinkBox.transform.rotation = Quaternion.Euler(0,0,0);
}
  
function Tocco () {  

	
    var wp = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	var  touchPos : Vector2 = new Vector2(wp.x, wp.y);

		if (Input.GetMouseButtonDown(0) ) 
	        {
				if (yellowBox.collider2D == Physics2D.OverlapPoint(touchPos))
					{
						valY++;
						
						if (valY >= 5){
							valY = 1;
						}
						yellowTocco();				
					}
				
				if (redBox.collider2D == Physics2D.OverlapPoint(touchPos))
					{
						valR++;
						
						if (valR >= 5){
							valR = 1;
						}
						redTocco();
					}
			
						
						
				if (orangeBox.collider2D == Physics2D.OverlapPoint(touchPos))
					{
						valO++;
						
						if (valO >= 5){
							valO = 1;
						}
						orangeTocco();
					}
				
				if (pinkBox.collider2D == Physics2D.OverlapPoint(touchPos))
					{
						valP++;
						
						if (valP >= 5){
							valP = 1;
						}
						pinkTocco();
					}
				
				if (banner.collider2D == Physics2D.OverlapPoint(touchPos))
					{
						countB = countB + 1;
						
						if(countB == 10){
							countBDec = countBDec + 1;
							countB = 0;
						}
						
							if (countB == 0){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite0;
							}
							if (countB == 1){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite1;
							}
							if (countB == 2){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite2;
							}
							if (countB == 3){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite3;
							}
							if (countB == 4){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite4;
							}
							if (countB == 5){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite5;
							}
							if (countB == 6){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite6;
							}
							if (countB == 7){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite7;
							}
							if (countB == 8){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite8;
							}
							if (countB == 9){
								puntiB.GetComponent(SpriteRenderer).sprite = puntiSprite9;
							}
							
							// da zeor a nove decimale
							if (countBDec == 0){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite0;
							}
							if (countBDec == 1){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite1;
							}
							if (countBDec == 2){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite2;
							}
							if (countBDec == 3){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite3;
							}
							if (countBDec == 4){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite4;
							}
							if (countBDec == 5){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite5;
							}
							if (countBDec == 6){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite6;
							}
							if (countBDec == 7){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite7;
							}
							if (countBDec == 8){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite8;
							}
							if (countBDec == 9){
								puntiBDec.GetComponent(SpriteRenderer).sprite = puntiSprite9;
							}			
					}
		}


		
}

function yellowTocco() {
	
	if (valY == 1)
			{
				yellowBox.transform.transform.position = Vector3(-2,-6,0);
				yellowBox.GetComponent(SpriteRenderer).sprite = yellowBoxSprite;
				yellowBox.tag = "yellowBox";
				yellowBox.rigidbody2D.velocity = Vector3 (0,2,0);
			}	
	if (valY == 2)
			{
				yellowBox.transform.transform.position = Vector3(-2,-6,0);
				yellowBox.GetComponent(SpriteRenderer).sprite = redBoxSprite;
				yellowBox.tag = "redBox";
				yellowBox.rigidbody2D.velocity = Vector3 (0,2,0);
			}
	if (valY == 3)
			{
				yellowBox.transform.transform.position = Vector3(-2,-6,0);
				yellowBox.GetComponent(SpriteRenderer).sprite = orangeBoxSprite;
				yellowBox.tag = "orangeBox";
				yellowBox.rigidbody2D.velocity = Vector3 (0,2,0);
			}
	if (valY == 4)
			{
				yellowBox.GetComponent(SpriteRenderer).sprite = pinkBoxSprite;
				yellowBox.tag = "pinkBox";
				yellowBox.rigidbody2D.velocity = Vector3 (0,2,0);
				yellowBox.transform.transform.position = Vector3(-2,-6,0);
			}
}

function redTocco() {
	
	if (valR == 1)
			{
				redBox.GetComponent(SpriteRenderer).sprite = redBoxSprite;
				redBox.tag = "redBox";
				redBox.rigidbody2D.velocity = Vector3 (0,2,0);
				redBox.transform.transform.position = Vector3(0.8,-6,0);
			}	
	if (valR == 2)
			{
				redBox.GetComponent(SpriteRenderer).sprite = orangeBoxSprite;
				redBox.tag = "orangeBox";
				redBox.rigidbody2D.velocity = Vector3 (0,2,0);
				redBox.transform.transform.position = Vector3(0.8,-6,0);
				
			}
	if (valR == 3)
			{
				redBox.GetComponent(SpriteRenderer).sprite = pinkBoxSprite;
				redBox.tag = "pinkBox";
				redBox.rigidbody2D.velocity = Vector3 (0,2,0);
				redBox.transform.transform.position = Vector3(0.8,-6,0);
			}
	if (valR == 4)
			{
				redBox.GetComponent(SpriteRenderer).sprite = yellowBoxSprite;
				redBox.tag = "yellowBox";
				redBox.rigidbody2D.velocity = Vector3 (0,2,0);
				redBox.transform.transform.position = Vector3(0.8,-6,0);
			}
}

function orangeTocco() {
	
	if (valO == 1)
			{
				orangeBox.GetComponent(SpriteRenderer).sprite = orangeBoxSprite;
				orangeBox.tag = "orangeBox";
				orangeBox.rigidbody2D.velocity = Vector3 (0,2,0);
				orangeBox.transform.transform.position = Vector3(-0.6,-6,0);
			}	
	if (valO == 2)
			{
				orangeBox.GetComponent(SpriteRenderer).sprite = pinkBoxSprite;
				orangeBox.tag = "pinkBox";
				orangeBox.rigidbody2D.velocity = Vector3 (0,2,0);
				orangeBox.transform.transform.position = Vector3(-0.6,-6,0);
			}
	if (valO == 3)
			{
				orangeBox.GetComponent(SpriteRenderer).sprite = yellowBoxSprite;
				orangeBox.tag = "yellowBox";
				orangeBox.rigidbody2D.velocity = Vector3 (0,2,0);
				orangeBox.transform.transform.position = Vector3(-0.6,-6,0);
			}
	if (valO == 4)
			{
				orangeBox.GetComponent(SpriteRenderer).sprite = redBoxSprite;
				orangeBox.tag = "redBox";
				orangeBox.rigidbody2D.velocity = Vector3 (0,2,0);
				orangeBox.transform.transform.position = Vector3(-0.6,-6,0);
			}
}

function pinkTocco() {
	
	if (valP == 1)
			{
				pinkBox.GetComponent(SpriteRenderer).sprite = pinkBoxSprite;
				pinkBox.tag = "pinkBox";
				pinkBox.rigidbody2D.velocity = Vector3 (0,2,0);
				pinkBox.transform.transform.position = Vector3(2,-6,0);
			}	
	if (valP == 2)
			{
				pinkBox.GetComponent(SpriteRenderer).sprite = yellowBoxSprite;
				pinkBox.tag = "yellowBox";
				pinkBox.rigidbody2D.velocity = Vector3 (0,2,0);
				pinkBox.transform.transform.position = Vector3(2,-6,0);
			}
	if (valP == 3)
			{
				pinkBox.GetComponent(SpriteRenderer).sprite = redBoxSprite;
				pinkBox.tag = "redBox";
				pinkBox.rigidbody2D.velocity = Vector3 (0,2,0);
				pinkBox.transform.transform.position = Vector3(2,-6,0);
			}
	if (valP == 4)
			{
				pinkBox.GetComponent(SpriteRenderer).sprite = orangeBoxSprite;
				pinkBox.tag = "orangeBox";
				pinkBox.rigidbody2D.velocity = Vector3 (0,2,0);
				pinkBox.transform.transform.position = Vector3(2,-6,0);
			}		
}

function Punteggio(){
	numero = scoreY.pt + scoreR.pt + scoreO.pt + scoreP.pt ;
	numeroDelIf = numero;
	
	
					
	if((numero >= 10) && (numero <= 19)){
		numeroDelIf = numeroDelIf - 10; 
		numeroDecimale = 1;
	}
	if((numero >= 20) && (numero <= 29)){
		numeroDelIf = numeroDelIf - 20; 
		numeroDecimale = 2;
	}
	if((numero >= 30) && (numero <= 39)){
		numeroDelIf = numeroDelIf - 30; 
		numeroDecimale = 3;
	}
	if((numero >= 40) && (numero <= 49)){
		numeroDelIf = numeroDelIf - 40; 
		numeroDecimale = 4;
	}
	if((numero >= 50) && (numero <= 59)){
		numeroDelIf = numeroDelIf - 50; 
		numeroDecimale = 5;
	}
	if((numero >= 60) && (numero <= 69)){
		numeroDelIf = numeroDelIf - 60; 
		numeroDecimale = 6;
	}
	
	//da zero a nove 
	if (numeroDelIf == 0){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite0;
	}
	if (numeroDelIf == 1){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite1;
	}
	if (numeroDelIf == 2){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite2;
	}
	if (numeroDelIf == 3){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite3;
	}
	if (numeroDelIf == 4){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite4;
	}
	if (numeroDelIf == 5){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite5;
	}
	if (numeroDelIf == 6){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite6;
	}
	if (numeroDelIf == 7){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite7;
	}
	if (numeroDelIf == 8){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite8;
	}
	if (numeroDelIf == 9){
		punti.GetComponent(SpriteRenderer).sprite = puntiSprite9;
	}
	
	// da zeor a nove decimale
	if (numeroDecimale == 0){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite0;
	}
	if (numeroDecimale == 1){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite1;
	}
	if (numeroDecimale == 2){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite2;
	}
	if (numeroDecimale == 3){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite3;
	}
	if (numeroDecimale == 4){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite4;
	}
	if (numeroDecimale == 5){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite5;
	}
	if (numeroDecimale == 6){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite6;
	}
	if (numeroDecimale == 7){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite7;
	}
	if (numeroDecimale == 8){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite8;
	}
	if (numeroDecimale == 9){
		puntiDec.GetComponent(SpriteRenderer).sprite = puntiSprite9;
	}

	
} 

function SaliScendiY(){
	
	if((scoreY.saliScendi >= 0) && (scoreY.saliScendi <= 1)){
		trigger1.transform.transform.position = Vector3(-2,-2,0);
	}
	if((scoreY.saliScendi >= 2) && (scoreY.saliScendi <= 3)){
		trigger1.transform.transform.position = Vector3(-2,-1.5,0);
	}
	if((scoreY.saliScendi >= 4) && (scoreY.saliScendi <= 5)){
		trigger1.transform.transform.position = Vector3(-2,-1,0);
	}
	if((scoreY.saliScendi >= 6) && (scoreY.saliScendi <= 7)){
		trigger1.transform.transform.position = Vector3(-2,-0.5,0);
	}
	if((scoreY.saliScendi >= 8) && (scoreY.saliScendi <= 9)){
		trigger1.transform.transform.position = Vector3(-2,0,0);
	}
}

function SaliScendiO(){
	
	if((scoreO.saliScendi >= 0) && (scoreO.saliScendi <= 1)){
		trigger2.transform.transform.position = Vector3(-0.6132315,-2,0);
	}
	if((scoreO.saliScendi >= 2) && (scoreO.saliScendi <= 3)){
		trigger2.transform.transform.position = Vector3(-0.6132315,-1.5,0);
	}
	if((scoreO.saliScendi >= 4) && (scoreO.saliScendi <= 5)){
		trigger2.transform.transform.position = Vector3(-0.6132315,-1,0);
	}
	if((scoreO.saliScendi >= 6) && (scoreO.saliScendi <= 7)){
		trigger2.transform.transform.position = Vector3(-0.6132315,-0.5,0);
	}
	if((scoreO.saliScendi >= 8) && (scoreO.saliScendi <= 9)){
		trigger2.transform.transform.position = Vector3(-0.6132315,0,0);
	}
}

function SaliScendiR(){
	
	if((scoreR.saliScendi >= 0) && (scoreR.saliScendi <= 1)){
		trigger3.transform.transform.position = Vector3(0.7394845,-2,0);
	}
	if((scoreR.saliScendi >= 2) && (scoreR.saliScendi <= 3)){
		trigger3.transform.transform.position = Vector3(0.7394845,-1.5,0);
	}
	if((scoreR.saliScendi >= 4) && (scoreR.saliScendi <= 5)){
		trigger3.transform.transform.position = Vector3(0.7394845,-1,0);
	}
	if((scoreR.saliScendi >= 6) && (scoreR.saliScendi <= 7)){
		trigger3.transform.transform.position = Vector3(0.7394845,-0.5,0);
	}
	if((scoreR.saliScendi >= 8) && (scoreR.saliScendi <= 9)){
		trigger3.transform.transform.position = Vector3(0.7394845,0,0);
	}
}

function SaliScendiP(){
	
	if((scoreP.saliScendi >= 0) && (scoreP.saliScendi <= 1)){
		trigger4.transform.transform.position = Vector3(2.128273,-2,0);
	}
	if((scoreP.saliScendi >= 2) && (scoreP.saliScendi <= 3)){
		trigger4.transform.transform.position = Vector3(2.128273,-1.5,0);
	}
	if((scoreP.saliScendi >= 4) && (scoreP.saliScendi <= 5)){
		trigger4.transform.transform.position = Vector3(2.128273,-1,0);
	}
	if((scoreP.saliScendi >= 6) && (scoreP.saliScendi <= 7)){
		trigger4.transform.transform.position = Vector3(2.128273,-0.5,0);
	}
	if((scoreP.saliScendi >= 8) && (scoreP.saliScendi <= 9)){
		trigger4.transform.transform.position = Vector3(2.128273,0,0);
	}
}

function Audio(){
	if((scoreY.saliScendi > 10) && (scoreO.saliScendi > 10) && (scoreR.saliScendi > 10) && (scoreP.saliScendi > 10))
	{
		
		audioInc++;
	}
	
	if (audioInc == 1){
			audio.PlayOneShot(win);
		}
	if (audioInc > 2){
			audioInc = 10;
		}
}


