window.onload = function validarFormulario(event) {
    event.preventDefault()

    let envio = document.getElementById("enviar")
    envio.addEventListener("click", chequeo)
    // ocultar();
    document.getElementById('alerta').style.display = 'none';

    function chequeo() {
        document.getElementById('alerta').style.display = 'none';

        //chequeo de la tarjeta
        let tarjeta = document.getElementById("tarjeta").value
        if (tarjeta == "") {
            document.getElementById("tarjeta").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        else {
            document.getElementById("tarjeta").className = "form-control"

        }
        //chequeo CVC
        let cvc = document.getElementById("cvc").value
        if (cvc == "") {
            document.getElementById("cvc").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        else {
            document.getElementById("cvc").className = "form-control"

        }

        //chequeo Amount
        let amount = document.getElementById("amount").value
        if (amount == "") {
            document.getElementById("amount").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        else {
            document.getElementById("cvc").className = "form-control"

        }
        //chequeo FirstName
        let firstname = document.getElementById("firstname").value
        if (firstname == "") {
            document.getElementById("firstname").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        //chequeo LastName
        let lastname = document.getElementById("lastname").value
        if (lastname == "") {
            document.getElementById("lastname").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        //chequeo city
        let city = document.getElementById("city").value
        if (city == "Choose...") {
            document.getElementById("city").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        //chequeo state
        let state = document.getElementById("state").value
        if (state == "") {
            document.getElementById("state").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }

        //chequeo postalcode
        let postalcode = document.getElementById("postalcode").value
        if (postalcode == "") {
            document.getElementById("postalcode").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }

        //chequeo mensaje
        let mensajetext = document.getElementById("mensajetext").value
        if (mensajetext == "") {
            document.getElementById("mensajetext").className = "form-control bg-danger bg-opacity-50"
            document.getElementById('alerta').style.display = 'flex';

        }
        else {
            document.getElementById("mensajetext").className = "form-control"

        }
       
    }
    



}


