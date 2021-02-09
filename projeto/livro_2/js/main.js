const delay = s => new Promise(res => setTimeout(res, s * 1000));

function reproduzirTextoPagina(int){
    if(event != null && reproducaoAtivada) {return}
    pararAudio();
    audio = new Audio("./audio/som-pagina" + int +  ".mp3");
    audio.play();
}

function reproduzirTitulo(){
    if(event != null && reproducaoAtivada) {return}
    pararAudio();
    audio = new Audio("./audio/historia-capuchinho-vermelho.mp3");
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

