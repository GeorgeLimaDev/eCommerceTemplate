function cadastrarUsuario(event) {
  event.preventDefault()
  let emailUsuario = document.getElementById("email").value
  let nomeUsuario = document.getElementById("nome").value
  let senhaUsuario = document.getElementById("senha").value
  let tipo = document.getElementById("tipo").value

  window.alert(
    `Sucesso, ${nomeUsuario}! Usuário ${emailUsuario} do tipo ${tipo} cadastrado. Você será redirecionado para a página de login.`
  )
  redirecionarParaLogin(emailUsuario, senhaUsuario)
}

function redirecionarParaLogin(email, senha) {
  window.location.href = `./login.html?email=${email}&senha=${senha}`
}

document.querySelector("form").addEventListener("submit", cadastrarUsuario)
