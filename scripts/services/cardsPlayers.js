import { generateCard } from "./takeCard.js";
import { compareCards, discoverForceOfCard } from "../index.js";

const cardJogador1 = { suit: '', image: '', value: 0 };
const cardJogador2 = { suit: '', image: '', value: 0 };

async function tirarCartaJogador1() {
    const card = await generateCard();
    cardJogador1.suit = card.cards[0].suit;
    cardJogador1.image = card.cards[0].image;
    cardJogador1.value = discoverForceOfCard(card.cards[0].value); // Converte corretamente

    document.getElementById('carta-jogador-1').src = cardJogador1.image;

    if (cardJogador2.value !== 0) {
        compareCards(cardJogador1, cardJogador2);
    }
}

async function tirarCartaJogador2() {
    const card = await generateCard();
    cardJogador2.suit = card.cards[0].suit;
    cardJogador2.image = card.cards[0].image;
    cardJogador2.value = discoverForceOfCard(card.cards[0].value); // Converte corretamente

    document.getElementById('carta-jogador-2').src = cardJogador2.image;

    if (cardJogador1.value !== 0) {
        compareCards(cardJogador1, cardJogador2);
    }
}

export { tirarCartaJogador1, tirarCartaJogador2 };