/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad=prompt("Qué edad tienes?");

if (edad>18) {
    console.log("Ya puedes conducir");
}else{
    console.log("Eres menor de edad y no puedes conducir");
}
*/

/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente ,3-4: Insuficiente,5-6: Suficiente,7: Bien,8-9: Notable
10: Sobresaliente.
-Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido.
let numero=prompt("Ingrese un número del 0 al 10");
if (numero==0 || numero==1 || numero==2) {
    alert("Muy deficiente");
}else if (numero==3 || numero==4) {
    alert("Insuficiente");
}else if (numero==5 || numero==6) {
    alert("Suficiente");
}else if (numero==7) {
    alert("Bien");
}else if (numero==8 || numero==9) {
    alert("Notable");
}else if (numero==10) {
    alert("Sobresaliente");
}else if (numero>10) {
    alert("Número Erroneo");
}else{
    alert("Introduce un número válido")
}
*/ 
/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión (-). Nota: usar confirm().*/

/*
let cadenaDeTexto;
let confirmacion;
let textoConcatenado=""
do {
    cadenaDeTexto=prompt("Ingrese una cadena de texto")
    confirmacion=confirm("Ingrese aceptar para continuar ingresando cadena de texto o cancelar para que aparezca concatenado el texto ingresado")
    textoConcatenado = textoConcatenado + cadenaDeTexto + "-";
} while (confirmacion===true);
    document.write("El texto ingresado es:",textoConcatenado.slice(0,-1));*/

/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
/*
let numero;
let sumatoria=0;
let confirmacion;
do {
    numero=parseInt(prompt("Ingrese un número"));
    while (isNaN(numero) === true){
        alert("lo ingresado no es un número. por favor Ingrese un número");
        numero=parseInt(prompt("ingrese un número"))
    }
    sumatoria = sumatoria + numero;
    confirmacion=confirm("quiere seguir ingresando un numero")
} while (confirmacion === true);
    document.write("El número ingresado es:",sumatoria)
*/
/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’

let numeroDni;
let pregunta;
let resto;
do {
    numeroDni = parseInt(prompt("INGRESE SU NÚMERO DE DNI"));
    while (isNaN(numeroDni)===true) {
        alert("Lo ingresado no es un número, por favor ingrese un número")
        numeroDni = parseInt(prompt("INGRESE SU NÚMERO DE DNI"));
    }

    while (numeroDni<0 && numeroDni>99999999) {
        alert("Su número no esta comprendido entre 0 y 99999999, por favor ingrese un número válido")
        numeroDni = parseInt(prompt("INGRESE SU NÚMERO DE DNI"));
    }
    pregunta=confirm("INGRESE ACEPTAR PARA INGRESAR UN NUEVO NÚMERO DE DNI O CANCELAR PARA SALIR Y APAREZCA UNA LETRA CORRESPONDIENTE AL NÚMERO INGRESADO?")
} while (pregunta===true);
resto=numeroDni%23;
        switch (resto) {
            case 0:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: T")
                break;
            case 1:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: R")
                break;
            case 2:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: W")
                break;
            case 3:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: A")
                break;
            case 4:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: G")
                break;
            case 5:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: M")
                break;
            case 6:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: Y")
                break;
            case 7:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: F")
                break;
            case 8:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: P")
                break;
            case 9:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: D")
                break;
            case 10:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: X")
                break;
            case 11:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: B")
                break;
            case 12:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: N")
                break;
            case 13:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: J")
                break;
            case 14:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: Z")
                break;
            case 15:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: S") 
                break;
            case 16:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: Q")
                break;
            case 17:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: V")
                break;
            case 18:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: H")
                break;
            case 19:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: L")
                break;
            case 20:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: C")
                break;
            case 21:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: K")
                break;
            default:
                document.write("EL NÚMERO DE DNI LE CORRESPONDE LA LETRA: E")
                break;
        }
*/
/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….


