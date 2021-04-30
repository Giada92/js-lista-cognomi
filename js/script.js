/* Consegna:
1. chiedi all'utente il cognome
2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili. */

//chiedere all'utente il cognome
var cognomeUtente = prompt("Inserisci qui il tuo cognome!");
console.log(cognomeUtente);

//creare un array di cognomi
var cognomi = ["Michelangeli", "Andreini", "Frosini", "Sernicola"];
console.log(cognomi);

//inserire il cognome dell'utente nell'array precedentemente creato
cognomi.push(cognomeUtente);
console.log("Dopo aver fatto il push ", cognomi);

//stampare la lista dei cognomi in ordine alfabetico
cognomi.sort();
console.log("Ordine alfabetico ", cognomi);

for (var i = 0; i < cognomi.length; i++) {
    console.log(cognomi[i]);

    //var provvisoria = document.getElementById("lista_cognomi").innerHTML;
    document.getElementById("lista_cognomi").innerHTML += "<li> " + cognomi[i] + " </li>";
}


