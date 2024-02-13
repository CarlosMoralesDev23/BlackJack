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

// ---------------- Crear Deck ----------------
let crearDeck = (especiales, tipos, deck) => {
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
deck= crearDeck(especiales, tipos, deck)
console.log(deck);
console.log(deck.length);


// -------------  Pedir Carta ------------------

let dameCarta = (deck) => {
    let carta = deck.shift()
    cartasJugador.push(carta)
    return carta
}
let nuevaCarta = dameCarta(deck)
console.log( nuevaCarta ) 
console.log( deck )
console.log(cartasJugador)

