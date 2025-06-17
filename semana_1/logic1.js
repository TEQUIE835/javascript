let lado1;
let lado2;
let lado3;
while(true){
    while(true){
        lado1 = prompt(`Ingrese un lado`, `0`)
        try{
        lado1 = parseFloat(lado1)
        if (lado1>0){
            break
        } else{
            console.error(`Ingrese un numero valido`)
            alert(`Ingrese un numero valido`)
        }
        } catch (error){
            console.error(`No se ingreso un numero valido`, error)
            alert(`Ingrese un numero valido`)
        }

    }
        
    while(true){
        lado2 = prompt(`Ingrese el segundo lado`, `0`)
        try{
        lado2 = parseFloat(lado2)
        if (lado2>0){
            break
        } else{
            console.error(`Ingrese un numero valido`)
            alert(`Ingrese un numero valido`)
        }
        } catch (error){
            console.error(`No se ingreso un numero valido`, error)
            alert(`Ingrese un numero valido`)
        }

    }
    while(true){
        lado3 = prompt(`Ingrese el segundo lado`, `0`)
        try{
        lado3 = parseFloat(lado3)
        if (lado3>0){
            break
        } else{
            console.error(`Ingrese un numero valido`)
            alert(`Ingrese un numero valido`)
        }
        } catch (error){
            console.error(`No se ingreso un numero valido`, error)
            alert(`Ingrese un numero valido`)
        }

    }
    if (lado1 < lado2+lado3 || lado2 < lado1 + lado3 || lado3 < lado1 + lado2){
        
        break
    }
    else{
        console.error(`El triangulo no es valido`)
        alert(`El triangulo no es valido`)
    }

}

if (lado1 === lado2 && lado3 === lado2){
    console.log(`El triangulo es equilatero`)
    alert(`El triangulo es equilatero`)
} else if (lado1===lado2 || lado2===lado3 || lado1 === lado3){
    console.log(`El triangulo es isoceles`)
    alert(`El triangulo es isoceles`)
} else if(lado1 != lado2 && lado3 != lado1 && lado2!=lado3 ){
    console.log(`El triangulo es escaleno`)
    alert(`El triangulo es escaleno`)
}


let frutas = [`manzana`, `mango`, `pera`, `fresa`, `banana`]

for ( let fruta of frutas){
    console.log(fruta)
}
frutas.splice(2,1)
for ( let fruta of frutas){
    console.log(fruta)
}

let numeros = [1, 2, 3, 4, 5, 6]

for (let numero of numeros){
    console.log(numero)
}
numeros.push(7)
for (let numero of numeros){
    console.log(numero)
}
frutas.unshift(`Pera`)
for ( let fruta of frutas){
    console.log(fruta)
}
 let colores = [`verde`, `rojo`, `marron`, `amarillo`, `azul`, `morado`]
 for (let color of colores){
    console.log(color)
 }
 colores.pop
 for (let color of colores){
    console.log(color)
 }

 