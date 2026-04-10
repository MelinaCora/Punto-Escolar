document.querySelector(".formulario").addEventListener("submit", function(e) {

    e.preventDefault();

    let nombre = document.querySelector("[name='nombre']").value.trim();
    let apellido = document.querySelector("[name='apellido']").value.trim();
    let fecha = document.querySelector("[name='fecha']").value.trim();
    let sexo = document.querySelector("[name='sexo']").value;
    let email = document.querySelector("[name='email']").value.trim();

    let valoracion = document.querySelector("input[name='valoracion']:checked");

    // VALIDAR VACÍOS
    if (nombre === "" || apellido === "" || fecha === "" || sexo === "" || email === "" || !valoracion) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // SOLO LETRAS
    let soloLetras = /^[a-zA-Z]+$/;

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras");
        return;
    }

    if (!soloLetras.test(apellido)) {
        alert("El apellido solo puede contener letras");
        return;
    }

    // FECHA    
    if (fecha === "") {
        alert("Debe seleccionar una fecha");
        return;
    }

    let hoy = new Date();
    let fechaIngresada = new Date(fecha);

    if (fechaIngresada > hoy) {
        alert("La fecha no puede ser futura");
        return;
    }

    //EMAIL
    let formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        alert("Email inválido");
        return;
    }

    let confirmar = confirm("¿Desea enviar el formulario?");

    if (!confirmar) {
        return;
    }

    alert("Formulario enviado correctamente 🎉");

});

document.querySelector("button[type='button']").addEventListener("click", function() {

    let confirmar = confirm("¿Desea cancelar y borrar los datos?");

    if (confirmar) {
        document.querySelector(".formulario").reset();
    }

});

document.querySelector("button[type='reset']").addEventListener("click", function(e) {

    let confirmar = confirm("¿Seguro que desea restablecer el formulario?");

    if (!confirmar) {
        e.preventDefault(); // cancela el reset
    }

});