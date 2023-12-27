/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
Output:
lista de meses:
-enero
-febrero
-marzo
-Abril
-etc

let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
document.write("Listado de meses:")
for (let i = 0; i < meses.length; i++) {
    document.write("<ul><li>"+ meses[i] + "</li></ul>");;
}
*/

/*2- 
A- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar se debe mostrar el arreglo generado. 
B- Mostrar la longitud del arreglo.
C- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
D- Añade en última posición la ciudad de París.
E- Escribe por pantalla el elemento que ocupa la segunda posición.
F- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
Output: ver el tp en el campus.

let seguirAgregando;
let ciudad;
let ciudades=[];

do {
    ciudad=prompt("Ingrese una ciudad para agregar a su lista de array");
    if (ciudad === null) {
        document.write("Lo ingresado no es una ciudad, Por favor ingrese una ciudad válida");
    }else
        ciudades.push(ciudad);
        seguirAgregando=confirm("Deseas seguir agregando ciudad a su arreglo");
} while (seguirAgregando);
document.write("A-El arreglo de ciudades es: [", ciudades, "]");
document.write("<br>");
document.write("B-La longitud del arreglo es: ", ciudades.length);
document.write("<br>");
document.write("C-La primera posición del array es: ", ciudades[0], ", la tercera posición del array es: ", ciudades[2], ", y la última posición del array es: ", ciudades[ciudades.length-1]);
document.write("<br>");
ciudades.push("París")
document.write("D-El nuevo arreglo generado luego de agreagar París es: [", ciudades, "]");
document.write("<br>");
document.write("E-El elemento que ocupa la segunda posición es: ", ciudades[2]);
document.write("<br>");
ciudades.splice(2,0,"Barcelona")
document.write("F-El nuevo arreglo generado luego de sustituir la ciudad que se encontraba en la segunda posición por la ciudad de barcelona es: ",ciudades);
*/

/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
Ejemplo de salida:
let numero1;
let numero2;
let suma;
let arrSuma=[];
let numeroApariciones;
let sumaAparicion2=0;
let sumaAparicion3=0;
let sumaAparicion4=0;
let sumaAparicion5=0;
let sumaAparicion6=0;
let sumaAparicion7=0;
let sumaAparicion8=0;
let sumaAparicion9=0;
let sumaAparicion10=0;
let sumaAparicion11=0;
let sumaAparicion12=0;

for (let i = 0; i <= 50; i++) {
    suma=0;
    numero1 = Math.floor(Math.random() * 6) + 1;
    numero2 = Math.floor(Math.random() * 6) + 1;
    suma = numero1 + numero2;
    arrSuma.push(suma);

}

document.write("El resultado de la suma de los lanzamiento de los dados es: [", arrSuma,"]");
document.write("<br>");

for (let index = 0; index < arrSuma.length; index++) {
    numeroApariciones = arrSuma[index];
    
    if (numeroApariciones === 2) {
        sumaAparicion2=sumaAparicion2+1;
    }else if(numeroApariciones === 3){
        sumaAparicion3=sumaAparicion3+1;
    }else if(numeroApariciones === 4){
        sumaAparicion4=sumaAparicion4+1;
    }else if(numeroApariciones === 5){
        sumaAparicion5=sumaAparicion5+1;
    }else if(numeroApariciones === 6){
        sumaAparicion6=sumaAparicion6+1;
    }else if(numeroApariciones === 7){
        sumaAparicion7=sumaAparicion7+1;
    }else if(numeroApariciones === 8){
        sumaAparicion8=sumaAparicion8+1;
    }else if(numeroApariciones === 9){
        sumaAparicion9=sumaAparicion9+1;
    }else if(numeroApariciones === 10){
        sumaAparicion10=sumaAparicion10+1;
    }else if(numeroApariciones === 11){
        sumaAparicion11=sumaAparicion11+1;
    }else{
        sumaAparicion12=sumaAparicion12+1;
    }
}
document.write("El numéro 2 apareció : ", sumaAparicion2, " veces");
document.write("<br>");
document.write("El numéro 3 apareció : ", sumaAparicion3, " veces");
document.write("<br>");
document.write("El numéro 4 apareció : ", sumaAparicion4, " veces");
document.write("<br>");
document.write("El numéro 5 apareció : ", sumaAparicion5, " veces");
document.write("<br>");
document.write("El numéro 6 apareció : ", sumaAparicion6, " veces");
document.write("<br>");
document.write("El numéro 7 apareció : ", sumaAparicion7, " veces");
document.write("<br>");
document.write("El numéro 8 apareció : ", sumaAparicion8, " veces");
document.write("<br>");
document.write("El numéro 9 apareció : ", sumaAparicion9, " veces");
document.write("<br>");
document.write("El numéro 10 apareció : ", sumaAparicion10, " veces");
document.write("<br>");
document.write("El numéro 11apareció : ", sumaAparicion11, " veces");
document.write("<br>");
document.write("El numéro 12 apareció : ", sumaAparicion12, " veces");

*/
/*Funciones
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const numeroEntero=function(n) {
    if (n%2===0) {
        return "El número ingresado es PAR";
    }else
        return "El número ingresado es IMPAR";
}
*/

/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const cadenaTexto=function(texto) {
    if (texto===texto.toUpperCase()){
        console.log("El texto ingresado tiene mayuscula");
    }else if(texto===texto.toLowerCase()){
        console.log("El texto ingresado tiene minuscula");
    }else{
        console.log("El texto ingresado tiene mayúsculas y minúsculas");
    }
}  
*/

/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.*
La fórmula del perímetro  es p = 2*(a +b).
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58

const CalculoPerímetro = function (base,altura) {
    let perímetro = 2*(base*altura);
    return perímetro
}
*/

/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const tabla = function (x) {
    for (let i = 0; i <=10 ; i++) {
        let resultado = (i * x);
        if (resultado<=10) {
            console.log (resultado);
        }
    }
}
*/