
//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo Numero Secreto'
//let paragrafo =  document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10:'
// uma segunda forma de fazer oq esta escrito a cima ^^

let listaNumerosSorteados = []

let numeroLimite = 10

let numeroSecreto = gerarNumero()

let tentativas = 1


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function exibirMensagem(){
    exibirTexto('h1', 'Jogo do Número Secreto')
    exibirTexto('p', 'Escolha um número entre 1 e 10:')

}
exibirMensagem()

function verificarChute(){
    let chute = document.querySelector('input').value
    
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor')
        } else {
            exibirTexto('p', 'O número secreto é maior')
            
        }
        //tentativas = tentativas + 1
        tentativas ++
        limparCampo()
}
}
function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeElementos = listaNumerosSorteados.length

    if (quantidadeElementos == numeroLimite) {
        listaNumerosSorteados = []
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero()
    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        console.log(listaNumerosSorteados)
        return numeroEscolhido
    }
} 
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo(){
    numeroSecreto = gerarNumero()
    limparCampo()
    tentativas = 1
    exibirMensagem()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}