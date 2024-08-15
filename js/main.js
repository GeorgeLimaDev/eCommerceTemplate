import itens from "./itens_cardapio.js";


function getProjectcard({ valor, imagem, nome }) {
  return `<div class='item'>
        <h2>${nome}</h2>
        <h3>${valor}</h3>
          <div style="align-items: center;">
            <label for="${nome}">Quantidade </label>
            <input style="color:black;text-align:center;width:70px;height:50px;align:left;border-radius:35px;" type="number" class='count' name="item" value="${nome}" id="${nome}">
          </div>
        <img src=${imagem}>
        <button>Adicionar ao carrinho</button>
        <br>
      </div>`;
}

function addUsuarioLogado(loggedInUser) {
  let usuarioNaTela = document.getElementById("usuarioLogado");
  usuarioNaTela.innerHTML += `<p cursor=default> Bem vindo,${loggedInUser.nameUser}</p>`;

}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const usuario = urlParams.get('usuario');

const loggedInUser = JSON.parse(localStorage.getItem(usuario));


if (loggedInUser) {
  addUsuarioLogado(loggedInUser);
}


const projectContent = itens.map((f) => getProjectcard(f)).join("");
const projectConteiner = document.querySelector(".cardapio");

if (projectConteiner){
  projectConteiner.innerHTML = projectContent;

}
