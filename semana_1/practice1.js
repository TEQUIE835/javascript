
// este es el primer ejercicio de mi tl donde se declara un nombre y se imprime en consola
let nombre = "David"
console.log(nombre)

/*Este es el segundo ejercicio donde se declaran dos variables de numeros, uno decimal
y otro entero y se imprimen junto a una cadena de texto*/
let entero = 10
let decimal = 10.8
console.log(`numero entero: ${entero} \nNumero decimal: ${decimal} \nNombre: ${nombre}`)


//tercer ejercicio donde se pone a prueba que pasa al cambiar el valor de una constante
const pi = 3.1416

console.log(pi)

// pi = 3.1415

// console.log(pi)


//cuarto ejercicio, probando que pasa si no se define una variable
let variable;

console.log(variable)


//quinto ejercicio que permite ver que imprimen estos valores
let nula = null

let booleano = true

console.log(`nulo: ${nula} \nBooleano: ${booleano}`)

//sexto ejercicio usando alert, prompt y confirm para ver como funcionan

alert("Bienvenido")

let edad = prompt(`Ingrese su edad: `, ``)

let confirmacion = confirm(`Tu edad es ${edad}? `)

console.log(`Edad: ${edad}\nconfirmacion: ${confirmacion}`)

//septimo ejercicio para ver como funcionan los operadores y sus resultados
let numero1 = 20
let numero2 = 3
let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion= numero1 * numero2
let division = numero1 / numero2
let modulo = numero1 % numero2
console.log(`Los numeros son: ${numero1} y ${numero2}\nSuma: ${suma}\nResta: ${resta}\nMultiplicacion: ${multiplicacion}\nDivision: ${division.toFixed(2)}\nModulo: ${modulo}`)


//octavo ejercicio concatenando dos cadenas de texto
let cadena1 = "Hola "
let cadena2 = "mundo"
let concatenacion = cadena1 + cadena2
console.log(concatenacion)


//noveno ejercicio mirando como funcionan los comparadores y sus resultados
let comparacion1 = 5=="5"
let comparacion2 = 5==="5"
let comparacion3 = true && false
let comparacion4= false || true
let comparacion5 =!true

console.log(`Comparacion 1: ${comparacion1}\nComparacion 2: ${comparacion2}\nComparacion 3: ${comparacion3}\nComparacion 4: ${comparacion4}\nComparacion 5: ${comparacion5}`)


//decimo ejercicio, prueba para usar condicionales 
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


//undecimo ejercicio, probando condicionales en cadenas de texto
let usuario = prompt(`Ingrese su nombre: `, ``)

if (usuario.toLocaleLowerCase() == "admin"){
    console.log(`Bienvenido señor administrador, como ha estado`)
} else{
    console.log(`Bienvenido`)
}

//decimo segundo ejercicio, prueb comparando para saber si un numero es par o no

let numerocomparar = prompt(`Ingrese un numero: `,``)
condicionalternario = (numerocomparar % 2 == 0)?"El numero es par":"El numero es impar"
console.log(condicionalternario)
