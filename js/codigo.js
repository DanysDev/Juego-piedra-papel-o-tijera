const selectPiedra = "piedra";
const selectPapel = "papel";
const selectTijera = "tijera";

const empate = "empate";
const ganaste = "ganaste";
const perdiste = "perdiste";

const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const mostrarResult = document.getElementById("text-pantalla");
const mostrarImagePC = document.getElementById("img-machine");


// selección de botones
btnPiedra.addEventListener("click", () => {
    jugando(selectPiedra);
});

btnPapel.addEventListener("click", () => {
    jugando(selectPapel);
});

btnTijera.addEventListener("click", () => {
    jugando(selectTijera);
});


function jugando(jugador) {

    const optionPC = resultOptionPC();
    const result = resultJugada(optionPC, jugador);

    mostrarImagePC.src = "img/" + optionPC + ".svg";
    
    switch(result) {

        case empate:
            mostrarResult.innerHTML = "<h2>Es un empate</h2>";
            break;
        case ganaste:
            mostrarResult.innerHTML = "<h2>Has ganado</h2>";
            break;
        case perdiste:
            mostrarResult.innerHTML = "<h2>Oh perdiste</h2>";
            break;
    }
}

function resultJugada(optionPC, jugador) {

    if(jugador === optionPC) {
        return empate;
    }

    if(optionPC == selectPiedra) {

        if(jugador == selectPapel) return ganaste;
        if(jugador == selectTijera) return perdiste;
    }

    if(optionPC == selectPapel) {

        if(jugador == selectTijera) return ganaste;
        if(jugador == selectPiedra) return perdiste;
    }

    if(optionPC == selectTijera) {

        if(jugador == selectPiedra) return ganaste;
        if(jugador == selectPapel) return perdiste;
    }
}

function resultOptionPC() {

    const numRandom =  Math.floor(Math.random() * 3);

    switch(numRandom) {

        case 0:
            return selectPiedra;
            break;
        case 1:
            return selectPapel;
            break;
        case 2:
            return selectTijera;
            break;
    }
}

