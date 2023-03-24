document.getElementById('tirar-carta-coringa').addEventListener('click',
    () => {
        tirarCartaCoringa()
    })

document.getElementById('tirar-carta-jogador-1').addEventListener('click', () => {
    tirarCartaJogador1()
})

document.getElementById('tirar-carta-jogador-2').addEventListener('click', () => {
    tirarCartaJogador2()
})

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

function nipeDaCarta(carta){
    const nipeCarta = carta.cards[0].suit  
    return nipeCarta
}

async function tirarCartaCoringa() {
    const carta = await gerarCarta()
    const imagemCartaCoringa = await carta.cards[0].image
    document.getElementById('carta-coringa').src = imagemCartaCoringa
    let nipeCarta = nipeDaCarta(carta)
}
async function tirarCartaJogador1() {
    const carta = await gerarCarta()
    const imagemCarta1 = await carta.cards[0].image
    document.getElementById('carta').src = imagemCarta1

    let nipeCarta = nipeDaCarta(carta)
    let forcaCartaJogador1 = descobrirForcaDaCarta(carta)

    setTimeout(()=>{
        compararCartas(forcaCartaJogador1, forcaCartaJogador1)
    }, 1000)
}
async function tirarCartaJogador2() {
    const carta = await gerarCarta()
    const imagemCarta2 = await carta.cards[0].image
    document.getElementById('segunda-carta').src = imagemCarta2

    let nipeCarta = nipeDaCarta(carta)
    let forcaCartaJogador2 = descobrirForcaDaCarta(carta)
}

function descobrirForcaDaCarta(carta){
	let valor = carta.cards[0].value;

	if(valor === "ACE") {
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

function compararCartas(cartaJogador1, cartaJogador2){
    if(cartaJogador1.value > cartaJogador2.value){
        alert("jogador 1 venceu")
    } else if(cartaJogador1.value < cartaJogador2.value){
        alert("jogador 2 venceu")
    } else if(cartaJogador1.value == cartaJogador2.value) {
        alert("vish deu empate")
    }
}