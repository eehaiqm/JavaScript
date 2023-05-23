//alert("Estoy vivo");

/*
Variables

Es un elemnto dle cual su valor puede cambiar en función de las circunstancias. Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable.


*/

recipiente = "agua";
recipiente = "café";
recipiente = "colores y lápices";

//Usamos esta línea de código para imprimir o mostrar la información de mi recipiente.

console.log(recipiente);

//Declarar vs inicializar

/*
quieresserminovia;
edad;
altura;
peso;
*/

/*

Tipos de datos (primitivos y no primitivos)

Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato más simple o más básico que existe.

    -String: Sirve para agregar valores en forma de tecto. para que se considere así, el valor debe estar dentro de comillas simples (''), dobles ("") y backsticks (``)

    -Number: Sirve para agregar valores en formato numérico (para poder usarlos en operaciones aritméticas). Estos valores no usan comillas.

    -Boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, sí y no).

    -Undefined: Sirve para representar una variable o un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.


    -Null: Sirve para definir intencionalmente que un valor es nulo. (dejar listo el recipiente para adoptar un valor conforme el programa lee)

    -NaN (not a number)
    
    -Symbol

    -Object (no es primitivo)

*/

// Ejemplo para la concatenacion

apodoDeFelipe = 'El "amante numero uno" de los chilaquiles verdes';
console.log(apodoDeFelipe);


// Ejemplos de valores numericos

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);


// Ejempos de valores booleanos
esAdministrador = true;
contraseniaCorrecta = false;
cuentaPremium = false;


// Ejemplos de datos indefinidos
//respuestaDeMiCrush;
//precioBoletoEstacionamiento;




//Ejemplos de valores nulos
respuestaDeMiCrush = "no";

respuestaDeMiCrush = null;

respuestaDeMiCrush = "si";

console.log(respuestaDeMiCrush);



// Ejemplo con valores NaN

operacionMatematica = 0/0;

console.log(operacionMatematica);



/* TypeOf 

Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.



*/
console.log(typeof(esAdministrador)); //boolean
console.log(typeof(edadDeFelipe)); // number
console.log(typeof(operacionMatematica)); //number

console.log(typeof(false)); //boolean


