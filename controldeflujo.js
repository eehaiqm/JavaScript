/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Ejemplo:

Tengo limpia mi playera de la suerte? //pregunta o instrucción que detona la condición
    true: entonces voy a la fiesta //repsuesta con su posible instrucción
    false: entonces me quedo a mimir //respuesta con su posible instrucción


*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/

//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.


//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edadFelipe = 17; //Debemos tomar en cuenta primero la edad de Felipe
let edadPermitida = 18;

if (edadFelipe < edadPermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta");
}


/*
Else (de otro modo - si no)

Utilizamos esta instrucción o sentencia para especificar que un bloque de código se ejecutará si la condición es verdadera, y otro bloque de código se ejecuta en caso de que la condición sea falsa.

Estructura básica del Else

if (condición) {
    //Este bloque se ejecuta si la condición es verdadera
} else{
    //Este bloque se ejecuta si la condición es falsa
}
*/

let edadAxel = prompt ("Ingresa tu edad");
let edadParaEntrarALaFiesta = 18;
if (edadAxel < edadParaEntrarALaFiesta){
    //Se ejecuta cuando es verdadero
    console.log("Lo siento, no puedes entrar a la fiesta")
} else {
    //Se ejecuta cuenado es falso
    console.log ("Felicidades, eres mayor y puedes entrar a la fiesta")
}

/*Test de nuestro programa (valores que también se evalúan como falsos)

    -prompt (strings): siempre falso (else)
    -false (boolean dispara verdadero)

*/

/* 
Else If (además si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condición en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.

Estructura básica del else if

if (condición 1) {
    //bloque de código que se ejecuta si la condición 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condición 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condición 1 es falsa y la condicion 2 también es falsa.
}else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas
}


Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion.

*/


let hora = prompt("Ingrese la hora actual");
if (hora < 12){
    console.log("Buenos días");
} else if (hora <= 19){
    console.log("Buenas tardes ya, qué bárbaro como pasa el tiempo");
} else {
    console.log("Buenas noches, vamos a mimir")
}
