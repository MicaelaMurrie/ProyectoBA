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

const adulto = document.getElementById("cantAdultos");
adulto.onclick = (e) => {
  selectAdulto(e);
};

function selectAdulto(e) {
  const menores = document.getElementById("cantMenores");
  if (e.target.value != "adulto") {
    menores.disabled = false;
    menores.innerHTML = ' <option value="menores">Menores</option>';
    console.log(e.target.value);
    for (let i = 1; i <= 4 - e.target.value; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.innerHTML = i;
      menores.appendChild(option);
    }
  }
}
S;
