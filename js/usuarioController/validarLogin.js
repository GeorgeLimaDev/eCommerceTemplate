function validarLogin() {
  let email = document.getElementById("email").value
  let senha = document.getElementById("senha").value

  let dados = window.location.href
  dados = dados.split("=")
  console.log(dados)
  if (dados[1] == `${email}&` && dados[2] == senha) {
    window.alert(
      `Usuário ${email} logado com sucesso. Redirecionando para a página inicial...`
    )
    window.location.href = `../index.html?usuario=${email}`
  } else {
    window.alert(
      "Erro em um dos campos. Digite os dados cadastrados corretamente."
    )
  }
}

let botaoLogar = document.getElementById("botarAcessar")
botaoLogar.addEventListener("click", validarLogin)
