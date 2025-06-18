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

 let numerospares = numeros.filter(numero => numero%2 === 0)

for (let numero of numerospares){
    console.log(numero)
}

frutas.splice(2, 1, `Sandia`)
for (let fruta of frutas){
    console.log(fruta)
}
let cadenas = [`Hola`, `como`, `estas`]

let unidas = cadenas.join(` `)

console.log(unidas)

let nombres = [`David`, `Ana`, `Alberto`, `Alfredo`, `Emanuel`, `Daniel`]

for (nombr of nombres){
    console.log(nombr)
}
nombres.sort

for (nombr of nombres){
    console.log(nombr)
}

nombres.reverse
for (nombr of nombres){
    console.log(nombr)
}

let buscar = prompt(`Ingrese el nombre a buscar: `, ``)

for (nombr of nombres){
    if (nombr.toLocaleLowerCase() == buscar.toLocaleLowerCase()){
        console.log(`Tu nombre se encuentra en la lista`)
        break
    }
}

for (let letra of `comida`){
    console.log(letra)
}

for(let i = 1; i <= 5; i++){
    console.log(i)
}

for(let letra in `comida`){
    console.log(`${letra} ${`comida`[letra]}`)
}

for (let nombr of nombres){
    console.log(`Hola ${nombr}`)
}

for (let color in colores){
    console.log(color)
}

for (let numero in numeros){
    console.log(`el numero ${numeros[numero]} esta en la posicion ${numero}`)
}

const persona = {}

persona.cabello = "Negro"
persona.ojos = "verde"

console.log(persona)


const libro = {}

libro.genero = "fantasia"

libro.autor = "jorge"

console.log(libro)

libro.genero = "ciencia ficcion"
console.log(libro)

const auto = {}

auto.marca = "Hyundai"

auto.modelo =  "Kona"

auto.year = "2021"

console.log(auto)

const estudiante = {}

estudiante.cabello = "marron"
estudiante.notas = "promedio"
estudiante.ojos = "marron oscuro"

for (let prop in estudiante){
    console.log(prop,` `, estudiante[prop])
}

function saludar(nombre){
    console.log(`Hola ${nombre}!`)
}

saludar(`Alberto`)

function suma (num1, num2){
   let num3 = num1+num2

   return num3
}

nume = suma(2, 4)

console.log(nume)


function espar(numero){
   let par = numero % 2

   if (par==0){
    console.log(`Es par`)
    return true
} else if (par != 0){
    console.log(`No es par`)
    return false
} else{
     console.log(`Ingrese un numero valido`)
}
}
let par = espar(4)
let impar = espar(5)

console.log(par, ` `, impar)

function areaRectangulo(base, altura){
    let area = base * altura
    return area
}

let area = areaRectangulo(5, 3)

console.log(area)


function celsiusAFarenheit(c){
    f = c * 1.8 +32
    return f
}

let farenheit = celsiusAFarenheit(25)

console.log(farenheit)