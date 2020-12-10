/*
La entrada: una cadena de texto que puede incluir signos de puntuación y letras en diferentes tipos (mayus y minus)
Salidad: decir cuantas veces esta cada palabra
*/
function normalize(input){
  input = input.toLocaleLowerCase();
  let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g;
  input = input.replace(regex, "");
  return input
}
function countWords(input){
  input = normalize(input)
  let listInput = input.split(" ");
  let dicc = {}

  for (const word of listInput) {
    if(word in dicc){
      ++dicc[word]
    }else{
      dicc[word]=1
    }
  }
  return dicc;

}
let input =
	"Hola que tal, bienvenidos un dia mas a Bettatech. En el dia de hoy vamos a resolver problemas";

console.log(countWords(input))