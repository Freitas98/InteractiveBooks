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

function teste(){
    var referencia = document.getElementById("referencia");
    flipbook.turn('size', $(window).width() * 0.615, $(window).height()*0.7 );
}

$(window).on('resize',function() {
    teste()
}).on('orientationchange', function() {
    teste()
}).on('load', function() {
    teste()
});