/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let especiales = ["J", "K", "Q", "A"];
let tipos = ["C", "D", "H", "S"];
let deck = [];
let cartasJugador = []
let cartasComputador = []
let puntosJugador = 0;
let puntosComputador = 0;

// ---------------- 1- Crear Deck ----------------
let crearDeck = () => {
    for (i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let especial of especiales) {
        for (let tipo of tipos) {
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck)
    return deck;
};
crearDeck()
console.log(deck);


// ------------- 2- Pedir Carta ------------------
let pedirCarta = () => {
    if ( deck.length === 0){
        throw 'No hay mas cartas en la baraja'
    }
    carta = deck.shift()
    cartasJugador.push(carta)
    console.log(cartasJugador);
    return carta
}



// ------------- 3- Puntaje Carta ------------------
let valorCarta = (carta) => {
    const valor = carta.slice(0, -1);
    return (isNaN(valor)) ? ( valor === 'A' ? 11 :10): valor*1; //String to Number
};
const valor = valorCarta( pedirCarta() )
console.log(valor)


// -------------  Sumar Puntaje ------------------

// let sumaPuntaje = (puntos)=>{
//     puntosJugador += puntos
//     console.log(`Puntos del jugador: ${puntosJugador}`);
// }








