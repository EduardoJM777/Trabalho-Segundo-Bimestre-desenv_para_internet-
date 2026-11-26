function numeroValido(valor) {
    return !isNaN(valor) && valor > 0;
}

function formatarReais(valor) {
    return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
}

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z]/g, "");
}



function iniciarTriangulo() {
    const inCompA = document.getElementById("compA");
    const inCompB = document.getElementById("compB");
    const inCompC = document.getElementById("compC");
    const btnVerificar = document.getElementById("btnVerif");
    const txtIsTriang = document.getElementById("isTriang");
    const txtTipoTriangulo = document.getElementById("tipoTriangulo");

    btnVerificar.addEventListener("click", function () {

        const valCompA = parseFloat(inCompA.value);
        const valCompB = parseFloat(inCompB.value);
        const valCompC = parseFloat(inCompC.value);

        if (!numeroValido(valCompA) || !numeroValido(valCompB) || !numeroValido(valCompC)){
            txtIsTriang.textContent = "Informe três medidas válidas.";
            txtTipoTriangulo.textContent = "";
            return;
        }

        const podeSerTriangulo =
            valCompA < valCompB + valCompC &&
            valCompB < valCompA + valCompC &&
            valCompC < valCompA + valCompB;

        txtIsTriang.textContent = podeSerTriangulo
            ? "Pode ser um triângulo."
            : "Não pode ser um triângulo.";

        if (podeSerTriangulo) {
            if (valCompA === valCompB && valCompA === valCompC && valCompB === valCompC) {
                txtTipoTriangulo.textContent = "O triângulo é equilátero.";
            } else if (valCompA === valCompB || valCompA === valCompC || valCompB === valCompC) {
                txtTipoTriangulo.textContent = "O triângulo é isósceles.";
            } else {
                txtTipoTriangulo.textContent = "O triângulo é escaleno.";
            }
        } else {
            txtTipoTriangulo.textContent = "";
        }

    });

}



function iniciarIMC() {
    const inPeso = document.getElementById("peso");
    const inAltura = document.getElementById("altura");
    const btnCalcIMC = document.getElementById("calcIMC");
    const txtResult = document.getElementById("resultIMC");
    const txtClassif = document.getElementById("classifIMC");

    btnCalcIMC.addEventListener("click", function () {

        const valPeso = parseFloat(inPeso.value);
        const valAltura = parseFloat(inAltura.value);

        if (!numeroValido(valPeso) || !numeroValido(valAltura)) {
            txtResult.textContent = "Insira peso e altura válidos.";
            txtClassif.textContent = "";
            return;
        }

        const imc = valPeso / (valAltura * valAltura);

        txtResult.textContent = "Seu IMC é: " + imc.toFixed(2);

        if (imc < 18.5) {
            txtClassif.textContent = "Você está abaixo do peso.";
        } else if (imc < 25) {
            txtClassif.textContent = "Você está com o peso normal.";
        } else if (imc < 30) {
            txtClassif.textContent = "Você está com sobrepeso.";
        } else if (imc < 35) {
            txtClassif.textContent = "Você está com obesidade grau 1.";
        } else if (imc < 40) {
            txtClassif.textContent = "Você está com obesidade grau 2.";
        } else {
            txtClassif.textContent = "Você está com obesidade grau 3.";
        }

    });

}



function iniciarTransfVeic(){
    const inAnoFab = document.getElementById("anoFab");
    const inValorTabela = document.getElementById("valorTabela");
    const btnCalcTransf = document.getElementById("calcTransf");
    const txtTaxaCobrada = document.getElementById("taxaCobrada");
    const txtValorCobrado = document.getElementById("valorCobrado");

    const ANO_PADRAO = 1990;

    btnCalcTransf.addEventListener("click", function () {

        const valAnoFab = parseInt(inAnoFab.value);
        const valValorTabela = parseFloat(inValorTabela.value);

        if (!numeroValido(valAnoFab) || !numeroValido(valValorTabela)) {
            txtTaxaCobrada.textContent = "Insira um ano e valor de tabela válidos.";
            txtValorCobrado.textContent = "";
            return;
        }

        let taxa;

        if (valAnoFab < ANO_PADRAO) {
            taxa = 0.01;
        } else {
            taxa = 0.015;
        }

        txtTaxaCobrada.textContent = "Taxa aplicada: " + (taxa * 100) + "%";
        txtValorCobrado.textContent = "Valor total da transferência: " + formatarReais(valValorTabela * (1 + taxa));

    });

}



function iniciarAumentSala() {
    const inSalario = document.getElementById("salario");
    const inCargo = document.getElementById("cargo");
    const btnCalcAum = document.getElementById("calcAumento");
    const txtSalAntigo = document.getElementById("salAntigo");
    const txtSalNovo = document.getElementById("salNovo");
    const txtDifSalario = document.getElementById("difSalario");

    const percentuais = {
        gerente: 1.10,
        engenheiro: 1.20,
        tecnico: 1.30
    }

    btnCalcAum.addEventListener("click", function () {

        const valSalario = parseFloat(inSalario.value);
        
        if (!numeroValido(valSalario)) {
            txtSalAntigo.textContent = "Informe um salário válido.";
            txtSalNovo.textContent = "";
            txtDifSalario.textContent = "";
            return;
        }

        const fator = percentuais[normalizar(inCargo.value)] ?? 1.40;
        const salarioNovo = valSalario * fator;
        const diferenca = salarioNovo - valSalario;

        txtSalAntigo.textContent = "O salário antigo era: " + formatarReais(valSalario);
        txtSalNovo.textContent = "O salário novo será de: " + formatarReais(salarioNovo);
        txtDifSalario.textContent = "A diferença foi de: " + formatarReais(diferenca);

    });

}



