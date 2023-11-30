/*Obtener la base y la altura de un triangulo, y el radio de un circulo. Mostrar por consola el area del triangulo y del circulo con un mensaje detallando cual es cual.

Recordar:
--Area de triangulo: (base x altura)/2
--Area del circulo: π(pi) x radio^2

*Para aumentar la dificultad lograr que el usuario brinde los datos necesarios para calcular (interactuando) y mostrarle en pantalla el resultado.*/

let base=prompt('Ingrese la base del triangulo');
let altura=prompt('Ingrese la altura del triangulo');
let radio=prompt('Ingrese la el radio del circulo');
const pi=3.14;

let areaTriangulo=(base*altura/2);
let areaCirculo=pi*(Math.pow(radio, 2));

console.log('El área del triángulo es:',areaTriangulo);
document.write("El área del triángulo es: ", areaTriangulo)
console.log('El área del círculo es:',areaCirculo);
document.write('<br>'+"El área del círculo es: ", areaCirculo)



