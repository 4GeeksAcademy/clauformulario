window.onload = function validarFormulario(event) {
    event.preventDefault()

    let envio = document.getElementById("enviar")
    envio.addEventListener("click", chequeo)

    function chequeo() {
        //chequeo de la tarjeta
        let tarjeta = document.getElementById("tarjeta").value
        if (tarjeta == "") {
            console.log("tarjetavacia")
            document.getElementById("tarjeta").className = "form-control bg-danger bg-opacity-50"
        }
        else {
            document.getElementById("tarjeta").className = "form-control"

        }
        //chequeo CVC
        let cvc = document.getElementById("cvc").value
        if (cvc == "") {
            console.log("cvcvacia")
            document.getElementById("cvc").className = "form-control bg-danger bg-opacity-50"
        }
        else {
            document.getElementById("cvc").className = "form-control"

        }

        //chequeo Amount
        let amount = document.getElementById("amount").value
        if (amount == "") {
            console.log("amountvacia")
            document.getElementById("amount").className = "form-control bg-danger bg-opacity-50"
        }
        else {
            document.getElementById("cvc").className = "form-control"

        }
        //chequeo FirstName
        let firstname = document.getElementById("firstname").value
        if (firstname == "") {
            console.log("firstnamevacia")
            document.getElementById("firstname").className = "form-control bg-danger bg-opacity-50"
        }
        //chequeo LastName
        let lastname = document.getElementById("lastname").value
        if (lastname == "") {
            console.log("lastnamevacia")
            document.getElementById("lastname").className = "form-control bg-danger bg-opacity-50"
        }
        //chequeo city
        let city = document.getElementById("city").value
        if (city == "Choose...") {
            console.log("cityvacia")
            document.getElementById("city").className = "form-control bg-danger bg-opacity-50"
        }
        //chequeo state
        let state = document.getElementById("state").value
        if (state == "") {
            console.log("state")
            document.getElementById("state").className = "form-control bg-danger bg-opacity-50"
        }

        //chequeo postalcode
        let postalcode = document.getElementById("postalcode").value
        if (postalcode == "") {
            console.log("postalcode")
            document.getElementById("postalcode").className = "form-control bg-danger bg-opacity-50"
        }

        //chequeo mensaje
        let mensajetext = document.getElementById("mensajetext").value
        if (mensajetext == "") {
            console.log("mensajetext")
            document.getElementById("mensajetext").className = "form-control bg-danger bg-opacity-50"
        }
        else {
            document.getElementById("mensajetext").className = "form-control"

        }
    }
    function ocultar(){
   document.getElementById('alerta').style.display = 'none';
     if (tarjeta !="" && cvc != "" && amount !="" && firstname !="" && lastname !="" && city !="" && state !="" && postalcode !="" && mensajetext) {
          
     }
  }

}

//ocultar alerta

// function ocultar(){
//    document.getElementById('alerta').style.display = 'none';
//      if (tarjeta !="" && cvc != "" && amount !="" && firstname !="" && lastname !="" && city !="" && state !="" && postalcode !="" && mensajetext) {
          
//      }
//   }
