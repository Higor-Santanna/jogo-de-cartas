import { generateCard } from "./takeCard.js"
import { cardCoringa, cardJogador1, cardJogador2 } from "../objects/cards.js"
import { nipeOfCard, discoverForceOfCard, compareCards } from "../index.js"

let someonePlayed = false;

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

export { drawCardPlayer1, tirarCartaJogador2 }