﻿
using UnityEngine;
using System.Collections;

public class InRivUpCalcio : MonoBehaviour {

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
	

	// player è il nome di un campo
	// num è l'id incrementale
	private string nomeUtente = "";
	private string punteggio = "";
	private string password = "";
	private int num;
	
	void Start(){
		num = PlayerPrefs.GetInt("ID");
	}
	
	

	// definizione dei bottoni per inviare e ricevere dati
	void OnGUI(){
		GUI.Label (new Rect (10,10,50,25), "Nome Utente");
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
		if(GUI.Button(new Rect (180,10,80,25), "invia Nome"))
			StartCoroutine ("SalvaNome");
		
		if(GUI.Button(new Rect (270,10,80,25), "ricevi Nome"))
			StartCoroutine ("CaricaNome");
		
		// Update = modifica i dati di un campo nel DB
		//in questo caso ad un id prestabilito
		if(GUI.Button(new Rect (180,40,80,25), "modifica"))
			StartCoroutine ("ModificaNome");
		
		if(GUI.Button(new Rect (270,90,80,25), "esci"))
			Application.LoadLevel("c02");
	}

	
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
	}	

	
		//questa è la coroutine che richiama i dati dal POST	
	private IEnumerator SalvaNome(){
	
		//trasformo la stringa num che è un intero in una stringa da passare EscapeURL
		string numS = num.ToString();
		
		
		//questa è la stringa che viene inviata al metodo POST 
		//dove postUrl è stato scritto all'inizio,
		// "?nome=" è dove verrà salvata la variabile in php es: $nome = $_GET['nome'];
		// WWW.EscapeURL (stringa) è esattamente iil dato che sarà salvato (quello che vogliamo scrivere (x,y,z..))
	
		string urlString = postUrl + "?id=" + WWW.EscapeURL(numS)
		+ "&" + "nomeUtente=" + WWW.EscapeURL(nomeUtente)
		+ "&" + "punteggio=" + WWW.EscapeURL(punteggio);
	
	
		//string urlString = postUrl + "?nomeUtente=" + WWW.EscapeURL(nomeUtente);
		//string urlStringInt = postUrl + "?id=" + WWW.EscapeURL(numS) ;
		
		//cotrollo a quale indirizzo è stato inviato 
		Debug.Log("Invio nome: " + urlString);

		//recupera i dati dalla funzione WWW (la url del POST )
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
	
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	//Update
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

	
	private IEnumerator ModificaNome(){
	
		
		string numSup = num.ToString();
		
		//questa è la stringa che viene inviata al metodo POST 
		//dove postUrl è stato scritto all'inizio,
		// "?nome=" è dove verrà salvata la variabile in php es: $nome = $_GET['nome'];
		// WWW.EscapeURL (stringa) è esattamente il dato che sarà salvato (quello che vogliamo scrivere (x,y,z..))
		
		// LA CONCATENAZIONE di dati si fa partendo dal primo id con il (?) punto interrogativo, 
		//seguito da ogni casella con la & (e commerciale) prima: tipo ?id=2&nome=pippo
		string urlStringNom = updateUrl + "?id=" + WWW.EscapeURL(numSup)
		+ "&" + "nomeUtente=" + WWW.EscapeURL(nomeUtente)
		+ "&" + "password=" + WWW.EscapeURL(password);
		
		
		//cotrollo a quale indirizzo è stato inviato 
		Debug.Log("Modifico nome: " + urlStringNom);
		
		//recupera i dati dalla funzione WWW (la url del POST )
		WWW postNomeModId = new WWW (urlStringNom);
		//aspetta che il server risponda alla chiamata
		yield return postNomeModId;
		
		//stampa il contenuto del POST
		Debug.Log(postNomeModId.text);	
			
		
	}
	
	
}

