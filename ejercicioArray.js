numeros = [2, 6, 1, 7, 4 , 3, 4 , 5];
valor = 8;
listNum = [];
/* console.log(numeros.filter(x => x % 2 == 0)) */

for (i in numeros) {
    /* console.log(numeros[i]) */
    for (l in numeros) {
        let arregloNumeros = [];
        if (numeros[i] + numeros[l] == 8) {
            arregloNumeros.push(numeros[i]);
            arregloNumeros.push(numeros[l]);
            listNum.push(arregloNumeros);
        }
    }
}
console.log(listNum)
