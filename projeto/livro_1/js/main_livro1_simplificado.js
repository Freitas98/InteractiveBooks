const delay = s => new Promise(res => setTimeout(res, s * 1000));

function reproduzirTextoPagina(int){
    if(event != null && reproducaoAtivada) {return}
    pararAudio();
    audio = new Audio("./audio/livro1_simplificado/audio_folha_" + int +  ".mp3");
    audio.play();
}

function reproduzirTitulo(){
    if(event != null && reproducaoAtivada) {return}
    pararAudio();
    audio = new Audio("./audio/audio_titulo_livro.mp3");
    audio.play();
}

function reproduzirFimHistoria(){
    if(event != null && reproducaoAtivada) {return}
    pararAudio();
    audio = new Audio("./audio/fim_historia.mp3");
    audio.play();
}

function reproduzirClicavelPagina(clicavel){
    if(event != null && reproducaoAtivada) {return}
    pararAudio();
    audio = new Audio("./audio/"+ clicavel + ".mp3");
    audio.play();
}