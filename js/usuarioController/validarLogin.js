function validarLogin() {
  let dados = window.location.href;
  dados = dados.split("=");

  // Obter os valores inseridos no formulário de login (assumindo que você tenha campos de input para email e senha)
  const emailInput = document.getElementById("email").value;
  const senhaInput = document.getElementById("senha").value;

  // Obter a lista de usuários armazenados no localStorage
  const users = listUsers();

  // Verificar se o email e a senha inseridos correspondem a algum usuário armazenado
  const user = users.find(user => user.emailUser === emailInput && user.passwordUser === senhaInput);

  if (user) {
    window.alert(`Usuário ${user.emailUser} logado com sucesso. Redirecionando para a página inicial...`);

    // Redirecionar para a página inicial
    window.location.href = `../index.html?usuario=${user.id}`;
  } else {
    window.alert("Erro em um dos campos. Digite os dados cadastrados corretamente.");
  }
}

let botaoLogar = document.getElementById("botarAcessar")
botaoLogar.addEventListener("click", validarLogin)


function listUsers() {
  let users = []
  for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i)
      const value = JSON.parse(localStorage.getItem(key))
      users.push(value)
  }
  return users
}