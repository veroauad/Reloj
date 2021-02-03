function actualizarHora() {
    let fecha = new Date(),
        //para no poner let en todas las variables siguientes, terminamos la variable con coma (,) y seguimos sumando variables terminadas en ,
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    let pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pNumDia = document.getElementById('numDia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio');

    let semanas = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    pDiaSemana.innerHTML = semanas[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.innerHTML = meses[fecha.getMonth()];

    pAnio.innerHTML = fecha.getFullYear();


    //asignar horas, minutos y segundos

    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}

window.setInterval(actualizarHora, 1000);
//para que se actualice la hora cada un segundo y así da la sensación de que van corriendo los segundos todo el tiempo

function cambiarColor(color) {
    let section = document.getElementsByTagName('section');
    console.log(section);

    if (color == 'azul') {
        section[0].className = 'w-75 , blue';
    }
    if (color == 'rosa') {
        section[0].className = 'w-75 , pink';
    }
    if (color == 'amarillo') {
        section[0].className = 'w-75 , yellow';
    }
}