/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

// alert('Haz click en nuevo juego para comenzar, luego en pedir carta, y detener para pasar el turno a la computadora')
// alert('Ganas si sumas 21, te puedes detener antes y ver si la compu empata, gana o pierde') 
let especiales = ["J", "K", "Q", "A"];
let tipos = ["C", "D", "H", "S"];
let deck = [];
let cartasJugador = [];
let cartasComputador = [];
let puntosJugador = 0;
let puntosComputador = 0;
let btnNuevo         = document.getElementById("nuevoJuego");
let btnPedir         = document.getElementById("pedirCarta");
let smallPuntos      = document.querySelectorAll("small");
let btnDetener       = document.getElementById("detenerTurno");
let divCartasJugador = document.getElementById('divCartasJugador')
let divCartasComputador = document.getElementById('divCartasComputador')

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
    deck = _.shuffle(deck);
    return deck;
};

// ------------- 2- Pedir Carta ------------------
let pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay mas cartas en la baraja";
    }
    carta = deck.shift();
    cartasJugador.push(carta);
    console.log(cartasJugador);
    return carta;
};

// ------------- 3- Puntaje Carta ------------------
let valorCarta = (carta) => {
    const valor = carta.slice(0, -1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; //String to Number
};


btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta()
    puntosJugador += valorCarta(carta)
    smallPuntos[0].innerText = puntosJugador

    //Esto va ser una fucnión insertar Carta
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/cartas/${carta}.png`;
    imgCarta.classList.add("cartas");
    divCartasJugador.append(imgCarta);

    puntosJugador === 21
        ? (console.log("Tu ganaste"),
        (btnPedir.disabled = true),
        (btnDetener.disabled = true))
        : puntosJugador > 21
        ? (console.log("Perdiste"),
        (btnPedir.disabled = true),
        (btnDetener.disabled = true))
        : null;
})

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    while (puntosComputador < puntosJugador) {
        const carta = pedirCarta();
        puntosComputador += valorCarta(carta);
        smallPuntos[1].innerText = puntosComputador;

        const imgCarta = document.createElement("img");
        imgCarta.src = `./assets/cartas/cartas/${carta}.png`;
        imgCarta.classList.add("cartas");
        divCartasComputador.append(imgCarta);

        if (puntosComputador === puntosJugador) {
            console.log('El computador igualo tus puntos perdiste')
            break
        }else if (puntosComputador > puntosJugador && puntosComputador < 21){
            console.log('El computador hizo mas puntos que tu y menos de 21  GANO el Computador')
            break
        }else if(puntosComputador === 21){
            console.log('El computador hizo 21 puntos perdiste')
            break
        }else if (puntosComputador > 21) {
            console.log('El computador hizo mas de 21 puntos GANASTE')
            break
        }
    }
});


btnNuevo.addEventListener('click', ()=>{
    crearDeck()
})

