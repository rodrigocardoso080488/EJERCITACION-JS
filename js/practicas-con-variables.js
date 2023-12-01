
/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("hola coder")*/

/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("Hello World")*/




/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3+5)*/





/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: input: Coder. Output: Hola Coder.

let nombreUsuario=prompt("Ingrese su nombre de usuario");

document.write("Hola ",nombreUsuario);*/



/*5.-Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt.

let numero1=parseInt(prompt("Escriba el primer número que desee sumar"));
let numero2=parseInt(prompt("Escriba el segundo número que desee sumar"));

document.write("El resultado de la suma de ambos números es: ",(numero1+numero2))*/





/*6-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: input: 15 , 3.Output: El 15 es el número más grande.

let numero1=parseInt(prompt("Escriba el primer número"));
let numero2=parseInt(prompt("Escriba el segundo número"));

if (numero1>numero2) {
    document.write("El primer número ingresado: ", numero1, " ,es mayor al segundo número ingresado ", numero2,".")
}else{
    document.write("El primer número ingresado: ", numero1, " ,es menor al segundo número ingresado ", numero2,".")
}*/

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: input: 15,3,9. Output: El 15 es el número más grande.

let numero1=parseInt(prompt("Escriba el primer número"));
let numero2=parseInt(prompt("Escriba el segundo número"));
let numero3=parseInt(prompt("Escriba el tercer número"));

if (numero1>numero2 && numero1>numero3) {
    document.write("El primer número ingresado: ", numero1, " ,es mayor número ingresado")
} else if(numero2>numero1 && numero2>numero3) {
    document.write("El segundo número ingresado: ", numero2, " ,es el mayor número ingresado")
}else
    document.write("El tercer número ingresado: ", numero3, " ,es el mayor número ingresado");
*/

/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: input: 10, input: 15.Output: El 10 es divisible por 2.Output: El 15 no es divisible por 2.

let numero=parseInt(prompt("Escriba un número para ver si es divisible en 2"));


if (numero % 2 === 0) {
    document.write("El número ingresado es divisible en 2")
}else
    document.write("El número ingresado no es divisible en 2")
*/

/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen.
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:input: Hola mundo. Output: oauo.


let frase=prompt("ingrese una frase. Te dire cuales son las vocales que aparecen");
let longitud=frase.length;
let vocal=""
for (let index = 0; index < frase.length; index++) {
    let letra=frase.charAt(index)
        if (letra==="a" || letra==="e"||letra==="i"||letra==="o"||letra==="u") {
            vocal=vocal+letra;
    }
}
document.write("las vocales extraidas son: ",vocal)
*/
/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: input: 20. Output: El 20 es divisible por 2.

let numero=prompt("Ingrese un número");

if (numero%2===0) {
    document.write("El ",numero," es divisible por 2");
}else if(numero%3===0){
    document.write("El ",numero," es divisible por 3");
}else if(numero%5===0){
    document.write("El ",numero," es divisible por 5");
}else if(numero%7===0){
    document.write("El ",numero," es divisible por 3");
}else
    document.write("El ",numero," no es divisible por 2,3,5 o 7")
*/

/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: input: 20,input: 210.Output: El 20 es divisible por 2 y por 5.Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let numero=prompt("Ingrese un número");

if (numero%2===0 && numero%3===0 && numero%5===0 && numero%7===0){
    document.write("El numero ingresado es divisible por 2, por 3, por 5 y 7")
}else if(numero%2===0 && numero%3===0 && numero%5===0){
    document.write("El numero ingresado es divisible por 2, por 3 y por 5");
}else if(numero%2===0 && numero%3===0 && numero%7===0){
    document.write("El numero ingresado es divisible por 2, por 3 y por 7");
}else if(numero%3===0 && numero%5===0 && numero%7===0){
    document.write("El numero ingresado es divisible por 3, por 5 y por 7");
}else if(numero%2===0 && numero%3===0){
    document.write("El numero ingresado es divisible por 2 y 3");
}else if(numero%2===0 && numero%5===0){
    document.write("El numero ingresado es divisible por 2 y 5");
}else if(numero%2===0 && numero%7===0){
    document.write("El numero ingresado es divisible por 2 y 7");
}else if(numero%3===0 && numero%5===0){
    document.write("El numero ingresado es divisible por 3 y 5");
}else if(numero%3===0 && numero%7===0){
    document.write("El numero ingresado es divisible por 5 y 7");
}else if(numero%5===0 && numero%7===0){
    document.write("El numero ingresado es divisible por 2 y 7");
}else if (numero%2===0) {
    document.write("El numero ingresado es divisible por 2");
}else if(numero%3===0){
    document.write("El numero ingresado es divisible por 3");
}else if(numero%5===0){
    document.write("El numero ingresado es divisible por 5");
}else if(numero%7===0){
    document.write("El numero ingresado es divisible por 7");
}else
    document.write("El numero ingresado NO es divisible ni por 2, ni por 3, ni por 5 o por 7")

*/