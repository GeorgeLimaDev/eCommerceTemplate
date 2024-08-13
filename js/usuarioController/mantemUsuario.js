function cadastrarUsuario(event) {
  event.preventDefault();
  let user = CreateUser()

  let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,})+$/;

  if (regexEmail.test(user.emailUser) && user.passwordUser.length >= 5) {
    window.alert(
      `Sucesso, ${user.nameUser}! Usuário ${user.emailUser} do tipo ${user.typeUser} cadastrado. Você será redirecionado para a página de login.`
    );
    saveUser(user)
    console.log("Está aqui")
    redirecionarParaLogin(user.emailUser, email.passwordUser);
  } else {
    window.alert(
      "O campo email ou senha não atende aos requisitos. Favor preencha-os corretamente."
    );
  }
}

function redirecionarParaLogin(email, senha) {
  window.location.href = `./login.html?email=${email}&=${senha}`;
}

function saveUser(user) {
  localStorage.setItem(user.id, JSON.stringify(user))
}
function deleteUser(id) {
  localStorage.removeItem(id)
}

function generateID(){
  let id;

  do {
      id = Math.floor(Math.random() * 100)
  }while(localStorage.getItem(id.toString()));

  return id
}

function CreateUser(){
  let emailUsuario = document.getElementById("email").value;
  let nomeUsuario = document.getElementById("nome").value;
  let senhaUsuario = document.getElementById("senha").value;
  let tipo = document.getElementById("tipo").value;


  return {
      id: generateID(),
      emailUser: emailUsuario,
      passwordUser:senhaUsuario,
      nameUser: nomeUsuario,
      typeUser: tipo

  }
}

document.querySelector("form").addEventListener("submit", cadastrarUsuario);
