//Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

//Código del triángulo
console.group("Triángulos")
const trianguloLado1 = 6
const trianguloLado2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " 
    + trianguloLado1 
    + "cm, " + trianguloLado2 
    + "cm, " + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de  : " + alturaTriangulo + "cm");

const perimetroTriangulo = trianguloLado1 + trianguloLado2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();

//Código del círculo
console.group("círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log(PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro o circunferencia del círculo es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm²");

console.groupEnd();