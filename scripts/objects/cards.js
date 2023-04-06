const cardCoringa = {
    nipe: '',
    image: '',
    setCardCoringa(generatorLetter){
        this.nipe = generatorLetter.cards[0].suit
        this.image = generatorLetter.cards[0].image
    }
}

const cardJogador1 = {
    nipe: '',
    image: '',
    value: 0,
    setCardJogador1(generatorLetter){
        this.nipe = generatorLetter.cards[0].suit
        this.image = generatorLetter.cards[0].image
        this.value = generatorLetter.cards[0].value
    }
}

const cardJogador2 = {
    nipe: '',
    image: '',
    value: 0,
    setCardJogador2(generatorLetter){
        this.nipe = generatorLetter.cards[0].suit
        this.image = generatorLetter.cards[0].image
        this.value = generatorLetter.cards[0].value
    }
}

export {cardCoringa, cardJogador1, cardJogador2}