function atualizarTamanhoBotaoSair(){
    var botao = document.getElementById("botaoSair");
    botao.setAttribute("style", "width: " + $(window).height() * 0.065 + "px;")
}

$(window).on('resize',function() {
    atualizarTamanhoBotaoSair()
})