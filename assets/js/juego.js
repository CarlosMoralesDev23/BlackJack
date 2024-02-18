/**  * 2C = Two of clubs, * 2D = Two of Diamonds, * 2H = Two of Hearts,  * 2S = Two of Spades */

// alert('Haz click en nuevo juego para comenzar, luego en pedir carta, y detener para pasar el turno a la computadora, reinicia navegador para una nueva partida')
// alert('Ganas si sumas 21, te puedes detener antes y ver si la compu empata, gana o pierde')
let especiales = ["J", "K", "Q", "A"];
let tipos = ["C", "D", "H", "S"];
let deck = [];
let pJugador = 0;
let pCompu = 0;

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

let pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay mas cartas en la baraja";
    }
    carta = deck.shift();
    return carta;
};

let valorCarta = (carta) => {
    const valor = carta.slice(0, -1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; //String to Number
};


btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta()
    pJugador += valorCarta(carta)
    smallJugador.innerText = pJugador

    //Esto va ser una fucnión insertar Carta
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/cartas/${carta}.png`;
    imgCarta.classList.add("cartas");
    divCartasJugador.append(imgCarta);

    pJugador === 21
        ? (console.warn("Genial!, veamos si el computador igual 21"),
        (btnPedir.disabled = true),
        (btnDetener.disabled = true),
        turnoComputador())
        : pJugador > 21
        ? (console.warn("Perdiste"),
        (btnPedir.disabled = true),
        (btnDetener.disabled = true),
        turnoComputador(pJugador))
        : null;
})

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputador(pJugador)
})

btnNuevo.addEventListener('click', ()=>{
    console.clear()
    deck     = [];
    pJugador = 0;
    pCompu = 0;
    smallCompu.innerText       = "0";
    smallJugador.innerText     = "0";
    divCartasCompu.innerHTML   = "";
    divCartasJugador.innerHTML = "";
    btnDetener.disabled        = false;
    btnPedir.disabled          = false;

    deck = crearDeck();
})

const turnoComputador = (pjugador)=>{
    do{
        const carta = pedirCarta();
        pCompu += valorCarta(carta);
        smallCompu.innerText = pCompu;

        const imgCarta = document.createElement("img");
        imgCarta.src = `./assets/cartas/cartas/${carta}.png`;
        imgCarta.classList.add("cartas");
        divCartasCompu.append(imgCarta);

        pCompu === pJugador
            ? console.warn("El computador igualo tus puntos perdiste")
            : pCompu > pJugador && pCompu < 21
            ? console.warn("El computador hizo mas puntos que tu y menos de 21  GANO el Computador")
            : pCompu === 21
            ? console.warn("El computador hizo 21 puntos perdiste")
            : pCompu > 21
            ? console.warn("El computador hizo mas de 21 puntos GANASTE")
            : null;
        if(pjugador > 21){
            break
        }
    }while (pCompu < pJugador)
}
