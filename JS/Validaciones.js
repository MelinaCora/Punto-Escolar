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
    let formatoFecha = /^\d{2}-\d{2}-\d{4}$/;

    if (!formatoFecha.test(fecha)) {
        alert("La fecha debe tener formato dd-mm-aaaa");
        return;
    }

    //EMAIL
    let formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        alert("Email inválido");
        return;
    }

    //TODO OK
    alert("Formulario enviado correctamente 🎉");

});