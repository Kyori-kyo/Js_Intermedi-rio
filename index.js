/*                                Contador de passos                                   */
function count() {
    let init = Number(document.querySelector('#start')?.value);
    let step = Number(document.querySelector('#steps')?.value);
    let end = Number(document.querySelector('#fim')?.value);
    let result = document.querySelector('#result')

    console.log(`o início é: ${init}`);
    console.log(`os passos serão: ${step}`);
    console.log(`e o fim será: ${end}`);
    console.log('------------------');
    if (init < end && end > 0 && step > 0) {

        document.querySelector('#result').innerHTML = "";

        //utilizando o while:
        //     while (init < end) {
        //         init = parseInt(init) + parseInt(step);
        //     }

        for (let count = init; count <= end; count += step) {

            console.log(`o passo atual é ${count}`);


            result.innerHTML += `${count} => `;
        }

        result.innerHTML += `fim.`;

        document.querySelector('#start').value = ''
        document.querySelector('#steps').value = ''
        document.querySelector('#fim').value = ''
    } else {

        window.alert('Inseriu alguma coisa errada aí, amigão...');
    }
}

/*                                  Tabuada de 10                                      */
function calc() {
    let nmbr = parseFloat(document.querySelector('#nmbr').value);
    let table = document.querySelector('#table')

    console.log(`o número colocado foi: ${nmbr}`);
    table.innerHTML = "";


    for (let n = 1; n <= 10; n++) {
        let mult = n;
        let rslt = nmbr * mult;

        table.innerHTML += `${nmbr} x ${mult} = ${rslt} <br>`;

        console.log(rslt);
    }

    document.querySelector('#nmbr').value = '';
}

/*                                  Ultimo desafio                                    */

let num = document.querySelector("#addNmbr");
let lista = document.querySelector(".lista");
let res = document.querySelector(".shwRslt");
let valores = [];

function trueResult(num, lista) {

    if (lista.indexOf(Number(num)) == -1 && Number(num) <= 100 && Number(num) >= 1) {

        return true
    } else {

        return false
    }
}



function addNumbr() {

    if (trueResult(num.value, valores)) {

        valores.push(num.value * 1);
        valores.sort(compararNumeros);

        lista.innerHTML += `Valor ${num.value} adicionado. <br>`;
        console.log('ok')
        console.log(valores)
        num.value = ''
    } else {

        window.alert('valor ja existente ou inválido')
        console.log('erro')
        console.log(valores)
    }
}



function showData() {

    res.innerHTML = ""
    res.innerHTML += `Ao todo, temos ${(valores).length} números adicionados; <br>`;
    res.innerHTML += `O maior valor informado foi: ${valores[(valores).length - 1]}; <br>`
    res.innerHTML += `O menor valor informado foi: ${valores[0]}; <br>`
    res.innerHTML += `Somando todos os valores, temos: ${valores.reduce((partialSum, a) => partialSum + a, 0)}; <br>`
    res.innerHTML += `A média dos valores digitados é: ${valores.reduce((partialSum, a) => partialSum + a, 0) / valores.length}`;
}

function compararNumeros(a, b) {
    return a - b;
}

