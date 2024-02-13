/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

console.log(!isNaN("10"));
let especiales = ["J", "K", "Q", "A"];
let tipos = ["C", "D", "H", "S"];
let deck = [];
let cartasJugador = []
let cartasComputador = []
let puntosJugador = 0;
let puntosComputador = 0;
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


// -------------  Puntaje Carta ------------------
let carta = 0

let puntaje = () => {
    carta = carta.slice(0, -1);
    console.log(`Este es el resto sacandole la letra : ${carta}`)
    if (isNaN(carta)) {
        carta = 10;
        sumaPuntaje(carta)
    } else {
        carta = Number(carta);
        sumaPuntaje(carta)
    }
    console.log(`Valor de la carta: ${carta}`);
};



// -------------  Sumar Puntaje ------------------

let sumaPuntaje = (carta)=>{
    puntosJugador += carta
    console.log(`Puntos del jugador: ${puntosJugador}`);
}


// -------------  Pedir Carta ------------------
let pedirCarta = () => {
    if ( deck.length === 0){
        throw 'No hay mas cartas en la baraja'
    }
    carta = deck.shift()
    console.log(deck);
    cartasJugador.push(carta)

    puntaje()
    return carta
}
// deck= []   prueba la condicional si el deck esta vacio
pedirCarta(deck) 
pedirCarta(deck) 
pedirCarta(deck) 
console.log(cartasJugador)





