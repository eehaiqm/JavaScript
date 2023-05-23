/*Tipos de variables

En JS tenemos 3 tipos principales de variables:


    - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa. 


    - let: Lo usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo o expresion (meter a la mama de bambi en una cajita), es una variable local.
 


    - const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia). 



*/

/*
Es este caso, la mama de Bambi esta visible desde cualquier lugar del programa
var mamaDeBambiViva = false;

var cazador = "listo para disparar";

let nombre = "Felipe Maqueda";

const pi = 3.1416;


let descuentoDeMiEcommerce = 10;

*/
/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon

*/


//1- Creamos la funcion con la palabra reservada function y le ponemos un nombre. Despues, abrimos y cerramos parentesis y abrimos y cerraremos llaves {}. Los parentesis son para nuestros parametros o argumentos, y las llaves para delimintar el bloque o la funcion.


//2- Ponemos nuestros parametros (variables) dentro de los parentesis

//3- Poner las instrucciones dentro de las llaves, utilizando los parametros o argumentos.

//4-Invocar la funcion escribiendo su nombre y abrimos y cerramos parentesis.




/*
function prepararAguitaDeLimon(){
    
    let limon = "limon";
    let agua = "agua";
    let hielos = "hielos";
    let azucar = "azucar";
    let vaso = "vaso";
    let cuchara = "cuchara";
    
    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("Agregamos los hielos al vaso " + hielos);
    console.log("Agregamos el agua al vaso " + agua);
    console.log("Endulzamos al gusto " + azucar);
    console.log("Mezclar y disfrutar " + cuchara);
    console.log("Que rica aguita de limon");

    console.log(cuchara);

}



prepararAguitaDeLimon();

console.log(recipiente);
*/
/*


// Ejemplo de las 3 formas de agregar parametros a funciones

//Primera forma: Usando parametros dentro de parentesis e inicializando dentro de la funcion
function suma(a, b){ //valores estan en undefined (declaro)

    //Inicializo
    var a = 5; //cambio el undefined por 5
    var b = 7; //cambio el undefined por el 7

    operacion = a + b; //hago mi suma utilizando los dos valores

    console.log(operacion); //imprimir mi operacion
}

suma(); //invocamos la funcion




//Segunda forma: Usando parametros dentro de parentesis, ya inicializados
function resta (a = 8, b = 5){

    operacion = a - b;

    console.log(operacion);

}

resta();



//Tercera forma: Inicializando valores dentro de la invocacion
function multiplicacion (a, b){
    operacion = a * b;
    console.log(operacion);
}

multiplicacion(3, 9);
multiplicacion(5, 7);
multiplicacion(13, 9);
multiplicacion(36, 97);
multiplicacion(11, 80);
multiplicacion(10, 3);
multiplicacion(13, ); //Se imprime NaN porque nos falta un parametros

*/

// Funciones anónimas

let funcionAnonima = function (a,b) {
    operacion = a/b;
    console.log(operacion)
}

funcionAnonima(10,5); 


/*
//Funcion pata dar un saludo personalizado
function saludo (nombresaludo){
        console.log("Hola "+nombresaludo+" que bueno que llegaste");
        
    }
saludo("Efraín");
*/
//Return

function saludo(){
    //declaro e inicializo mi valor del nombre
    let nombreSaludo = "Efraín";

    //Uso ese nombre para personalizar mi saludo
    console.log("Hola "+nombreSaludo+" que bueno que llegaste");

    //Finalizo la ejecuciín de mi función, y tomo el dato de la variable llamada nombreSaludo para poder verla (recordemos que está en un contexto local) y también para poder usarla después en otras operaciones
    return nombreSaludo; //limbo de las variables
}

//Para poder usar esa variable que hasta este momento sacamos de la función, pero que no d¿sabemos dónde está (porque está en el limbo de las funciones). Y en esta nueva variable ponemos la invocación de la función.

const nombrequesaquedemifuncion = saludo();

console.log("Esta persona inició sesión: "+ nombrequesaquedemifuncion);

