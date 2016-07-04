using UnityEngine.UI;
using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
using System.Text.RegularExpressions;

public class test : MonoBehaviour {
   
//--------- COME SALVARE I DATI DENTRO DELLE VARIABILI DA UN PULSANTE IN UnityEngine
//--------- Associare a la classe alla main camera, aggiungere il metodo da menu a tendina 
//--------- 


	public Text testo;
	public InputField loginInputField;
	public InputField passwordInputField;
	public string login;
	public string password;
	public string result = "no";
	public string resultSalvaNome = "no";
	int id = 0;
	int count = 0;
	
	public	string primo;
	public	string secondo;
	public	string terzo;
	
	string[] user = new string[100] ;
	public string postUrl = "http://applicazionepercellulare.esy.es/calcioPost.php";
	public string getUrl = "http://applicazionepercellulare.esy.es/calcioGet.php";
	
	
	
	void Start ()
		{
			Screen.fullScreen = false;
		}
	
	
	
	void Update(){
		
		login = loginInputField.GetComponent<InputField>().text;
		password = passwordInputField.GetComponent<InputField>().text;
		
		
			if(result == "ok"){
				
				   SceneManager.LoadScene(1);
			}
	
		}
		
		public void OnButtonClickAccedi(){
			
			Debug.Log(result);
			
			StartCoroutine ("CaricaNome");
				
		}
		
		public void OnButtonClickIscriviti(){
			
			result = login + password;
				
			Debug.Log(result);
			
			StartCoroutine ("SalvaNome");
				
		}
		
		
		// private IEnumerator SalvaNome(){
	
	
				// string urlString = postUrl  + "?nomeUtente=" + WWW.EscapeURL(login)
				// + "&" + "password=" + WWW.EscapeURL(password);
				
				// WWW postNome = new WWW (urlString);
				
				// yield return postNome;
			

			
			
		// }
		
		private IEnumerator CaricaNome(){
		//Mostra i dati dal Server
		Debug.Log("prendo il nome da: " + getUrl);
		//recupera i dati dalla funzione WWW (la url del GET )
		// scritta all'inizio del file
		WWW getNome = new WWW (getUrl);
		
		//yield aspetto la risposta del serverù
		// se non aspetto da errore
		yield return getNome;
		
		// stampo il risultato della ricerca
		Debug.Log(getNome.text);
		
		string datiStringa = getNome.text; 
		
		//adesso vogliamo dividere la stringa perchè è una sola
		user = datiStringa.Split("*"[0]);
		
			for(int i = 0; i < user.Length; i++){
				Debug.Log("stampo: " + user[i]);
				Debug.Log("i: " +i);
				
				
					
				for (id = 0; id < (user.Length * 10); id++){
					{
						if(user[i].Equals("+Nome"+login+ "+Password"+password + "+ID" + id)) {
							
								result = "ok";	
							
								PlayerPrefs.SetInt("ID", id);
						}else {
							testo.text = "Utente Inseristente";
						}
					}
				}
			}
		}
		
		
		private IEnumerator SalvaNome(){
		//Mostra i dati dal Server
		Debug.Log("Sono dentro SalvaNome");
		//recupera i dati dalla funzione WWW (la url del GET )
		// scritta all'inizio del file
		WWW getNome = new WWW (getUrl);
		
		//yield aspetto la risposta del serverù
		// se non aspetto da errore
		yield return getNome;
		
		// stampo il risultato della ricerca
		Debug.Log(getNome.text);
		
		string datiStringa = getNome.text; 
		
		//adesso vogliamo dividere la stringa perchè è una sola
		user = datiStringa.Split("*"[0]);
		
			for(int i = 0; i < user.Length; i++){
				Debug.Log(user[i]);
				
				
					
				for (id = 0; id < (user.Length * 10); id++){
					
						if(user[i].Equals("+Nome"+login+ "+Password"+password + "+ID" + id)) {
							
							string str = "+Nome"+login+ "+Password"+password + "+ID" + id;
							
							Debug.Log("id: "+id);
							Debug.Log("str: "+str);
							
								count = count + 1;
							Debug.Log("count: " + count);
							}
					}
				}
				
				if(count > 0){
						resultSalvaNome = "no";
						Debug.Log("result no");
						
						testo.text = "Utente già iscritto";
					} else{
						resultSalvaNome = "ok";
						Debug.Log("result si");
						testo.text = "Benventuo Accedi";
					}
				
				if(resultSalvaNome == "ok") {
						
						Debug.Log("sono entrato nel result si");
						
						string urlString = postUrl  + "?nomeUtente=" + WWW.EscapeURL(login)
						+ "&" + "password=" + WWW.EscapeURL(password);
						
						WWW postNome = new WWW (urlString);
						
						yield return postNome;
						
						loginInputField.text= "";
						passwordInputField.text = "";
					}
				
				count = 0;
			}
		
}

