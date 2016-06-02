/*$(document).ready(funcion){
	var word = ["brugal", "barcelo", "legendario", "arehucas"];
	var random = Math.floor((Math.random()*phrases.length)+0);
	function refresh(){
		var word = random
	}
}*/


var word = ['brugal','barcelo','arehucas', 'cacique', 'legendario', 'bacardi', 'almirante', 'matusalen'];


var wordRandom = word[Math.floor(Math.random()*word.length)]; //Recibes las palabras al azar.
var wordRandomPosition1 = word[wordRandom]; //Supuestamente recibes el índice.

// OCULTAR PALABRAS:




//     PEDIR LAS LETRAS:

var arrayLetter = [];
var arrayVisual = [];

//crear un array vacío y añadir las letras de la palabra con un push.
//event.preventDefault();

//OBTENER LA PALABRA Y QUE APAREZCA POR GUIONES.

function getWordDash (wordRandomPosition){
    for(i=0; i < wordRandom.length; i++){ //Recorre la palabra escogida al azar y separa las letras una por una.
    var letter = wordRandom[i]; // Mi palabra es igual a mis letras. Con el for estoy leyendo y en la variable letter estoy guardando las letras una por una.
    arrayLetter.push(letter); // añadir en el array vacio las letras que ha leído una por una.
    var sustitute = letter.replace(letter, "_"); //replace necesita 2 parámetros.
    arrayVisual.push(sustitute);
    $('.palabra').text(arrayVisual.join(""));
    console.log(sustitute);
}
        console.log(arrayLetter);
};
//que me salgan las letras en letras usadas
  var error = 0;

$('#añadir').on('click', function(e){
  e.preventDefault();
  var info = $('#texto').val();
  var title = "<li>-" + info + "-</li>";

  var falsa = false;
//que cambie la letra a los guiones.
  $("#listusadas").append(title);
  for(i=0; i < arrayLetter.length; i++){

  		if(arrayLetter[i] === info){
        falsa=true;
  			arrayVisual[i] = info;
        console.log(arrayVisual);
  		$(".palabra").text(arrayVisual.join(""));
  		}
      
  }

if(!falsa){
  error = error + 1;
  $('#fallo1').text('Fallos: ' + error);
   
   if (error >= 5){
    alert("Has perdido");
    location.reload();
   }   
}

  if(info === wordRandom){
    $(".palabra").text(info);
    alert("You Win");
    location.reload();
  }
  document.getElementById('form').reset();

});







getWordDash(wordRandomPosition1);
