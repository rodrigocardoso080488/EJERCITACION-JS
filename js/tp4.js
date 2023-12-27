/*Clases, objetos y métodos
Crear objetos
Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apagar()
auto encendido
El auto se apagó

const Auto = {
    color: "rojo",
    marca: "honda",
    modelo: "etios",

    encender(){
        console.log("ENCENDISTE EL AUTO")
    },

    apagar(){
        console.log("APAGASTE EL AUTO")
    },
}
*/

/*Modelando clases
Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const Cuenta={
    titular:"Alex",
    saldo:0,

    ingresar(cantidad) {
        this.saldo=this.saldo+cantidad;
        console.log(`Se ingresó ${cantidad} a su cuenta. Ahora el dinero disponible es de ${this.saldo}`);
    },

    extraer (cantidad) {
        if (cantidad<=this.saldo) {
            this.saldo = this.saldo - cantidad;
            console.log(`Usted extrajo ${cantidad}, ahora su saldo es de ${this.saldo}`);
        }else{
            console.log(`No posee fondo suficiente`);
        }
    },

    informar (){
        console.log(`${this.titular}, su saldo actual es de ${this.saldo}`);
    },
}
*/

/*Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

class Rectangulos {
    constructor (ancho,alto){
        this.width=ancho;
        this.heigth=alto;
    };

    modificarPropiedades(nuevoAncho,nuevoAlto){
        this.width=nuevoAncho;
        this.heigth=nuevoAlto;
        console.log(`El nuevo ancho y alto ingresado es de ${this.width} y ${this.heigth} respectivamte.`);
    };

    mostrarDimensiones(){
        console.log(`EL perímetro del rectangulo es:`, 2 *this.width + 2* this.heigth);
        console.log(`EL área del rectangulo es:`, this.width * this.heigth);
    };

}

const Rectangulo1 = new Rectangulos(2,3);
const Rectangulo2 = new Rectangulos(4,6);
*/

/*
Producto - Dificultad:  🟢🟡
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
    constructor(codigo,nombre,precio){
        this.code=codigo;
        this.name=nombre;
        this.price=precio;
    };

    get imprimirDatos(){
        console.log(`El codigo es ${this.code}, el nombre: ${this.name} y su precio ${this.price}`);
    }
}

class Golosinas extends Producto {
    constructor(codigo,nombre,precio,marca){
        super(codigo,nombre,precio)
        this.type=marca;
    }
}
W
const Caramelos = new Golosinas (1,selva,10,arcor);
console.log(Caramelos.imprimirDatos);
const Chupetines = new Golosinas (2,chupachup,20,felfort);
console.log(Chupetines.imprimirDatos);
const Alfajores = new Golosinas (3,brownie,30,bariloche);
console.log(Alfajores.imprimirDatos);


/*
Generaciones - Dificultad:  🟢🟡🔴
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

/*
Libros - Dificultad:  🟢🟡🔴
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

/*
Agenda telefónica - Dificultad:  🟢🟡🔴
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/


/*
Ejercicios adicionales
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.*/
