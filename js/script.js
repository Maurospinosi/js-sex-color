//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi. Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.
var nome = prompt("Inserisci il nome");
var sesso = prompt("Inserisci il sesso")
document.getElementById('testo').innerHTML =" " + nome;

var nome = document.getElementById('testo');

if (sesso == "maschio") {
  nome.style.color = "blue";
} else if (sesso == "femmina") {
  nome.style.color = "pink";
} else {
  alert("Nessun sesso inserito");
}
