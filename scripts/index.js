import { drawJokerCard } from "./services/jokerCard.js";
import { drawCardPlayer1, tirarCartaJogador2 } from "./services/cardsPlayers.js";

const jokerButtonEvents = document.getElementById('tirar-carta-coringa')
const buttonPlayer1 = document.getElementById('tirar-carta-jogador-1')
const buttonPlayer2 = document.getElementById('tirar-carta-jogador-2')
const takeCard = document.querySelectorAll('.botao-tirar-carta')

jokerButtonEvents.addEventListener('click', () => {
    drawJokerCard()
    takeCard.forEach((botao) => {
        botao.removeAttribute('disabled')
        botao.classList.remove("disabled")
        botao.classList.add("active")
    })
})

buttonPlayer1.addEventListener('click', () => {
    drawCardPlayer1()
})

buttonPlayer2.addEventListener('click', () => {
    tirarCartaJogador2()
})

function nipeOfCard(card) {
    const nipeCard = card.nipe
    return nipeCard
}

function discoverForceOfCard(card) {
    let value = card.value;

    if (value === "ACE") {
        value = 1;
    } else if (value === "QUEEN") {
        value = 11;
    } else if (value === "JACK") {
        value = 12;
    } else if (value === "KING") {
        value = 13;
    } else {
        value;
    }

    return value;
}

async function compareCards(jogador1, jogador2, coringa) {
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

export { nipeOfCard, discoverForceOfCard, compareCards }