/*
Input: Un string con conjuntos de alguno de estos simbolos[({})]
Output: Decir si el string entrante tiene una combinación correcta, es decir, si el abrir y cerrar de los diferentes simbolos es correcto
Example:
[{[]}]{([])} ---- correcto
[(])[{} --- incorrecto
*/
function open(caracter){
  if (caracter === "{" || caracter === "[" || caracter === "("){
    return true
  }else{
    return false
  }
}
function pairs(start, end){
  if(start === "[" && end==="]"){
    return true
  }else if(start === "{" && end==="}"){
    return true
  }else if(start === "(" && end===")"){
    return true
  }else{
    return false
  }
}
function rightPairs(input) {
  let inputList = input.split("");
  let queue = []
  let stack = []
  let fail = false
  for (let i = 0; i < inputList.length; i++) {
    //guardamos los de abrir en una pila y lo de cerrar en una cola
    if (open(inputList[i])) {
      queue.push(inputList[i])
    } else {
      stack.push(inputList[i])
      //mirarmos si el elemento siguiente es o no uno de abrir
      if((i+1<inputList.length && open(inputList[i+1])||(i==inputList.length-1))){
        let fin = false
        //comprobamos si hay errores de pares
        while(!fin){
          if(queue.length == 0 || stack.length == 0){
            fin = true
          }else if(!pairs(queue.pop(),stack.shift())){
            fail = true
            fin = true 
            break;
          }
        }
      }
    }
  }
  console.log("Are the string rigth?: "+!fail)
}
rightPairs("[{[]}]{([])}")
rightPairs("[{[]}]{[])}")
rightPairs("[()]{}{[()()]()}")


