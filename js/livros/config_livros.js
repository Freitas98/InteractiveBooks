var flipbook = $('.livro');
var audio;

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
            pararAudio();
            audio = new Audio("../../audio/virar-pagina.mp3");
            audio.play();
        },
        turning: function(event, page, pageObject) {
            pararAudio();
        }
    }
});

function pararAudio(){
    if(audio){
        audio.pause();
    }
}

function atualizarTamanhoLivro(){
    var referencia = document.getElementById("referencia");
    var molduraLivro = document.getElementById("divMeio");
    molduraLivro.style.backgroundSize = "100% 100%";
    flipbook.turn('size', "100%", $(window).height()*0.65);
}

function atualizarTamanhoReprodutor(){
    var reprodutor = document.getElementById("reprodutor");
    var reprodutor2 = document.getElementById("reprodutor2");
    var barra = document.getElementById("barra");
    reprodutor.setAttribute("style", "height: " + $(window).height()*0.10 + "px;")
    reprodutor2.setAttribute("style", "height: " + $(window).height()*0.10 + "px;")
    barra.setAttribute("style", "height: " + $(window).height()*0.05 + "px;")
    var botao = document.getElementById("botaoPlay");
    botao.setAttribute("style", "height: " + $(window).height() * 0.08 + "px;")
    if (document.getElementById("botao36") != null && document.getElementById("botao710") != null) {
        var botao2 = document.getElementById("botao36");
        botao2.setAttribute("style", "height: " + $(window).height() * 0.08 + "px;")
        var botao3 = document.getElementById("botao710");
        botao3.setAttribute("style", "height: " + $(window).height() * 0.08 + "px;")
    }
}

function atualizarTamanhoProgressBar(){
    var progressBar = document.getElementById("botaoPlay");
    botao.setAttribute("style", "width: " + $(window).height() * 0.1 + "px;")
    botao2.setAttribute("style", "width: " + $(window).height() * 0.1 + "px;")
    botao3.setAttribute("style", "width: " + $(window).height() * 0.1 + "px;")
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
    var numeroTotalPaginas = flipbook.turn('pages') - 1;
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
    if(window.innerHeight < window.innerWidth){
        alert("Por favor utilize o modo de retrato!");
    }
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