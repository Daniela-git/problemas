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
  // let stack = []
  let fail = false
  for (let i = 0; i < inputList.length; i++) {
    //guardamos los de abrir en una pila
    if (open(inputList[i])) {
      queue.push(inputList[i])
    } else {
      //miramos si el ultimo que se guardó en la pila es el abrir del cerrar que nos acabamos de encontrar 
      if(!pairs(queue.pop(),inputList[i])){
        fail = true;
        break;
      }
      // if((i+1<inputList.length && open(inputList[i+1])||(i==inputList.length-1))){
      //   let fin = false
      //   //comprobamos si hay errores de pares
      //   while(!fin){
      //     if(queue.length == 0 || stack.length == 0){
      //       fin = true
      //     }else if(!pairs(queue.pop(),stack.shift())){
      //       fail = true
      //       fin = true 
      //       break;
      //     }
      //   }
      // }
    }
  }
  console.log("Are the string rigth?: "+!fail)
}
rightPairs("[{[]}]{([])}") //true
rightPairs("[{[]}]{[])}") //false
rightPairs("[()]{}{[()()]()}") //true


