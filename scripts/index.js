import { generateCard } from "./services/takeCard.js";
import { cardCoringa, cardJogador1, cardJogador2 } from "./objects/cards.js";

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

let someonePlayed = false;

async function drawJokerCard() {
    const card = await generateCard()
    cardCoringa.setCardCoringa(card)
    const imageJokerCard = cardCoringa.image
    document.getElementById('carta-coringa').src = imageJokerCard

    nipeOfCard(cardCoringa)

    if (someonePlayed) {
        compareCards(cardJogador1, cardJogador2, cardCoringa);
    } else {
        someonePlayed = true;

        return;
    }
}

async function drawCardPlayer1() {
    const card = await generateCard()
    cardJogador1.setCardJogador1(card)
    const imageCard1 = cardJogador1.image
    document.getElementById('carta-jogador-1').src = imageCard1

    nipeOfCard(cardJogador1)
    discoverForceOfCard(cardJogador1)

    if (someonePlayed) {
        compareCards(cardJogador1, cardJogador2, cardCoringa);
    } else {
        someonePlayed = true;

        return;
    }
}

async function tirarCartaJogador2() {
    const card = await generateCard()
    cardJogador2.setCardJogador2(card)
    const imageCard2 = cardJogador2.image
    document.getElementById('carta-jogador-2').src = imageCard2

    nipeOfCard(cardJogador2)
    discoverForceOfCard(cardJogador2)

    if (someonePlayed) {
        compareCards(cardJogador1, cardJogador2, cardCoringa);
    } else {
        someonePlayed = true;

        return;
    }
}

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