console.log("");
console.log("Aquí inicia el ejercicio Jugueteria");
function peso(){
pesodepayasos = 112;
pesodemuñecas = 75;
numerodemuñecas = prompt("Ingrese el número de muñecas: ");
numerodepayasos = prompt("Ingrese el número de payasos: ");

pesopaquete = (pesodemuñecas*numerodemuñecas)  + (pesodepayasos*numerodepayasos)
alert("El peso del paquete es: " +pesopaquete+ " gramos")
console.log("El peso del paquete es: " +pesopaquete+ " gramos")
}
peso();