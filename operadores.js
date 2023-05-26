/*

Operadores

Los operadores nos permiten realizar una operación en uno o varios operandos (variables o datos)

- Operadores de asignación
- Operadores de cadena
- Operadores lógicos
- Operadores de comparación
- Operadores aritméticos

*/

//Operadores de asignación

let edadFelipe = 31;
var recipiente = "cafe";

/* 

Operadores de comparación (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparación nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relación de sus valores.

*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

console.log("El valor 13 es menor que el valor 25 " + (numero1 < numero2));
console.log("El valor 13 es menor que el valor 25 " + (numero1 > numero2));
console.log("¿El valor 25 es mayor o igual que el valor 25? " + (numero2 >= numero3));

//Operador de igualdad (solo evalua valores)
console.log("El valor 25 es igual que el valor 25?" + (numero2 == numero3));

//Operador de igualdad estricta (evalua valores y tipos de datos)
console.log("El valor 25 es igual que el valor 25?" + (numero2 === numero3));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " +(numero2 != numero3));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? "+(numero2!==numero3));

/*

Operadores lógicos (&& (and), || (or), ! (not))

Los operadores lógicos nos devuelven un resultado a partir de que se cumpla (o no) una condición. EL e¿resultado será un valor boolean y sus operadores son lógicos o asimilables entre ellos (los podemos combinar, y, los podemos poner en un orden específico).

AND (&&)

Sirve para determinar si dos expresiones son verdaderas.

    -Si ambas expresiones son verdaderas, el resultado es verdadero.+
    -Si una de las dos expresiones es falsa, todo el resultado es falso.

OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.


NOT (!)

Sirve para mostrar lo contrario a lo que es estamos devolviendo


    */

//Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //verdadero

console.log("Se cumplen ambas afirmaciones? " +(afirmacion1 && afirmacion2)); //Imprime false porque una de las afirmaciones no es verdadera

//Ejemplo con OR (||)

afirmacion3 = (num1 > num2); //false
afirmacion4 = (num1 != num2); //verdadero

console.log("Se cumplen ambas afirmaciones? " +(afirmacion3 || afirmacion4)); //Imprime true porque al menos una afirmacion es verdadera

//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso

//Ejercicio de combinación de operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && (num5 != num3));

console.log(op);


//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = ((num5 > num2) && (num4 < num3)) || (!(num1 === num2) || (num3 != num3));
//      true               false            true               false
//                false                                true
//                                true

console.log(op2)



//Operadores aritméticos (+, -, *, /, %, **, ++, --)

/* 
+ (suma): suma dos o mas valores numericos
- (resta): resta dos o mas valores numericos
* (multiplicacion): multiplica dos o mas valores numericos
/ (division): divide dos o mas valores numericos
% (modulo o residuo) : retorna el residuo de una division
** (exponenciacion) : retorna el resultado de una potencia. Se escribe la base antes de los asteriscos, y el exponente despues de los asteriscos
++ (incremento) : incrementa un valor de uno en uno
-- (decremento) : decrementa un valor de uno en uno

*/
let valor1 = 55;
let valor2 = 17;

console.log("Suma: " , (valor1 + valor2));
console.log("Resta: ", (valor1 - valor2));
console.log("Multiplicación: ", (valor1 * 18));
console.log("División: ", (valor1 / valor2));
console.log("Residuo: ", valor1 % valor2); //no hay bronca si no se usa parentesis para la operación cuando no está concatenada (, en vez de +)
console.log("Exponente: ",valor1 ** valor2);
console.log("Incremento: ", ++valor1);
console.log("Decremento: ", --valor2);

