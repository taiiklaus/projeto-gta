/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    passo 1 - pegar o botão de selecão de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    passo 2 -  pegar o elemento do conteudo que precisa ser mostrado

    passo 3 - pegar o clique do usuario no js

    passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataforma já esteja aberto aparecendo e o usuario clicar no botao de fechar, o conteudo deve ser escondido

    passo 1- verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ela esconda o conteudo novamente

*/


const botao = document.querySelector('.btn-plataforma');

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});