function iniciarCred() {
    const inSaldoMedio = document.getElementById("saldoMedio");
    const btnCalcCredito = document.getElementById("calcCredito");
    const txtSaldo = document.getElementById("saldo");
    const txtValorCredito = document.getElementById("valorCredito");

    btnCalcCredito.addEventListener("click", function () {

        const valSaldoMedio = parseFloat(inSaldoMedio.value);

        if (isNaN(valSaldoMedio) || valSaldoMedio < 0) {
            txtSaldo.textContent = "Insira um saldo médio válido.";
            txtValorCredito.textContent = "";
            return;
        }

        let percentual;

        if (valSaldoMedio <= 200) {
            percentual = 0;
        } else if (valSaldoMedio <= 400) {
            percentual = 0.2;
        } else if (valSaldoMedio <= 600) {
            percentual = 0.3;
        } else {
            percentual = 0.4;
        }

        const credito = valSaldoMedio * percentual;

        txtSaldo.textContent = "O saldo inserido foi de: " + formatarReais(valSaldoMedio);
        txtValorCredito.textContent = "O valor de crédito aplicável é de: " + formatarReais(credito);

    });

}



function iniciarLanchonete() {
    const inCodProduto = document.getElementById("codProduto");
    const inQtdProduto = document.getElementById("qtdProduto");
    const btnCalcVal = document.getElementById("calcVal");
    const txtValorProdutos = document.getElementById("valorProdutos");

    btnCalcVal.addEventListener("click", function () {

        const valCodProd = parseInt(inCodProduto.value);
        const valQtdProd = parseInt(inQtdProduto.value);

        if (!numeroValido(valCodProd) || !numeroValido(valQtdProd)) {
            txtValorProdutos.textContent = "Insira um código e quantidade válidos.";
            return;
        }

        let preco;

        if (valCodProd === 1) {
            preco =  11;
        } else if (valCodProd === 2) {
            preco =  8.50;
        } else if (valCodProd === 3) {
            preco =  8;
        } else if (valCodProd === 4) {
            preco =  9;
        } else if (valCodProd === 5) {
            preco =  10;
        } else {
            preco =  4.50;
        }

        let precoTotal = valQtdProd * preco;

        txtValorProdutos.textContent = "Valor total do pedido: " + formatarReais(precoTotal);

    });

}



function iniciarMetPaga() {
    const inValAserPago = document.getElementById("valAserPago");
    const selMetodoPag = document.getElementById("metodoPagamento");
    const btnCalcPreco = document.getElementById("calcPreco");
    const txtPrecoAserPago = document.getElementById("precoAserPago");

    btnCalcPreco.addEventListener("click", function () {

        const valAserPago = parseFloat(inValAserPago.value);

        if (!numeroValido(valAserPago)) {
            txtPrecoAserPago.textContent = "Insira um valor válido.";
            return;
        }

        if (selMetodoPag.value === "1") {
            txtPrecoAserPago.textContent = "O valor a ser pago é de: " + formatarReais(valAserPago * 0.9);
        } else if (selMetodoPag.value === "2") {
            txtPrecoAserPago.textContent = "O valor a ser pago é de: " + formatarReais(valAserPago * 0.85);
        } else if (selMetodoPag.value === "3") {
            txtPrecoAserPago.textContent = "O valor a ser pago é de: " + formatarReais(valAserPago / 2) + " em cada parcela.";
        } else if (selMetodoPag.value === "4") {
            txtPrecoAserPago.textContent = "O valor a ser pago é de: " + formatarReais(valAserPago * 0.55) + " em cada parcela.";
        } else {
            txtPrecoAserPago.textContent = "Método de pagamento inválido.";
        }

    });

}



function iniciarSalProf() {
    const selNivelProf = document.getElementById("nivelProfe");
    const inQtdAulas = document.getElementById("qtdAulas");
    const btnCalcSalario = document.getElementById("calcSalario");
    const txtResultSalario = document.getElementById("resultSalario");

    const SEMANAS_POR_MES = 4.5;

    btnCalcSalario.addEventListener("click", function () {

        const valQtdAulas = parseInt(inQtdAulas.value);

        if (!numeroValido(valQtdAulas)) {
            txtResultSalario.textContent = "Insira uma quantidade válida.";
            return;
        }

        let valorPorNivel;

        if (selNivelProf.value === "1") {
            valorPorNivel = 12;
        } else if (selNivelProf.value === "2") {
            valorPorNivel = 17;
        } else if (selNivelProf.value === "3") {
            valorPorNivel = 25;
        } else {
            txtResultSalario.textContent = "Nível de professor inválido.";
            return;
        }

        let salarioFinal = valorPorNivel * valQtdAulas * SEMANAS_POR_MES;

        txtResultSalario.textContent = "O salário será de " + formatarReais(salarioFinal);

    });

}



const secoes = [
    iniciarTriangulo, iniciarIMC, iniciarTransfVeic, iniciarAumentSala,
    iniciarCred, iniciarLanchonete, iniciarMetPaga, iniciarSalProf 
];

secoes.forEach(function (iniciar) {
    try {
        iniciar();
    } catch (erro) {
        console.error("Erro ao iniciar " + iniciar.name + ":", erro);
    }
});