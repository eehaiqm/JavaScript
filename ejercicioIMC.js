pesoLibras = prompt("Dame tu peso en libras ");
estaturaCm = prompt("Dame tu estatura en cm ");
pesoKg = pesoLibras*0.453592;
estaturaM = estaturaCm/100;

IMC = pesoKg/(Math.pow(estaturaM,2))

    if (IMC < 16){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Criterio de ingreso" );
    } else if(IMC <= 16.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Infrapeso" );
    } else if(IMC <= 18.4){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Bajo peso" );
    } else if(IMC <= 24.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Peso Normal" );
    } else if(IMC <= 29.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Sobrepeso" );
    }  else if(IMC <= 34.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Obesidad Premórbida" );
    } else if(IMC <= 45){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Obesidad mórbida");
    } else if(IMC > 45){
        console.log("Su peso es " + pesoKg.toFixed(2) + " kg, su IMC es: " + IMC.toFixed(2) + ", de acuerdo a la OMS la clasificación de su IMC es: Obesidad hipermórbida" );
    }else {
        console.log("Actualice la página e ingrese de nuevo su peso en libras y su estatura en centímetros (usando solo números)");
    }

