//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi. Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.
var nome = prompt("Inserisci il nome");
var sesso = prompt("Inserisci il sesso")
document.getElementById('testo').innerHTML =" " + nome;


if (sesso == "maschio") {
  var nome = document.getElementById('testo');
  nome.style.color = "blue";
} else if (sesso == "femmina") {
  var nome = document.getElementById('testo');
  nome.style.color = "pink";
}
