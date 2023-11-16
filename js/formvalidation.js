const nombre = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 3) {
    warnings += `El nombre no es válido <br>`;
    entrar = true;
  }

  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido <br>`;
    entrar = true;
  }

  if (!regexPhone.test(phone.value)) {
    warnings += `El teléfono no es válido <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});

function limite(valor, id) {
  let otro = document.querySelector(id),
    actual = otro.value;

  otro.innerHTML = "";
  for (let i = 0, l = 5 - valor, opc; i < l; i++) {
    opc = document.createElement("option");
    opc.value = i + 1;
    opc.text = i + 1;
    otro.add(opc);
  }

  if (actual <= otro.options.length) {
    for (let j = 0, m = otro.options.length; j < m; j++) {
      if (otro.options[j].value == actual) {
        otro.options[j].selected = true;
        break;
      }
    }
  }
}
