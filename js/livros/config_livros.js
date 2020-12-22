var flipbook = $('.livro');

flipbook.turn({ 
    width: 900,
    height: 600,
    duration: 1000,
    acceleration: true,
    gradients: true,
    autoCenter: false,
    elevation: 50,
    when:{
        turned: function(event, page, pageObject) {
			atualizarProgressoReprodutor();
        }
    }
});

function atualizarTamanhoLivro(){
    var referencia = document.getElementById("referencia");
    var molduraLivro = document.getElementById("divMeio");
    molduraLivro.style.backgroundSize = "100% 100%";
    flipbook.turn('size', "100%", $(window).height()*0.65);
}

function atualizarTamanhoReprodutor(){
    var reprodutor = document.getElementById("reprodutor");
    reprodutor.setAttribute("style", "height: " + 100 + "%;")
    var botao = document.getElementById("botaoPlay");
    botao.setAttribute("style", "width: " + $(window).height() * 0.1 + "px;")
}

function atualizarTamanhoProgressBar(){
    var progressBar = document.getElementById("botaoPlay");
    botao.setAttribute("style", "width: " + $(window).height() * 0.1 + "px;")
}

function atualizarTamanhoBotaoSair(){
    var botao = document.getElementById("botaoSair");
    botao.setAttribute("style", "width: " + $(window).height() * 0.05 + "px;")
}

function avancarPagina(){
    flipbook.turn('next');
    atualizarProgressoReprodutor();
}

function atualizarProgressoReprodutor(){
    var numeroTotalPaginas = flipbook.turn('pages');
    var paginaAtual = flipbook.turn('page');
    var progressoAtual = (paginaAtual * 100) / numeroTotalPaginas;
    var barraProgresso = document.getElementById("barraProgresso");
    barraProgresso.setAttribute("style", "width: " + progressoAtual + "%;");
}

function voltarPagina(){
    flipbook.turn('previous');
    atualizarProgressoReprodutor();
}

$(window).on('resize',function() {
    atualizarTamanhoLivro()
    atualizarTamanhoReprodutor()
    atualizarTamanhoBotaoSair()
    atualizarProgressoReprodutor()
}).on('orientationchange', function() {
    atualizarTamanhoLivro()
    atualizarTamanhoReprodutor()
    atualizarTamanhoBotaoSair()
    atualizarProgressoReprodutor()
}).on('load', function() {
    atualizarTamanhoLivro()
    atualizarTamanhoReprodutor()
    atualizarTamanhoBotaoSair()
    atualizarProgressoReprodutor()
});