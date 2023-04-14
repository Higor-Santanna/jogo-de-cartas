async function createShuffledDeck() {
    const url ="https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const response = await fetch(url)
    return await response.json()
}

async function takingCard(deck_id) {
    const url =
        `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url)
    return await response.json()
}

async function generateCard(){
    const cheap = await createShuffledDeck()
    return await takingCard(cheap.deck_id)
}

export { generateCard }