let numero = 0; // El primer número que quiero imprimir, luego le sumare 1 en cada vuelta y se imprimirá el 2.
let veces = 30; // La cantidad de veces que quiero que empiece imprimiendo el número, luego le sumaré 1 para que se imprima 2 veces el siguiente número y asi sucesivamente.


for (let i = 0; i < veces; i++) { //iniciamos el bucle (para) con i=0, luego analizamos la condicion como 0 es menor a 30, se ejecuta lo que esta dentro del bloque. analizamos la segunda iteación. 2<30. como es V se ejecuta el bucle.
  numero=numero+1; //numero=0, le sumo 1, ahora numero=1. 
                   //en la seguda iteración se le suma 1 a 1, ahora numero=2.
                   //en la terecer iteracion. numero=3 y asi sucesivamente.
  for (let index = 0; index < numero; index++) {//como 0<1, se ejecuta lo que esta dentro del bucle. 
                                               //en la segunda iteración 1<2?. V, por lo tanto se vuelve a ejecutar el cuerpo del bucle interno.//en el tercer 3<2. F. se corta el bucle interno y pasa a ejecutarse la linea 197.
    document.write(numero);//Se imprime el 1.
    //se le suma 1 al index. ahora i=1. vuelve a analizarse la linea 190.
    //se imprime el 2. ahora i=2.
    //se imprime el 2 al lado del otro 2. vuelve a repetirse. el bucle.
  }
  document.write("<br>")
  //se imprime un salto el linea.
  //con i++ se suma 1. ahora i=2. vuelve a analizar la condición.
}
*/
/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

let numero=parseInt(prompt("Ingrese un número"));//ej. numero=3;
for (let i=0; i<=numero; i) { 
    //iniciamos el bucle (para) con i=0, luego analizamos la condicion: 0 es menor a 3? como es V, se ejecuta lo que esta dentro del bucle.
    // 2da iteración: 1<30. como es V, se ejecuta el bucle. línea 217.
    for (let j=0; j<numero; j++) {
    //1ra iteración: 0<3?como es V, se ejecuta lo que esta dentro del bucle.
    //2da iteración: 1<3?como es V, se vuelve a ejecutar el cuerpo del bucle.
    //en la 3ra iteración (2<3). como es V. por lo tanto se vuelve a ejecutar el cuerpo del bucle interno. linea 227. Y ASI SUCESIVAMENTE. HASTA QUE 30<30. F. SE CORTA EL BUCLE Y PASA EJECUTARSE LA LÍNEA 233.
      document.write(numero);
      //1ra vuelta: Se imprime el 3.
      //1ra vuelta: se le suma 1 a j. ahora j=1. vuelve a analizarse a repetirse el bucle.
      //2da vuelta. Se imprime OTRO 3 a lado del primero. (3 3).
      //2da vuelta: Se le suma 1 a j. ahora j=2. se vuelve a evaluar la condición.
      //3ra vuelta: se vuelve a imprimir otro 3.
      //3ra vuelta: Ahora j=3. se vuelve a evaluar la condición.(como j no es < a 3. se rompe el bucle y se ejecuta el bucle externo)
    }
    numero=numero-1; 
    //1ra vuelta: numero=3, le resto 1, ahora numero=2. 
    //2da iteración: Se le resta 1 a 2, ahora numero=1.
    //3ra iteración: numero=0. cuando se evalue la condición. sera F. fin de bucle.
    document.write("<br>")
    //1ra vuelta: Se imprime un salto de linea.
    //1ra vuelta: i queda igual. i=0. vuelve a analizar la condición.
  }
*/

