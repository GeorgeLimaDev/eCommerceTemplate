function cadastrarUsuario(event) {
  event.preventDefault();
  let emailUsuario = document.getElementById("email").value;
  let nomeUsuario = document.getElementById("nome").value;
  let senhaUsuario = document.getElementById("senha").value;
  let tipo = document.getElementById("tipo").value;
  let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,})+$/;

  if (regexEmail.test(emailUsuario) && senhaUsuario.length >= 5) {
    window.alert(
      `Sucesso, ${nomeUsuario}! Usuário ${emailUsuario} do tipo ${tipo} cadastrado. Você será redirecionado para a página de login.`
    );
    redirecionarParaLogin(emailUsuario, senhaUsuario);
  } else {
    window.alert(
      "O campo email ou senha não atende aos requisitos. Favor preencha-os corretamente."
    );
  }
}

function redirecionarParaLogin(email, senha) {
  window.location.href = `./login.html?email=${email}&=${senha}`;
}

document.querySelector("form").addEventListener("submit", cadastrarUsuario);
