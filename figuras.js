//Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

//Código del triángulo
console.group("Triángulos")
// const trianguloLado1 = 6
// const trianguloLado2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " 
//     + trianguloLado1 
//     + "cm, " + trianguloLado2 
//     + "cm, " + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de  : " + alturaTriangulo + "cm");

function perimetroTriangulo(Lado1, Lado2, base) {
    return Lado1 + Lado2 + base;
} 
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();

//Código del círculo
console.group("círculos");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
// const PI = Math.PI;
// console.log(PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Interacción con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-square");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    let resultadoCuadrado = document.getElementById("square-result");
    
    resultadoCuadrado.textContent = "Perimetro: " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-square");
    const value = input.value;
    const area = areaCuadrado(value);
    let resultadoCuadrado = document.getElementById("square-result");
    
    resultadoCuadrado.textContent = "Area: " + area;
}