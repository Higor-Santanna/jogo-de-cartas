import { generateCard } from "./takeCard.js"
import { cardCoringa } from "../objects/cards.js"
import { nipeOfCard } from "../index.js"

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

export { drawJokerCard }