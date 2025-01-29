let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nomeProduto, preco) {
    carrinho.push({ nome: nomeProduto, preco: preco });
    total += preco;
    atualizarCarrinho();
}

function mostrarCarrinho() {
    let modal = document.getElementById('carrinho-modal');
    let listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';  // Limpa a lista antes de adicionar os itens

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
    modal.style.display = 'flex';
}

function fecharCarrinho() {
    let modal = document.getElementById('carrinho-modal');
    modal.style.display = 'none';
}

function atualizarCarrinho() {
    document.getElementById('carrinho-count').textContent = carrinho.length;
}
