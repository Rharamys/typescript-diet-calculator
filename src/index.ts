import readline from 'readline'
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let idade = 0;
let peso = 0;
let altura = 0;
let genero = "m";
let atividade = 1;
let GEB = 0;
let GET = 0;

input.question('Qual sua idade em anos? ', p => {
    idade = Number(p);
    input.question('Qual seu peso em kg? ', p => {
        peso = Number(p);
        input.question('Qual sua altura em metros? ', p => {
            altura = Number(p);
            printIMC(calculateIMC(peso, altura))
            input.question("Qual seu gênero 'm' ou 'f'? ", p => {
                genero = p;
                calculateGEB(idade, genero, peso);
                input.question("Qual sua classificação de atividade? '1'-leve, '2'-moderada, '3'-pesada ", p => {
                    atividade = Number(p);
                    input.close();
                    calculateGET(idade, genero, atividade, GEB)
                })
            })
        });
    });
});

const calculateIMC = (weight, height) => {
    return Number(Math.round(Number((String(weight/(height*height)) + "e+2"))) + "e-2")
}

const printIMC = (imc) => {
    if (imc < 18.5) {
        console.log("Você está abaixo do peso ideal. IMC: " + imc)
    } else if (imc < 25) {
        console.log("Você está no peso ideal. IMC: " + imc)
    } else if (imc < 30) {
        console.log("Você está com sobrepeso. IMC: " + imc)
    } else if (imc < 35) {
        console.log("Você está com obesidade grau 1. IMC: " + imc)
    } else if (imc < 40) {
        console.log("Você está com obesidade grau 2. IMC: " + imc)
    } else {
        console.log("Você está com obesidade grau 3. IMC: " + imc)
    }
    console.log("Peso ideal: " + Math.round(24*altura*altura))
}

const calculateGEB = (idade, genero, peso) => {
    if (idade < 4) {
        if (genero == "m") {
            GEB = 60.9*peso - 54
        } else {
            GEB = 61*peso - 51
        }
    } else if (idade < 11) {
        if (genero == "m") {
            GEB = 22.7*peso + 495
        } else {
            GEB = 22.5*peso + 499
        }
    } else if (idade < 19) {
        if (genero == "m") {
            GEB = 17.5*peso + 651
        } else {
            GEB = 12.2*peso + 746
        }
    } else if (idade < 31) {
        if (genero == "m") {
            GEB = 15.3*peso + 679
        } else {
            GEB = 14.7*peso + 496
        }
    } else if (idade < 61) {
        if (genero == "m") {
            GEB = 11.6*peso + 879
        } else {
            GEB = 8.7*peso + 829
        }
    } else {
        if (genero == "m") {
            GEB = 13.5*peso + 487
        } else {
            GEB = 10.5*peso + 596
        }
    }
    console.log("Gasto energético BASAL: " + Number(Math.round(Number((String(GEB) + "e+2"))) + "e-2"))
}

const calculateGET = (idade, genero, atividade, GEB) => {
    if (idade < 19) {
        if (genero == "m") {
            if (atividade == 1) {
                GET = 1.6*GEB
            } else {
                if (atividade == 2) {
                    GET = 2.5*GEB
                } else {
                    GET = 6*GEB
                }
            }
        } else {
            if (atividade == 1) {
                GET = 1.5*GEB
            } else {
                if (atividade == 2) {
                    GET = 2.2*GEB
                } else {
                    GET = 6*GEB
                }
            }
        }
    } else if (idade < 66) {
        if (genero == "m") {
            if (atividade == 1) {
                GET = 1.55*GEB
            } else {
                if (atividade == 2) {
                    GET = 1.78*GEB
                } else {
                    GET = 2.1*GEB
                }
            }
        } else {
            if (atividade == 1) {
                GET = 1.56*GEB
            } else {
                if (atividade == 2) {
                    GET = 1.64*GEB
                } else {
                    GET = 1.82*GEB
                }
            }
        }
    } else {
        if (genero == "m") {
            if (atividade == 1) {
                GET = 1.4*GEB
            } else {
                if (atividade == 2) {
                    GET = 1.6*GEB
                } else {
                    GET = 1.9*GEB
                }
            }
        } else {
            if (atividade == 1) {
                GET = 1.4*GEB
            } else {
                if (atividade == 2) {
                    GET = 1.6*GEB
                } else {
                    GET = 1.8*GEB
                }
            }
        }
    }
    console.log("Gasto energético TOTAL: " + Number(Math.round(Number((String(GET) + "e+2"))) + "e-2"))
}
