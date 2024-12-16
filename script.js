const prompt = require("prompt-sync")();

function menor() {
    let lista = []
    let numMenor = Infinity

    for (let i = 1; i <= 10; i++) {
        let num = Number(prompt(`Digite um número para inserir na lista (${i}/10): `))
        lista.push(num)
        if (num < numMenor) {
            numMenor = num
        }
    }

    console.log("Lista de números:", lista)
    console.log("O menor número é:", numMenor)
}

menor()