/*8- Crea script para generar la siguiente pirámide con los números del 1 al número que indique el usuario (no mayor de 50).
1
12
123
1234
12345
123456
……


let numero = prompt("Por favor, introduce un número para generar la pirámide:");
//el programa le pide al usuario que ingrese un número > 1 y menor o igual a 50.
//la el numero ingresado se guarda en la variable numero. ej. numero=3
if (numero < 1 && numero > 50) {
  console.log("El número indicado no esta comprendido entre 1 y 50, por favor elija un nuevo número.");
  //el programa verifica la condicion. si numero es menor a 1 y mayor a 50, se muestra un mensaje en consola que que tiene que ingresar un núevo número. en el caso que sea falso. el programa entra en el bucle.
} else {
  for (let i = 1; i <= numero; i++) {
    let linea = "";
    //1ra vuelta:Se inicia el bucle. (i=1), se evalua la condición. 1<=3?como es V, se ejecuta lo que esta dentro del bucle.
    // Dentro de este bucle, se crea una variable linea que almacena una cadena vacía.
    //Se inicia un segundo bucle for que va desde 1 hasta el valor actual del primer bucle.
    //2da vuelta: Se evalua la condición: 2<=3? como es V, se ejecuta lo que esta dentro del bucle.
    for (let j = 1; j <= i; j++) {
      linea = linea + j;
      //1ra vuelta: Se inicia un segundo bucle for que va desde 1 hasta el valor actual del primer bucle. se verifica la condición, 1<=1. como es V. se ejecuta el bucle.
      //linea=""+ 1. linea=1,
      //Se incrementa j en 1. ahora j=2. y vuelve a evaluar la condicion. 2<=1. como es F. El programa sale del bucle.(No se ejecuta el cuerpo del bucle)
      //2da vuelta: Se evalua la condición. 1<=2? Como es V, se ejecuta el bucle. 
      //linea=2.
      //Se incrementa j en 1. ahora j=2
    }
    document.write(linea);
    document.write("<br>")
    //1ra vuelta: se imprime lo que tiene guardado linea. (1) y luego el programa hace un salto de línea. El valor de i se incrementa. ahora i=2.
  }
}
/*
/*
/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
.
.
etc


let num=0;

do {
    document.write(num=num+1);
    if (num%4===0) {
        document.write(' Es multiplo de 4');
    }else if (num%9===0) {
        document.write(' Es múltiplo de 9');
    }else if (num%5===0){
        document.write(' </br>');
        document.write('------------------------');
    }
    document.write("</br>")
}while(num<500);
    
*/

/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let fila=parseInt(prompt("Ingrese el número de fila"));// fila=2
let columna=parseInt(prompt("Ingrese el número de columna")); //ej columna=3
let numeroCelda=fila*columna; //numeroCelda=2*3=6

for (let i = 0; i < columna; i++) {
    //se evalua la condicion: 0<3? como es V, el programa ejecuta el bucle interno.
    for (let j = 0; j < fila; j++) {
        //se evalua la condición: 0<2? como es V, se ejecuta el bucle.
        //2do bucle. 1<2? como es V, se ejecuta el bucle.
        //3er bucle. 2<2? como es F. se corta el bucle.
        document.write(numeroCelda);
        //se imprime el valor 6.
        //2do bucle. se imprime el valor 5
        numeroCelda=numeroCelda-1;
        //se le resta 1 a 6. ahora, al salir del bucle, numeroDeCelda guarda el 5. Se suma 1 a j, ahora j=1. se vuelve a evaluar la condicion del bucle interno.
        //2do bucle. se le resta 1 a 5. ahora numeroCelda=4. se suma 1 j. ahora j=2. se vuelve a evaluar la condicion.
    }
    document.write("<br>")
    //Se imprime un salto en línea.
}
*/
/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math().

let edad1=parseInt(prompt("Ingrese la primera edad"));
let nombre1=prompt("Ingrese el primer nombre");
let edad2=parseInt(prompt("Ingrese la segunda edad"));
let nombre2=prompt("Ingrese el segundo nombre");
let edad3=parseInt(prompt("Ingrese la tercera edad"));
let nombre3=prompt("Ingrese el tercer nombre");

if (edad1 > edad2 && edad2 > edad3) {
    document.write(nombre1," es mayor a: ",nombre2," y ",nombre3);
}else if (edad2>edad1 && edad2>edad3) {
    document.write(nombre2," es mayor a: ",nombre1," y ",nombre3);
}else
    document.write(nombre3," es mayor a: ",nombre1," y ",nombre2);
