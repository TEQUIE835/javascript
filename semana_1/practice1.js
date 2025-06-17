let nombre = "David"
console.log(nombre)
let entero = 10
let decimal = 10.8
console.log(`numero entero: ${entero} \nNumero decimal: ${decimal} \nNombre: ${nombre}`)

const pi = 3.1416

console.log(pi)

// pi = 3.1415

// console.log(pi)

let variable;

console.log(variable)

let nula = null

let booleano = true

console.log(`nulo: ${nula} \nBooleano: ${booleano}`)

alert("Bienvenido")

let edad = prompt(`Ingrese su edad: `, ``)

let confirmacion = confirm(`Tu edad es ${edad}? `)

console.log(`Edad: ${edad}\nconfirmacion: ${confirmacion}`)

let numero1 = 20
let numero2 = 3
let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion= numero1 * numero2
let division = numero1 / numero2
let modulo = numero1 % numero2
console.log(`Los numeros son: ${numero1} y ${numero2}\nSuma: ${suma}\nResta: ${resta}\nMultiplicacion: ${multiplicacion}\nDivision: ${division.toFixed(2)}\nModulo: ${modulo}`)

let cadena1 = "Hola "
let cadena2 = "mundo"
let concatenacion = cadena1 + cadena2
console.log(concatenacion)

let comparacion1 = 5=="5"
let comparacion2 = 5==="5"
let comparacion3 = true && false
let comparacion4= false || true
let comparacion5 =!true

console.log(`Comparacion 1: ${comparacion1}\nComparacion 2: ${comparacion2}\nComparacion 3: ${comparacion3}\nComparacion 4: ${comparacion4}\nComparacion 5: ${comparacion5}`)

let numero = prompt(`Ingrese un numero: `, ``)

if (numero > 10){
    console.log(`Tu numero es mayor a 10`)
} else if (numero<10){
    console.log(`Tu numero es menor de 10`)
}else if (numero==10){
    console.log(`Tu numero es igual a 10`)
} else{
    console.log(`Ingrese un numero valido`)
}


let usuario = prompt(`Ingrese su nombre: `, ``)

if (usuario.toLocaleLowerCase() == "admin"){
    console.log(`Bienvenido señor administrador, como ha estado`)
} else{
    console.log(`Bienvenido`)
}

let numerocomparar = prompt(`Ingrese un numero: `,``)
condicionalternario = (numerocomparar % 2 == 0)?"El numero es par":"El numero es impar"
console.log(condicionalternario)
