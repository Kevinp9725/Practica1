const matriz1 = [17,9,36,8,7,3,15,28,87]
const matriz2 = [9,21,36,16,65,4,12,28,31]
const mayor1 = []
const mayor2 = []
const igual = []

for (let i = 0; i < matriz1.length-1; i++) {
    if (matriz1[i] > matriz2[i])
    {
        mayor1.push(matriz1[i]);
    } 
    else if (matriz1[i] < matriz2[i])
    {
        mayor2.push(matriz2[i]);
    }
    else if (matriz1[i] == matriz2[i])
    {
        igual.push(matriz1[i]);
    }
}

console.log("El arreglo 1 contiene " + mayor1.length + " elementos mayores")
console.log("El arreglo 2 contiene " + mayor2.length + " elementos mayores")
console.log("Existen " + mayor1.length + " iguales en ambos arreglos")