*/
/*12- Realiza un script que genere un número aleatorio entre 1 y 99.

var numeroAleatorio = Math.floor(Math.random() * 99) + 1;
// con math.random genera un número aleatorio pero decimal.
// con math.floor redondea hacia abajo el número decimal a un entero.
console.log("EL NÚMERO ALEATORIO ES:",numeroAleatorio);
//imprimo en consola.
*/
/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto=prompt("Ingrese un texto");
let mayuscula=texto.toUpperCase(texto);
console.log("El texto pasado a mayuscula es:",mayuscula);
*/

/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = prompt("Introduce una cadena de texto:");// ej. hola. tiene cadena.lenght=4
let cadenaConGuiones = "";

for (let i = 0; i < cadena.length; i++) {
    //Dentro del bucle, se verifica si el carácter actual no es el último de la cadena (0<4? como es V, se ejecuta el condicional if). 
  if (i !== cadena.length - 1) {
    cadenaConGuiones += cadena[i] + "-";
    //Si no es el último, se agrega el carácter (cadena[i]) seguido por el signo ("-") a la variable cadenaConGuiones.
  } else {
    cadenaConGuiones += cadena[i];
    //Si el carácter es el último de la cadena, simplemente se agrega a la variable cadenaConGuiones sin el signo "-".
  }
}
console.log(cadenaConGuiones);
*/
/*15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto=prompt("Ingrese un texto");//ej. ingresamos; hola. hola.length=4. i=3
let textoMin=texto.toLowerCase()
let numeroDeVocales=0;//se crea esta variable para guardar la cantidad de vocales.

for (let i = 0; i < textomin.length; i++) {
    //se analiza la condicion del bucle: 0<4? como es V, se analiza el if.
    if (textoMin[i]==="a" || textoMin[i]==="e"|| textoMin[i]==="i" || textoMin[i]==="o" || textoMin[i]==="o") {
        //Se analiza letra por letra de cada palabra y se la compara con las vocales. Si es V, se ejecuta el cuerpo del if.
        numeroDeVocales+=1;
        //se almacena la vocal 
    }
}
document.write("El texto tiene: ",numeroDeVocales," vocales");
*/

/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto=prompt("Ingrese un texto");//ej. hola abc. lenght=8. index=7
let textoalrevez="";
let indiceDecreciente=texto.length

for (let index = 0 ; index < texto.length; index++) {
    //1ra vuelta. se analiza la sentencia. i=0. 0<7? como es v, se ejecuta el cuerpo del bucle.
    //2da vuelta: i=1. 1<7? como es V, 
    indiceDecreciente=indiceDecreciente-1; //1ra vuelta: indiceDecreciente=7. 
    //2da vuelta: indiceDecreciente=6.
    textoalrevez += texto[indiceDecreciente]; //1ra vuelta: Se guarda la ultima letra en la variable textoalrevez. Se le suma 1 a index. en la proxima vuelta. i=1.
    //2da vuelta: se guarda la letra b en la variable texto alrevez. i=2. asi sucesivamente hasta que de deje de index no sea < a texto.lenght. ej. 8<8? F. fin de buclee
}
document.write("El texto ingresado alrevez es: ", textoalrevez)
//se imprime todas la letras del texto alrevez.
*/

/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1.

let texto = prompt("Ingrese un texto. Te dire cual es la primera vocal y en que posición se encuentra");//ej. hola. textoMin.length=4
let textoMin = texto.toLowerCase();
let posicion=0;

for (let i = 0; i < textoMin.length; i++) {
    if (textoMin[i]==="a" || textoMin[i]==="e" || textoMin[i]==="i" || textoMin[i]==="o" || textoMin[i]==="o"){
        document.write("La primera vocal es: ", textoMin[i] , " y esta en la posición: ", i);
        i=textoMin.length;
    }
    if (i == textoMin.length-1){
        document.write("El texto ingresado no tiene vocales")
    }
}
*/