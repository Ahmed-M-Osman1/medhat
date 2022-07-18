    $(window).on("load",function(){
        $(".lds-roller").fadeOut(3000);
    })
    $(function(){

   //navbar
    $(window).on("scroll", function () {
        let dist = $(this).scrollTop();
        if(dist > 70){
            $(".navbar").addClass("f-top");
            $(".navbar ul li a").addClass("top");
            $(".navbar a").addClass("top");
            $(".navbar  li.active div").css('background-color','#7971ea');
            $(".navbar").css("height","101px");
            console.log("graet")
        }
        else{
            $(".navbar").removeClass("f-top");
            $(".navbar a").removeClass("top");
            $(".navbar  li.active div").css('background-color','white');
            console.log("low")
        }
    })
       $(".navbar .nav-link").on("click", function () {
           $(this).parent().addClass("active").siblings().removeClass("active");
           let target = $(this).attr("href");
           console.log(target)
           $("body ,html").animate({
               scrollTop:$(target).offset().top
           },200)
       })



    //slider
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:false
                },
                1200:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });
        $(".owl-next span").html("next")
        $(".owl-prev span").html("prev")


   //animate on scroll
    AOS.init({
        duration:1000,
        offset:300
    });










})