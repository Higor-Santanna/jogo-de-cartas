import { tirarCartaJogador1, tirarCartaJogador2 } from "./services/cardsPlayers.js";


const buttonPlayer1 = document.getElementById('tirar-carta-jogador-1')
const buttonPlayer2 = document.getElementById('tirar-carta-jogador-2')
//const takeCard = document.querySelectorAll('.botao-tirar-carta')

buttonPlayer1.addEventListener('click', tirarCartaJogador1);
buttonPlayer2.addEventListener('click', tirarCartaJogador2);

function discoverForceOfCard(value) {
    const cardValues = {
        "ACE": 1, "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
        "JACK": 11, "QUEEN": 12, "KING": 13
    };
    return cardValues[value] || 0;
}


function compareCards(jogador1, jogador2) {
    setTimeout(() => {
        if (jogador1.value > jogador2.value) {
            alertWinner('Jogador 1');
        } else if (jogador1.value < jogador2.value) {
            alertWinner('Jogador 2');
        } else {
            alertTie();
        }
    }, 1000);
}

function alertWinner(jogador) {
    alert(`${jogador} venceu!`);
    window.location.reload();
}

function alertTie() {
    alert("Empate!");
    window.location.reload();
}

export { discoverForceOfCard, compareCards };