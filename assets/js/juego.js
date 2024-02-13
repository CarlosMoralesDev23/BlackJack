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


// -------------  Pedir Carta ------------------
let pedirCarta = () => {
    if ( deck.length === 0){
        throw 'No hay mas cartas en la baraja'
    }
    let carta = deck.shift()
    console.log(deck);
    cartasJugador.push(carta)
    return carta
}
// deck= []   prueba la condicional si el deck esta vacio
pedirCarta(deck) 
console.log(cartasJugador)

