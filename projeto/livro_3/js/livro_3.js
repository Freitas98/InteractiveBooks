var flipbook = $('.livro');

flipbook.turn({ 
    width: 900,
    height: 600,
    duration: 1000,
    acceleration: true,
    gradients: true,
    autoCenter: false,
    elevation: 50
});

function atualizarTamanhoLivro(){
    var referencia = document.getElementById("referencia");
    var molduraLivro = document.getElementById("divMeio");
    molduraLivro.style.backgroundSize = "100% 100%";
    flipbook.turn('size', "100%", $(window).height()*0.73);
}

function avancarPagina(){
    flipbook.turn('next');
}

function voltarPagina(){
    flipbook.turn('previous');
}

$(window).on('resize',function() {
    atualizarTamanhoLivro()
}).on('orientationchange', function() {
    atualizarTamanhoLivro()
}).on('load', function() {
    atualizarTamanhoLivro()
});