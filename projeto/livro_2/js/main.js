const delay = s => new Promise(res => setTimeout(res, s * 1000));

function reproduzirTextoPagina(int){
    pararAudio();
    audio = new Audio("./audio/som-pagina" + int +  ".mp3");
    audio.play();
}

function reproduzirTitulo(){
    pararAudio();
    audio = new Audio("./audio/historia-capuchinho-vermelho.mp3");
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

