async function criarBaralhoEmbaralhado1() {
    const url ="https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirandoCarta(deck_id) {
    const url =
        `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function gerarCarta(){
    const baralho = await criarBaralhoEmbaralhado1()
    return await tirandoCarta(baralho.deck_id)
}

export { gerarCarta }