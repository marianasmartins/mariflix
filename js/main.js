$('.owl-carousel').owlCarousel({
    loop:true, /*para não parar de forma infinita. A netflix é infinito */
    margin:10,
    nav:false, //botões de navegação
    responsive:{
        0:{
            items:1 //quando a tela tiver 0px ou mais, pode colocar até 1 post
        },
        600:{
            items:3 //quando a tela tiver 600px ou mais, pode colocar até 3 posts
        },
        1000:{ //quando a tela tiver 1000px ou mais, pode colocar até cinco posts
            items:5
        }
    }
})