//Mail
//Crea una lista di email di invitati ad una festa.
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
//Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
//Si può fare? Certo che si basta ragionare un po’.
//Nota:2
//Non è necessario provvedere alla validazione delle email

let mail = ["pippo@gmail.com","giovanni@gmail.com","luca@gmail.com","vito@gmail.com"] 
let checkMail = prompt("scrivi la tua mail");
let booleaner = false

for(let i = 0; i < mail.length; i++){
    let singoloElemento = mail[i];

    if( singoloElemento === checkMail){
        booleaner = true 

    }

}
if(Boolean === true){
    console.log("ottimo puoi accedere alla festa ");
    
}
else{
    console.log("peccato non puoi entrare");
    
}




console.log();


























//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?
//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

let numberR = Math.random()* 6;
let numberU = Math.random()* 6;
 
console.log(`il tuo numero è ${numberU.toFixed(0)}`)
console.log(`il numero del tuo avversario bot è ${numberR.toFixed(0)}`)

if(numberR>numberU){
    console.log(`il vincitore è il bot, mi dispiace`)
}
else{
    console.log(`il vincitore sei tu`)
}



