$(document).ready(function(){
    $(window).scroll(function(){
        // sticky scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //scroll script
    $('.scroll-up-btn').click(function(){
        $('html').animate({
            scrollTop:0
        });
        $('html').css("scrollBehavior", "auto");
    });

    //toggle script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");      
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //typing script
    var typed = new Typed(".typing", {
        strings: ["Frontend", "Javascript", "Reactjs", "Vuejs"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    
    // responsive menu click item control
    if($('.menu .menu-item').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    }));

    $('.carousel').owlCarousel({
        margin:20,
        autoplayTimeOut: 100,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            600: {
                items: 2,
                nav:false
            },
            1000: {
                items: 3,
                nav:false
            }
        }
    });
});
