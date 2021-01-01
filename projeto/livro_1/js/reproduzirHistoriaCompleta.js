async function reproduzirHistoria(){
    if(flipbook.turn('page') != 1){
        flipbook.turn('page', 1);
        await delay(3);
    }
    reproduzirTitulo();
    audio.onended = async function(){
        flipbook.turn("next");
        await delay(3);
        reproduzirTextoPagina(1);
        audio.onended = async function(){
            await delay(1);
            reproduzirTextoPagina(2);
            audio.onended = async function(){
                flipbook.turn("next");
                await delay(3);
                reproduzirTextoPagina(3);
                audio.onended = async function(){
                    await delay(1);
                    reproduzirTextoPagina(4);
                    audio.onended = async function(){
                        await delay(1);
                        reproduzirClicavelPagina('brilho');
                        audio.onended = async function(){
                            flipbook.turn("next");
                            await delay(3);
                            reproduzirTextoPagina(5);
                            audio.onended = async function(){
                                await delay(1);
                                reproduzirTextoPagina(6);
                                audio.onended = async function(){
                                    flipbook.turn("next");
                                    await delay(3);
                                    reproduzirClicavelPagina('água');
                                    audio.onended = async function(){
                                        await delay(1);
                                        reproduzirTextoPagina(7);
                                        audio.onended = async function(){
                                            await delay(1);
                                            reproduzirTextoPagina(8);
                                            audio.onended = async function(){
                                                await delay(1);
                                                reproduzirClicavelPagina('brilho');
                                                audio.onended = async function(){
                                                    flipbook.turn("next");
                                                    await delay(3);
                                                    reproduzirClicavelPagina('enxada');
                                                    audio.onended = async function(){
                                                        await delay(1);
                                                        reproduzirTextoPagina(9);
                                                        audio.onended = async function(){
                                                            await delay(1);
                                                            reproduzirTextoPagina(10);
                                                            audio.onended = async function(){
                                                                flipbook.turn("next");
                                                                await delay(3);
                                                                reproduzirTextoPagina(11);
                                                                audio.onended = async function(){
                                                                    await delay(1);
                                                                    reproduzirClicavelPagina('rugir_leao');
                                                                    audio.onended = async function(){
                                                                        await delay(1);
                                                                        reproduzirTextoPagina(12);
                                                                        audio.onended = async function(){
                                                                            reproduzirClicavelPagina('chiar_rato');
                                                                            audio.onended = async function(){
                                                                                flipbook.turn("next");
                                                                                await delay(3);
                                                                                reproduzirTextoPagina(13);
                                                                                audio.onended = async function(){
                                                                                    await delay(1);
                                                                                    reproduzirTextoPagina(14);
                                                                                    audio.onended = async function(){
                                                                                        reproduzirClicavelPagina('harpa');
                                                                                        audio.onended = async function(){
                                                                                            flipbook.turn("next");
                                                                                            await delay(3);
                                                                                            reproduzirTextoPagina(15);
                                                                                            audio.onended = async function(){
                                                                                                await delay(1);
                                                                                                reproduzirFimHistoria();
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}