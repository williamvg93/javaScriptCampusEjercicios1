/* Imprimir el año en que nacio una persona */

function fecha(edad) {
    console.log(`Nacio en el año: ${2023-edad}`)
}

fecha(30)

/* Pasar de grados Celsius a grados Fahrenheit */

function grados(celsius){
    fahrenheit = (32 + ((9)*(celsius)/5))
    return `los grados (${celsius}) celsius a fahrenheit son: ${fahrenheit} `
}

console.log(grados(20))