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
                await delay(1);
                reproduzirClicavelPagina('fala_chico');
                audio.onended = async function(){
                    await delay(1);
                    reproduzirClicavelPagina('fala_pico');
                    audio.onended = async function(){
                        await delay(1);
                        reproduzirClicavelPagina('fala_mico');
                        audio.onended = async function(){
                            flipbook.turn("next");
                            await delay(3);
                            reproduzirTextoPagina(3);
                            audio.onended = async function(){
                                await delay(1);
                                reproduzirTextoPagina(4);
                                audio.onended = async function(){
                                    await delay(1);
                                    reproduzirClicavelPagina('fala_lobo_mau_1');
                                    audio.onended = async function(){
                                        flipbook.turn("next");
                                        await delay(3);
                                        reproduzirTextoPagina(5);
                                        audio.onended = async function(){
                                            await delay(1);
                                            reproduzirTextoPagina(6);
                                            audio.onended = async function(){
                                                await delay(1);
                                                reproduzirClicavelPagina('fala_lobo_mau_2');
                                                audio.onended = async function(){
                                                    flipbook.turn("next");
                                                    await delay(3);
                                                    reproduzirTextoPagina(7);
                                                    audio.onended = async function(){
                                                        await delay(1);
                                                        reproduzirClicavelPagina('fala_lobo_mau_3');
                                                        audio.onended = async function(){
                                                            await delay(1);
                                                            reproduzirTextoPagina(8);
                                                            audio.onended = async function(){
                                                                flipbook.turn("next");
                                                                await delay(3);
                                                                reproduzirTextoPagina(9);
                                                                audio.onended = async function(){
                                                                    await delay(1);
                                                                    reproduzirClicavelPagina('fala_lobo_mau_3');
                                                                    audio.onended = async function(){
                                                                        await delay(1);
                                                                        reproduzirTextoPagina(10);
                                                                        audio.onended = async function(){
                                                                            flipbook.turn("next");
                                                                            await delay(3);
                                                                            reproduzirTextoPagina(11);
                                                                            audio.onended = async function(){
                                                                                await delay(1);
                                                                                reproduzirTextoPagina(12);
                                                                                audio.onended = async function(){
                                                                                    flipbook.turn("next");
                                                                                    await delay(3);
                                                                                    reproduzirTextoPagina(13);
                                                                                    audio.onended = async function(){
                                                                                        await delay(1);
                                                                                        reproduzirTextoPagina(14);
                                                                                        audio.onended = async function(){
                                                                                            await delay(1);
                                                                                            reproduzirClicavelPagina('fala_lobo_mau_4');
                                                                                            audio.onended = async function(){
                                                                                                flipbook.turn("next");
                                                                                                await delay(3);
                                                                                                reproduzirTextoPagina(15);
                                                                                                audio.onended = async function(){
                                                                                                    await delay(1);
                                                                                                    reproduzirClicavelPagina('iupi_conseguimos');
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
    }
}