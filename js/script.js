// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Completate inoltre l'esercizio di ieri e rivedete quanto svolto a lezione.
// Buon divertimento :ferris_wheel:


// dichiara le variabili per l'essere umano e il computer, assegna un numero random compreso tra 1 e 6
var playerHuman = Math.floor(Math.random() * 6) + 1;
var playerComputer = Math.floor(Math.random() * 6) + 1;



//con una condizione if verifica il vincitore, il perdente e se si verifica una parità ed infine stampa in html il risultato del lancio dei dadi
if (playerHuman > playerComputer) {
  document.getElementById('human').innerHTML = 'il vincitore del lancio dei dadi è playerHuman';
} else if (playerComputer > playerHuman) {
  document.getElementById('human').innerHTML = 'il vincitore del lancio dei dadi è playerComputer';
} else {
  document.getElementById('equality').innerHTML = 'nessun vincitore, risultato di parità, rilanciare i dadi';
}
