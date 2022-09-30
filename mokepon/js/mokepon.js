//FUNCTION INICIARJUEGO
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota") 
const botonFuego = document.getElementById("seleccionar-ataque-fuego")
const botonAgua = document.getElementById("seleccionar-ataque-agua")
const botonAire = document.getElementById("seleccionar-ataque-tierra")
const botonReiniciar = document.getElementById("reiniciar")


//FUNCTION SELECCIONARMASCOTAJUGADOR
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador") 

//FUNCTION SELECCIONARMASCOTAENEMIGO
const mascotaAleatorio = aleatorio (1, 6)
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

//FUNCTION COMBATE
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

//FUNCTION CREARMENSAJE
const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")


//FUNCTION CREARMENSAJEFINAL
//let sectionMensajes = document.getElementById("resultado")
//let botonFuego = document.getElementById("seleccionar-ataque-fuego")
//let botonAgua = document.getElementById("seleccionar-ataque-agua")
//let botonAire = document.getElementById("seleccionar-ataque-tierra")
//let sectionReiniciar = document.getElementById("reiniciar")

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Chinpokomon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.photo = foto
        this.vida = vida
        this.tipo = tipo

    }
}

let Carnerotrón = new Chinpokomon('Carnerotrón', './assets/carnerotron.png', 3)

let Zapato = new Chinpokomon('Zapato', './assets/zapato.png', 3)

let Pinguino = new Chinpokomon('Pinguino', './assets/pinguino.png', 3)
 
let Furrycat = new Chinpokomon('Furrycat', './assets/furrycat.png', 3)

let Vamporko = new Chinpokomon('Vamporko', './assets/vamporko.png', 3)

let Brocorii = new Chinpokomon('Brocorii', './assets/brocorii.png', 3)


function iniciarJuego() {
    
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
 //EVENTO QUE OCURRIRÁ AL PRESIONAR EL BOTÓN DE SELECCIONAR MASCOTA 
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonAire.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego) 
}

function seleccionarMascotaJugador() {
   sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
   
    if(document.getElementById("Carnerotrón").checked) {
        spanMascotaJugador.innerHTML = 'Carnerotrón'
        //alert('SELECCIONASTE A Carnerotrón')
    } else if(document.getElementById("Zapato").checked) {
        spanMascotaJugador.innerHTML = 'Zapato'
        //alert('SELECCIONASTE A ZAPATO')
    } else if(document.getElementById("Pinguino").checked) {
        spanMascotaJugador.innerHTML = 'Pinguino'
        //alert('SELECCIONASTE A PINGUINO')
    } else if(document.getElementById("Furrycat").checked) {
        spanMascotaJugador.innerHTML = 'Furrycat'
        //alert('SELECCIONASTE A FURRYCAT')
    } else if(document.getElementById("Vamporko").checked) {
        spanMascotaJugador.innerHTML = 'Vamporko'
        //alert('SELECCIONASTE A VAMPORKO')
    } else if(document.getElementById("Brocorii").checked) {
        spanMascotaJugador.innerHTML = 'Brocorii'
        //alert('SELECCIONASTE A BROCORII')
    } else {
        alert('SELECCIONA UNA MASCOTA')
    } 
    seleccionarMascotaEnemigo()      
}

function seleccionarMascotaEnemigo() {
   
    if(mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Carnerotrón'
        //Hipodoge
    } else if(mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Zapato'
        //Capipepo
    }  else if(mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Pinguino'
        //Ratigueya   
    } else if(mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Furrycat'
        //Langostelvis   
    } else if(mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Vamporko'
        //Tucapalma   
    } else if(mascotaAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = 'Brocorii'
        //Pydos
    } 

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO' 
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA' 
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorioEnemigo = aleatorio(1, 3)

    if(ataqueAleatorioEnemigo == 1){
        ataqueEnemigo ='FUEGO' 
    } else if(ataqueAleatorioEnemigo == 2){
        ataqueEnemigo ='AGUA' 
    } else if (ataqueAleatorioEnemigo == 3){
        ataqueEnemigo ='TIERRA' 
    }

  combate()
}

function combate() {

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANAS")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo      
    }  else {
    crearMensaje("PERDISTE")
    vidasJugador -- 
    spanVidasJugador.innerHTML = vidasJugador   
    }
    revisarVidas()  
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELCIDADES! HAS GANADO EL COMBATE CHINPOKOMON HAS VENCIDO EL PODER MALIGNO")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO HAS PERDIDO")
    } 
}

function crearMensaje(resultado) {

let nuevoAtaqueDelJugador = document.createElement('p')
let nuevoAtaqueDelEnemigo = document.createElement('p')

sectionMensajes.innerHTML = resultado
nuevoAtaqueDelJugador.innerHTML = ataqueJugador 
nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal
     botonFuego.disabled = true    
     botonAgua.disabled = true
     botonAire.disabled = true
     sectionReiniciar.style.display = 'block'
 } 

function reiniciarJuego() {
      location.reload()
}

function aleatorio(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
   }



   
window.addEventListener("load", iniciarJuego) //EVENTO UE OCURRIRÁ AL INCICAR EL DOCUMENTO HTML   


