
/*
* Existen las funciones normales las cuales seguiran en uso pero intentaremos usar las funciones de flechas
* ya que estas mejoraran el programa
*/

// Ejemplo funcion normal
function sumar(a, b) {
    return a + b;
}
//imprime: 
//console.log(sumar(10, 5));

// Ejemplo funcion Flecha
const sumar2 = (c, d) => {
    return c + d;
}
//Imprime:
//console.log(sumar2(10, 5));


// Tambien podemos decir que si es solo una linea de instrucciones podriamos resumir a :
const sumar3 = (c, d) =>  c + d;
//Imprime:
//console.log(sumar3(10, 5));