function reproduzirHistoria(){
    /*var audio1 = new Audio("./audio/teste1.m4a");
    audio1.play();
    
    var audio2 = new Audio("./audio/teste2.m4a");
    
    audio1.onended = function() {
        audio2.play();
    };*/
}

function reproduzirTextoPagina(int){
    pararAudio();
    audio = new Audio("./audio/audio_folha_" + int +  ".mp3");
    audio.play();
}

function reproduzirTitulo(){
    pararAudio();
    audio = new Audio("./audio/audio_titulo_livro.mp3");
    audio.play();
}

function reproduzirFimHistoria(){
    pararAudio();
    audio = new Audio("./audio/fim_historia.mp3");
    audio.play();
}

function reproduzirClicavelPagina(clicavel){
    pararAudio();
    audio = new Audio("./audio/"+ clicavel + ".mp3");
    audio.play();
}

