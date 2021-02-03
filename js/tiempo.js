//set timeout

let contador = 1;

function saludar() {
    document.write("Hola mundo <br>");
    contador++;
    if (contador === 3) {
        clearTimeout(tiempo)
    }
}

//window.setTimeout(saludar, 1500);
//nos sirve para ejecutar x funcion cada x tiempo (en milisegundos)



//set interval

let tiempo = window.setInterval(saludar, 1000);
//cada tantos milisegundos ejecuta tal función
//se ejecuta indefinidamente hasta que lo paremos (con cleartimeout)