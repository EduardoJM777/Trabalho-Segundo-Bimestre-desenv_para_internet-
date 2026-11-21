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
let inSalario = document.getElementById("salario");
let inCargo = document.getElementById("cargo");
let btnCalcAum = document.getElementById("calcAumento");
let txtSalAntigo = document.getElementById("salAntigo");
let txtSalNovo = document.getElementById("salNovo");
let txtDifSalario = document.getElementById("difSalario");

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z]/g, "");
}

inCargo.addEventListener("input", function () {
    inCargo.value = normalizar(inCargo.value);
});

const percentuais = {
    gerente: 1.10,
    engenheiro: 1.20,
    tecnico: 1.30
}

btnCalcAum.addEventListener("click", function () {

    const valSalario = parseFloat(inSalario.value);
    
    if (isNaN(valSalario)) {
        txtSalAntigo.textContent = "Informe um salário válido.";
        txtSalNovo.textContent = "";
        txtDifSalario.textContent = "";
    }

    const fator = percentuais[normalizar(inCargo.value)] ?? 1.40;
    const salarioNovo = valSalario * fator;
    const diferenca = salarioNovo - valSalario;

    txtSalAntigo.textContent = "O salário antigo era: R$ " + valSalario.toFixed(2);
    txtSalNovo.textContent = "O salário novo será de: R$ " + salarioNovo.toFixed(2);
    txtDifSalario.textContent = "A diferença foi de: R$ " + diferenca.toFixed(2);

});

// ----------------------------------------------------------------------------------------------------- //
let inSaldoMedio = document.getElementById("saldoMedio");
let btnCalcCredito = document.getElementById("calcCredito");
let txtSaldo = document.getElementById("saldo");
let txtValorCredito = document.getElementById("valorCredito");

btnCalcCredito.addEventListener("click", function () {

    const valSaldoMedio = parseFloat(inSaldoMedio.value);

    if (valSaldoMedio >= 0 && valSaldoMedio <= 200) {
        txtSaldo.textContent = "O saldo inserido foi de: R$ " + valSaldoMedio;
        txtValorCredito.textContent = "O valor de crédito aplicável é de: R$ 0";
    } else if (valSaldoMedio >= 201 && valSaldoMedio <= 400) {
        txtSaldo.textContent = "O saldo inserido foi de: R$ " + valSaldoMedio;
        txtValorCredito.textContent = "O valor de crédito aplicável é de: R$ " + (valSaldoMedio * 0.2).toFixed(2);
    } else if (valSaldoMedio >= 401 && valSaldoMedio <= 600) {
        txtSaldo.textContent = "O saldo inserido foi de: R$ " + valSaldoMedio;
        txtValorCredito.textContent = "O valor de crédito aplicável é de: R$ " + (valSaldoMedio * 0.3).toFixed(2);
    } else {
        txtSaldo.textContent = "O saldo inserido foi de: R$ " + valSaldoMedio;
        txtValorCredito.textContent = "O valor de crédito aplicável é de: R$ " + (valSaldoMedio * 0.4).toFixed(2);
    }

});

// ----------------------------------------------------------------------------------------------------- //
let inCodProduto = document.getElementById("codProduto");
let inQtdProduto = document.getElementById("qtdProduto");
let btnCalcVal = document.getElementById("calcVal");
let txtValorProdutos = document.getElementById("valorProdutos");

btnCalcVal.addEventListener("click", function () {

    valCodProd = parseInt(inCodProduto.value);
    valQtdProd = parseInt(inQtdProduto.value);

    if (valCodProd === 1) {
        txtValorProdutos.textContent = "Valor total do pedido: R$" + (valQtdProd * 11).toFixed(2);
    } else if (valCodProd === 2) {
        txtValorProdutos.textContent = "Valor total do pedido: R$" + (valQtdProd * 8.50).toFixed(2);
    } else if (valCodProd === 3) {
        txtValorProdutos.textContent = "Valor total do pedido: R$" + (valQtdProd * 8).toFixed(2);
    } else if (valCodProd === 4) {
        txtValorProdutos.textContent = "Valor total do pedido: R$" + (valQtdProd * 9).toFixed(2);
    } else if (valCodProd === 5) {
        txtValorProdutos.textContent = "Valor total do pedido: R$" + (valQtdProd * 10).toFixed(2);
    } else {
        txtValorProdutos.textContent = "Valor total do pedido: R$" + (valQtdProd * 4.50).toFixed(2);
    }

});

// ----------------------------------------------------------------------------------------------------- //
let inValAserPago = document.getElementById("valAserPago");
let selMetodoPag = document.getElementById("metodoPagamento");
let btnCalcPreco = document.getElementById("calcPreco");
let txtPrecoAserPago = document.getElementById("precoAserPago");

btnCalcPreco.addEventListener("click", function () {

    valAserPago = parseFloat(inValAserPago.value);

    if (selMetodoPag.value === "1") {
        txtPrecoAserPago.textContent = "O valor a ser pago é de: R$ " + (valAserPago - (valAserPago * 0.1)).toFixed(2);
    } else if (selMetodoPag.value === "2") {
        txtPrecoAserPago.textContent = "O valor a ser pago é de: R$ " + (valAserPago - (valAserPago * 0.15)).toFixed(2);
    } else if (selMetodoPag.value === "3") {
        txtPrecoAserPago.textContent = "O valor a ser pago é de: R$" + (valAserPago / 2).toFixed(2) + " em cada parcela.";
    } else if (selMetodoPag.value === "4") {
        txtPrecoAserPago.textContent = "O valor a ser pago é de: R$" + ((valAserPago + (valAserPago * 0.1)) / 2).toFixed(2) + " em cada parcela.";
    } else {
        txtPrecoAserPago.textContent = "Método de pagamento inválido.";
    }

});
















