(()=>{
    "use strict";

    // alert('Haz click en nuevo juego para comenzar, luego en pedir carta, y detener para pasar el turno a la computadora, reinicia navegador para una nueva partida')
    // alert('Ganas si sumas 21, te puedes detener antes y ver si la compu empata, gana o pierde')
    const tipos = ["C", "D", "H", "S"], especiales = ["J", "K", "Q", "A"];
    let deck = [];
    let pJugador = 0;
    let pCompu = 0;

    let crearDeck = () => {
        deck = []
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
        return _.shuffle(deck);
    };

    btnNuevo.addEventListener("click", () => {
        console.clear();
        pJugador = 0;
        pCompu = 0;
        smallCompu.innerText = "0";
        smallJugador.innerText = "0";
        divCartasCompu.innerHTML = "";
        divCartasJugador.innerHTML = "";
        btnDetener.disabled = false;
        btnPedir.disabled = false;

        deck = crearDeck();
    });

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

    const crearInsertarCarta = (carta) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `./assets/cartas/cartas/${carta}.png`;
        imgCarta.classList.add("cartas");
        btnPedir.disabled === false
            ? divCartasJugador.append(imgCarta)
            : divCartasCompu.append(imgCarta);
    };

    const pedirYSumarPts = () => {
        const carta = pedirCarta();
        btnPedir.disabled === false
            ? ((pJugador += valorCarta(carta)),
            (smallJugador.innerText = pJugador))
            : ((pCompu += valorCarta(carta)), (smallCompu.innerText = pCompu));
    };

    btnPedir.addEventListener("click", () => {
        pedirYSumarPts();

        crearInsertarCarta(carta);

        pJugador === 21
            ? (console.warn("Genial! 21pts"),
            (btnPedir.disabled = true),
            (btnDetener.disabled = true),
            turnoComputador())
            : pJugador > 21
            ? (console.warn("Perdiste"),
            (btnPedir.disabled = true),
            (btnDetener.disabled = true),
            turnoComputador(pJugador))
            : null;
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(pJugador);
    });

    const turnoComputador = (pjugador) => {
        do {
            pedirYSumarPts();
            crearInsertarCarta(carta);
            pCompu === pJugador
                ? console.warn("El computador igualo perdiste")
                : pCompu > pJugador && pCompu < 21
                ? console.warn("GANO el Computador")
                : pCompu === 21
                ? console.warn("Gano el Computador")
                : pCompu > 21
                ? console.warn("GANASTE")
                : null;
            if (pjugador > 21) {
                break;
            }
        } while (pCompu < pJugador);
    };

    //TODO hacer las optimizaciones para multiplayer
})()

