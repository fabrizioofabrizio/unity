
using UnityEngine;
using System.Collections;

public class Login : MonoBehaviour {

	int nomeOk = 0;
	int secondoControllo = 0;
	int idEffettivo = 0;
	

	string[] user = new string[100] ;
	
	
	//Documentazione inerente al invio di dati e ricezione
	//dal database a Unity e vice versa

	//creazione delle stringhe per la connsessione con le pagine
	// php GET e POST, dal GET si ricevono i dati, dal POST si inviano
	// GET= ricevo
	//POST= invio
	
/*
	public string postUrl = "http://localhost:8080/calcio/calcioPost.php";
	public string getUrl = "http://localhost:8080/calcio/calcioGet.php";
	public string updateUrl = "http://localhost:8080/calcio/calcioUpdate.php";
*/
	public string postUrl = "http://applicazionepercellulare.esy.es/calcioPost.php";
	public string getUrl = "http://applicazionepercellulare.esy.es/calcioGet.php";
	public string updateUrl = "http://applicazionepercellulare.esy.es/calcioUpdate.php";

	public string Url = "";

	// player è il nome di un campo
	// num è l'id incrementale
	private string nomeUtente = "";
	private string password = "";
	
	// definizione dei bottoni per inviare e ricevere dati
	void OnGUI(){
		GUI.Label (new Rect (10,10,50,25), "Utente");
		nomeUtente = GUI.TextField( new Rect (70,10,100,25), nomeUtente);
		GUI.Label (new Rect (10,40,50,25), "Password");
		password = GUI.TextField( new Rect (70,40,100,25), password);
		///////////////////////////////////////////////////	
		///////////////////////////////////////////////////
		//IMPORTANTE 
		//utilizzare il metodo StartCoroutine che richiama la 
		//funzione SalvaNome o CaricaNome, senza il metodo non c'è
		//tempo di attesa nella ricezione e invio di dati, quindi
		// il server può ritardare nella chimata e perdere i dati
		// senza StartCoroutine sicuramente avrai un errore
		///////////////////////////////////////////////////	
		if(GUI.Button(new Rect (180,10,80,25), "Gia Iscritto"))
			StartCoroutine ("CaricaNome");
		if(GUI.Button(new Rect (180,40,80,25), "Iscriviti"))
			StartCoroutine ("SalvaNome");
	}
	
		//coroutine in cui vado a cercare nome e password per il login
		//questa è la coroutine che richiama i dati dal GET	
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
		user = datiStringa.Split(";"[0]);
		
		//dopo aver diviso il risultato del calcioGet.php in un array di stringhe
		//ciclo l'array in un altro array: in questo modo controllo prima se il nome e la password
		//esistono nell'array dopo di che ciclo su tutti i campi per vedere se coincidono con l'ID 
		//che servirà per tutte le modifiche
		//dopo di che salvo l'ID nel playerPrefs per portarmelo in tutte le modifiche dell'utente
		for(int i = 0; i < user.Length; i++){
			
				for (secondoControllo = 0; secondoControllo < (user.Length * 10); secondoControllo++){
					
					//se nome e pass e l'id trovato dal secondoControllo sono uguali alla posizione dell'array
					//nomeOk è 1 e viene lanciato il primo livello
					if(user[i].Equals("|Nome"+nomeUtente+ "|Password"+password + "|ID" + secondoControllo)) {
					nomeOk =  1;
					idEffettivo = secondoControllo;
					//l'id viene salvato e riusato poi nel livello 1
					PlayerPrefs.SetInt("ID", idEffettivo);
					}
				}
			} 
			
			// se utente e password esistono cambio livello
			if(nomeOk == 1){
				Debug.Log("Nome"+nomeUtente+ "Password"+password + " con ID" + idEffettivo);	
				Application.LoadLevel("c01");
				} else{
					Debug.Log("Login Errato");
					nomeOk = 0;
				}
		
	}	

	private IEnumerator SalvaNome(){
	
		//trasformo la stringa num che è un intero in una stringa da passare EscapeURL
		
		
		//questa è la stringa che viene inviata al metodo POST 
		//dove postUrl è stato scritto all'inizio,
		// "?nome=" è dove verrà salvata la variabile in php es: $nome = $_GET['nome'];
		// WWW.EscapeURL (stringa) è esattamente iil dato che sarà salvato (quello che vogliamo scrivere (x,y,z..))
	
		string urlString = postUrl  + "?nomeUtente=" + WWW.EscapeURL(nomeUtente)
		+ "&" + "password=" + WWW.EscapeURL(password);
	
		WWW postNome = new WWW (urlString);
		//aspetta che il server risponda alla chiamata
		yield return postNome;
		//come sopra...
		//	WWW postNomeInt = new WWW (urlStringInt);
		//yield return postNomeInt;

		//WWW urlStringPunteggioInt = new WWW (urlStringPunteggio);
		//yield return urlStringPunteggioInt;
		
		//stampa il contenuto del POST
		Debug.Log(postNome.text);	
		
		//incrementa il valore di num per aumentare l'id all'interno del server
		//num = num + 1;
		
		
		//alla fine avremo un file nel server con 
		//un ID che incrementa di uno ogni volta che viene premuto il tasto salva
		//un NOME che corrisponde al campo nome del nostro server
		
		//P.S. va creato un server con almeno due campi di cui uno  id e un nome
	}
	
	
}

