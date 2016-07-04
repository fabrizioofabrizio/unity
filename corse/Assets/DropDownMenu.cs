using UnityEngine;
using System.Collections;
using UnityEngine.Events;
using UnityEngine.UI;


public class DropDownMenu : MonoBehaviour {


//-----------------test get an post data
	
	public string updateUrl = "http://applicazionepercellulare.esy.es/calcioUpdate.php";
	private string nomeUtente = "";
	private string password = "";


//-----------MENU A TENDINA
//----------INSERIRE IN OGNI DROP DOWN L'OGGETT DROPDOWN
//----------

public Dropdown dropdown;
public Dropdown dropdown1;
public Dropdown dropdown2;


public Text testo;



public string text;
public string text1;
public string text2;
public string result;
private int num;
	
	void Start(){
		num = PlayerPrefs.GetInt("ID");
		
		Debug.Log("numero id: " +num);
		
	}
 
 
 void Update () {
 
     //COM port Name that is currently selected on the dropDown Menu
     text = dropdown.captionText.text;
     text1 = dropdown1.captionText.text;
     text2 = dropdown2.captionText.text;
 }

	public void OnButtonClickDrop(){
			
						result = text + " "+ text1 + " "+ text2;
						
						testo.text = "hai scelto: " +  result;
						
							//-------- test data get and post
						StartCoroutine ("UpdateNome");
		}
	
	
	
	
	//-------- test data get and post
	
	private IEnumerator UpdateNome(){
	
	string numS = num.ToString();
	
	Debug.Log(numS);	
	
		string urlString = updateUrl + "?id=" + WWW.EscapeURL(numS)
		+ "&" + "sqUno=" + WWW.EscapeURL(text)
		+ "&" + "sqDue=" + WWW.EscapeURL(text1)
		+ "&" + "sqTre=" + WWW.EscapeURL(text2)	;
			
		WWW postNome = new WWW (urlString);
		yield return postNome;
		
		Debug.Log(postNome.text);	
	}
	
}
