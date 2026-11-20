let inCompA = document.getElementById("compA");
let inCompB = document.getElementById("compB");
let inCompC = document.getElementById("compC");
let btnVerificar = document.getElementById("btnVerif");
let txtIsTriang = document.getElementById("isTriang");
let txtTipoTriangulo = document.getElementById("tipoTriangulo");

btnVerificar.addEventListener("click", function () {

    const valCompA = parseInt(inCompA.value);
    const valCompB = parseInt(inCompB.value);
    const valCompC = parseInt(inCompC.value);

    const podeSerTriangulo =
        valCompA < valCompB + valCompC &&
        valCompB < valCompA + valCompC &&
        valCompC < valCompA + valCompB;

    txtIsTriang.textContent = podeSerTriangulo
        ? "Pode ser um triângulo."
        : "Não pode ser um triângulo.";

    if (valCompA === valCompB && valCompA === valCompC && valCompB === valCompC) {
        txtTipoTriangulo.textContent = "O triângulo é equilátero.";
    } else if (valCompA === valCompB || valCompA === valCompC || valCompB === valCompC) {
        txtTipoTriangulo.textContent = "O triângulo é isósceles.";
    } else if (valCompA !== valCompB && valCompA !== valCompC && valCompB !== valCompC) {
        txtTipoTriangulo.textContent = "O triângulo é escaleno.";
    }

});

// ----------------------------------------------------------------------------------------------------- //
let inPeso = document.getElementById("peso");
let inAltura = document.getElementById("altura");
let btnCalcIMC = document.getElementById("calcIMC");
let txtResult = document.getElementById("resultIMC");
let txtClassif = document.getElementById("classifIMC");

btnCalcIMC.addEventListener("click", function () {

    const valPeso = parseInt(inPeso.value);
    const valAltura = parseFloat(inAltura.value);

    const imc = valPeso / (valAltura * valAltura);

    txtResult.textContent = "Seu IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
        txtClassif.textContent = "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        txtClassif.textContent = "Você está com o peso normal.";
    } else if (imc >= 25 && imc <= 29.9) {
        txtClassif.textContent = "Você está com sobrepeso.";
    } else if (imc >= 30 && imc <= 34.9) {
        txtClassif.textContent = "Você está com obesidade grau 1.";
    } else if (imc >= 35 && imc <= 39.9) {
        txtClassif.textContent = "Você está com obesidade grau 2.";
    } else {
        txtClassif.textContent = "Você está com obesidade grau 3.";
    }

});

// ----------------------------------------------------------------------------------------------------- //
let inAnoFab = document.getElementById("anoFab");
let inValorTabela = document.getElementById("valorTabela");
let btnCalcTransf = document.getElementById("calcTransf");
let txtTaxaCobrada = document.getElementById("taxaCobrada");
let txtValorCobrado = document.getElementById("valorCobrado");

btnCalcTransf.addEventListener("click", function () {

    const valAnoFab = parseInt(inAnoFab.value);
    const valValorTabela = parseFloat(inValorTabela.value);

    if (valAnoFab < 1990) {
        txtTaxaCobrada.textContent = "Taxa aplicada: 1%"
        txtValorCobrado.textContent = "Valor total da transferência: R$" + (valValorTabela * 1.01).toFixed(2);
    } else {
        txtTaxaCobrada.textContent = "Taxa aplicada: 1.5%"
        txtValorCobrado.textContent = "Valor total da transferência: R$" + (valValorTabela * 1.015).toFixed(2);
    }

});
// ----------------------------------------------------------------------------------------------------- //











