const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//passo 1 - pegar noJS o elemento HTML correspondente ao botao de troca de tema
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//const modoEscuroEstaAtivo

//passo 2 - pegar no JS o elemento HTML correspondente ao boy

//passo 3 - identificar o clique do usuario no botao de troca de tema
botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");
//altenar entre estados das classes
  if (modoEscuroEstaAtivo) {
    //body.classList.remove("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    //body.classList.add("modo-escuro");

    //passo 5 - trocar a imagem do botao de alterar tema para lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
  //passo 4 - adicionar a classe modo-escuro no body
});

//passo 6 - verificar se o body tem a classe do modo-escuro

//passo 7 - remover a classe modo-escuro do body

//passo 8 - trocar a imagem do botao de lua para o sol

//alert("Olá");
