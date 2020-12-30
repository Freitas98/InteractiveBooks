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
            reproduzirClicavelPagina('primeira-imagem-capuchinho');
            audio.onended = async function(){
                await delay(1);
                reproduzirTextoPagina(2);
                audio.onended = async function(){
                    await delay(1);
                    reproduzirClicavelPagina('capuchinho-tricotado');
                    audio.onended = async function(){
                        await delay(1);
                        reproduzirClicavelPagina('mae-som');
                        audio.onended = async function(){
                            flipbook.turn("next");
                                await delay(3);
                                reproduzirClicavelPagina('lobo-fome');
                                audio.onended = async function(){
                                    await delay(1);
                                    reproduzirTextoPagina(3);
                                    audio.onended = async function(){
                                        await delay(1);
                                        reproduzirTextoPagina(4);
                                        audio.onended = async function(){
                                            await delay(1);
                                            reproduzirClicavelPagina('cesta-som');
                                            audio.onended = async function(){
                                                await delay(1);
                                                reproduzirClicavelPagina('queijo-som');
                                                audio.onended = async function(){
                                                    await delay(1);
                                                    reproduzirClicavelPagina('mel-som');
                                                    audio.onended = async function(){
                                                        flipbook.turn("next");
                                                        await delay(3);
                                                        reproduzirTextoPagina(5);
                                                        audio.onended = async function(){
                                                            await delay(1);
                                                            reproduzirClicavelPagina('casa-som');
                                                            audio.onended = async function(){
                                                                await delay(1);
                                                                reproduzirTextoPagina(6);
                                                                audio.onended = async function(){
                                                                    await delay(1);
                                                                    reproduzirClicavelPagina('muito-obrigado-capuchinho');
                                                                    audio.onended = async function(){
                                                                        await delay(1);
                                                                        reproduzirClicavelPagina('lobo-enganei');
                                                                        audio.onended = async function(){
                                                                            flipbook.turn("next");
                                                                            await delay(3);
                                                                            reproduzirTextoPagina(7);
                                                                            audio.onended = async function(){
                                                                                await delay(1);
                                                                                reproduzirClicavelPagina('lobo-porta');
                                                                                audio.onended = async function(){
                                                                                    await delay(1);
                                                                                    reproduzirTextoPagina(8);
                                                                                    audio.onended = async function(){
                                                                                        await delay(1);
                                                                                        reproduzirClicavelPagina('lobo-vestido');
                                                                                        audio.onended = async function(){
                                                                                            flipbook.turn("next");
                                                                                            await delay(3);
                                                                                            reproduzirTextoPagina(9);
                                                                                            audio.onended = async function(){
                                                                                                await delay(1);
                                                                                                reproduzirClicavelPagina('capuchinho-porta');
                                                                                                audio.onended = async function(){
                                                                                                    await delay(1);
                                                                                                    reproduzirTextoPagina(10);
                                                                                                    audio.onended = async function(){
                                                                                                        await delay(1);
                                                                                                        reproduzirClicavelPagina('entra-netinha');
                                                                                                        audio.onended = async function(){
                                                                                                            flipbook.turn("next");
                                                                                                            await delay(3);
                                                                                                            reproduzirTextoPagina(11);
                                                                                                            audio.onended = async function(){
                                                                                                                await delay(1); 
                                                                                                                reproduzirClicavelPagina('avo-estranha');
                                                                                                                audio.onended = async function(){
                                                                                                                    await delay(1); 
                                                                                                                    reproduzirClicavelPagina('braco-comprido');
                                                                                                                    audio.onended = async function(){
                                                                                                                        await delay(1); 
                                                                                                                        reproduzirTextoPagina(12);
                                                                                                                        audio.onended = async function(){
                                                                                                                            await delay(1);
                                                                                                                            reproduzirClicavelPagina('que-barulho');
                                                                                                                            audio.onended = async function(){
                                                                                                                                await delay(1);
                                                                                                                                reproduzirClicavelPagina('lobo-dormir');
                                                                                                                                audio.onended = async function(){
                                                                                                                                    flipbook.turn("next");
                                                                                                                                    await delay(3);
                                                                                                                                    reproduzirTextoPagina(13);
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
                        }
                    }
                }
            }
        }

    }
}