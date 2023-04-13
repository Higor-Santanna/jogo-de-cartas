import { gerarCarta } from "./services/takeCard.js";
import { cardCoringa, cardJogador1, cardJogador2 } from "./objects/cards.js";

const botaoCoringa = document.getElementById('tirar-carta-coringa')
const botaoJogador1 = document.getElementById('tirar-carta-jogador-1')
const botaoJogador2 = document.getElementById('tirar-carta-jogador-2')
const tirarCarta = document.querySelectorAll('.botao-tirar-carta')

botaoCoringa.addEventListener('click', () => {
    tirarCartaCoringa()
    tirarCarta.forEach((botao) => {
        botao.removeAttribute('disabled')
        botao.classList.remove("disabled")
        botao.classList.add("active")
    })
})

botaoJogador1.addEventListener('click', () => {
    tirarCartaJogador1()
})

botaoJogador2.addEventListener('click', () => {
    tirarCartaJogador2()
})

let alguemJogou = false;

async function tirarCartaCoringa() {
    const carta = await gerarCarta()
    cardCoringa.setCardCoringa(carta)
    const imagemCartaCoringa = cardCoringa.image
    document.getElementById('carta-coringa').src = imagemCartaCoringa

    nipeDaCarta(cardCoringa)

    if (alguemJogou) {
        compararCartas(cardJogador1, cardJogador2, cardCoringa);
    } else {
        alguemJogou = true;

        return;
    }
}

async function tirarCartaJogador1() {
    const carta = await gerarCarta()
    cardJogador1.setCardJogador1(carta)
    const imagemCarta1 = cardJogador1.image
    document.getElementById('primeira-carta').src = imagemCarta1

    nipeDaCarta(cardJogador1)
    descobrirForcaDaCarta(cardJogador1)

    if (alguemJogou) {
        compararCartas(cardJogador1, cardJogador2, cardCoringa);
    } else {
        alguemJogou = true;

        return;
    }
}

async function tirarCartaJogador2() {
    const carta = await gerarCarta()
    cardJogador2.setCardJogador2(carta)
    const imagemCarta2 = cardJogador2.image
    document.getElementById('segunda-carta').src = imagemCarta2

    nipeDaCarta(cardJogador2)
    descobrirForcaDaCarta(cardJogador2)

    if (alguemJogou) {
        compararCartas(cardJogador1, cardJogador2, cardCoringa);
    } else {
        alguemJogou = true;

        return;
    }
}

function nipeDaCarta(carta) {
    const nipeCarta = carta.nipe
    return nipeCarta
}

function descobrirForcaDaCarta(carta) {
    let valor = carta.value;

    if (valor === "ACE") {
        valor = 1;
    } else if (valor === "QUEEN") {
        valor = 11;
    } else if (valor === "JACK") {
        valor = 12;
    } else if (valor === "KING") {
        valor = 13;
    } else {
        valor;
    }

    return valor;
}

async function compararCartas(jogador1, jogador2, coringa) {
    setTimeout(function () {
        if (jogador1.value && (jogador1.nipe === coringa.nipe) > jogador2.value) {
            alertWinner('jogador 1')
    
        } else if (jogador1.value < jogador2.value && (jogador2.nipe === coringa.nipe)) {
            alertWinner('jogador 2')
    
        } else if (jogador1.value && (jogador1.nipe === coringa.nipe) > jogador2.value && (jogador2.nipe === coringa.nipe)) {
            alertWinner('jogador 1')
    
        } else if (jogador1.value && (jogador1.nipe === coringa.nipe) < jogador2.value && (jogador2.nipe === coringa.nipe)) {
            alertWinner('jogador 2')
    
        } else if (jogador1.value && (jogador1.nipe === coringa.nipe) < jogador2.value) {
            alertWinner('jogador 1')
    
        } else if (jogador1.value > jogador2.value && (jogador2.nipe === coringa.nipe)) {
            alertWinner('jogador 2')
    
        } else if (jogador1.value && (jogador1.nipe === coringa.nipe) === jogador2.value) {
            alertWinner('jogador 1')
    
        } else if (jogador1.value === jogador2.value && (jogador2.nipe === coringa.nipe)) {
            alertWinner('jogador 2')
    
        } else if (jogador1.value && (jogador1.nipe === coringa.nipe) === jogador2.value && (jogador2.nipe === coringa.nipe)) {
            alertTie()
    
        } else if(jogador1.value > jogador2.value){
            alertWinner('jogador 1')

        } else if (jogador1.value < jogador2.value){
            alertWinner('jogador 2')

        } else if(jogador1.value === jogador2.value){
            alertTie()
        }
    }, 4000)
}

function alertWinner(jogador) {
    alert(`${jogador} venceu`)
    window.location.reload();
}

function alertTie() {
    alert(`Vish deu empate`)
    window.location.reload();
}