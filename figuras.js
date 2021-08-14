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

//Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("triangle-input-side1").value);
    const lado2 = Number(document.getElementById("triangle-input-side1").value);
    const base= Number(document.getElementById("triangle-input-base").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    let resultadoTriangulo = document.getElementById("triangle-result");
    
    resultadoTriangulo.textContent = "Perimetro: " + perimetro;
} 

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("triangle-input-base").value);
    const altura = Number(document.getElementById("triangle-input-height").value);
    const area = areaTriangulo(base, altura);
    let resultadoTriangulo = document.getElementById("triangle-result");

    resultadoTriangulo.textContent = "Area: " + area;
}

function calcularAlturaTrianguloIsosceles(){
    const lado1 = Number(document.getElementById("triangle-input-side1").value);
    const lado2 = Number(document.getElementById("triangle-input-side2").value);
    const base = Number(document.getElementById("triangle-input-base").value);
    let resultadoTriangulo = document.getElementById("triangle-result");

    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - (base **2 / 4));;

        resultadoTriangulo.textContent = "Altura (Triangulo isosceles): " + altura;
    }
    else{
        resultadoTriangulo.textContent = "No es un triangulo isosceles";
    }
}
/* --------------------Final del bloque geometría--------------------------------*/

/********************Bloque Porcentajes y descuento*********************/
const precioOriginal = 120;
const descuento = 18;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickPriceDiscount() {
    const price = Number(document.getElementById("inputPrice").value);
    const discount = Number(document.getElementById("inputDiscount").value);

    const result = calcularPrecioConDescuento(price, discount);
    const resultPrg = document.getElementById("resultPrice");
    resultPrg.innerText = "El precio con descuento es: $" + result;

    // validation1 = document.getElementById("input-price").reportValidity();
    // validation1 = document.getElementById("input-discount").reportValidity();
    // if(validation1 === true && validation2 === true){ // el true dice que el usuario pasó los parámetros que le pusimos, después si puede recibir el precio final. (también puede ser false si falló en algo)
    //     const inputPriceValue = document.getElementById("input-price").value;
    //     const inputDiscountValue = document.getElementById("input-discount").value;
    //     const offPriceParsed = parseFloat(calculateOffPrice(inputPriceValue, inputDiscountValue).toFixed(2));
    // } 
}

/* primera manera */
// const coupons = [
//     "super",
//     "especial",
//     "expert",
// ];

/* Cupón y valor en el mismo lugar */
const coupons = [
    {
        name: "super",
        discount: 15,
    },
    {
        name: "especial",
        discount: 30,
    },
    {
        name: "expert",
        discount: 25,
    },
];

function onClickPriceCoupon() {
    const price = Number(document.getElementById("inputPriceCoupon").value);
    const coupon = document.getElementById("inputCoupon").name;

    // let discount;

    if (!coupons) {
        alert("El cupón " + coupon + " no es válido");
    } else {
        const discount = coupons.discount;
        
        const result = calcularPrecioConDescuento(price, discount);
        const resultPrg = document.getElementById("resultPrice");
        resultPrg.innerText = "El precio con descuento es: $" + result;
    }
    /*
    if (!coupons.includes(coupon)) {
        alert("El cupón " + coupon + " no es válido");
        discount = "Cupón inválido"
    }
    else if (coupon === "super") {
        discount = 15;
     } else if (coupon === "especial") {
        discount = 30;
     } else if (coupon === "expert") {
        discount = 25;
     }*/

    /*switch (coupon) {
        case "super":
            discount = 15;
        break;
        case "especial":
            discount = 20;
        break;
        case "expert":
            discount = 25;
        break;
    }*/

    /*const result = calcularPrecioConDescuento(price, discount);
    const resultPrg = document.getElementById("resultPrice");
    resultPrg.innerText = "El precio con descuento es: $" + result;*/
}