/* 
OBJETIVO 1 - quando clciar na seta de avnaçar, temos de mostar o proximo item da lista.
    - Passo 1 - conseguir pegar o elemteno HTML da seta avançar;
    - Passo 2 - identificar o clique do usuario na seta avançar;
    - Passo 3 - Fazer aparecer o proximo item da lista;
    - Passo 4 - buscar o item selecionado e esconder;
*/

const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function(){

    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    
});

const btnVoltar = document.getElementById('btn-voltar');

btnVoltar.addEventListener('click', function(){

    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});

