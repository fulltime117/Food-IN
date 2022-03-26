$(window).on('load', function () {
    //preoad
    setTimeout(function(){ 
        bannerEffect();
    }, 1200);

    function bannerEffect(){
        $('.banner-text').addClass("animate__fadeInLeft");
        $('.banner-image').addClass("animate__fadeInRight");
    }
});

// banner Initialize Swiper
var bannerSwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,       
    },

    loop:true,
    speed:400,
    cubeEffect: {
      slideShadows: true,
    },
    pagination: {
        el: '.banner-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.banner-swiper-button-next',
        prevEl: '.banner-swiper-button-prev',
    },
});


// In Phone Swiper
var bannerSwiper = new Swiper('.swiper-in-phone', {
    autoplay: {
      delay: 2000,       
    },

    loop:true,
    speed:500,
    cubeEffect: {
      slideShadows: true,
    },
    pagination: {
        el: '.banner-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.banner-swiper-button-next',
        prevEl: '.banner-swiper-button-prev',
    },
});

















//welcome show
var sc1 = new ScrollMagic.Controller();
var aa = document.getElementsByClassName("welcome-text")[0];	
var scene = new ScrollMagic.Scene({triggerElement: "#triger1"})
        .on("enter", function () {
            aa.style.opacity = "1";           
        })
        .on("leave", function () {
            aa.style.opacity = "0";           
        })
    // .addIndicators({name:"~~~~~~welcome show event~~~~~"})
    .setClassToggle(aa, "animate__lightSpeedInLeft") // add class toggle
    .addTo(sc1);

//about text-box 
var sc2 = new ScrollMagic.Controller();
var aboutBox = document.getElementsByClassName("about-us-text-box")[0];	
var scene = new ScrollMagic.Scene({triggerElement: "#triger2"})
        .on("enter", function () {
            aboutBox.style.opacity = "1";           
        })
        .on("leave", function () {
            aboutBox.style.opacity = "0";           
        })
    // .addIndicators({name:"~~~~~~welcome show event~~~~~"})
    .setClassToggle(aboutBox, "animateOnScroll") // add class toggle
    .addTo(sc2);

//why-text
var sc3 = new ScrollMagic.Controller();
var why = document.getElementsByClassName("why-text")[0];
var scene = new ScrollMagic.Scene({triggerElement: "#triger3"})
        .on("enter", function () {
            why.style.opacity = "1";           
        })
        .on("leave", function () {
            why.style.opacity = "0";           
        })
    // .addIndicators({name:"~~~~~~why show event~~~~~"})    
    .setClassToggle(why, "animate__zoomIn") // add class toggle
    .addTo(sc2);
// gallay box
var sc4 = new ScrollMagic.Controller();
var gallary = document.getElementsByClassName("gallary-content")[0];
var scene = new ScrollMagic.Scene({triggerElement: "#triger4"})
    .on("enter", function () {
       $('.ga').css('opacity','1')           
    })
    .on("leave", function () {
        $('.ga').css('opacity','0')              
    })
.setClassToggle(gallary, "animateOnScroll") // add class toggle
.addTo(sc2);



    $(window).scroll(function(){
        var height = $(window).height();
        var top = $(window).scrollTop();
        var offset = top - height
        var tt = offset*0.7 
        // console.log(top);

        if(offset>516 && offset<896){ 
            
            // apply the offset as a css transform to our buttons
            $('.dish1').css({
                '-moz-transform': 'rotate(' + tt + 'deg)',
                '-webkit-transform': 'rotate(' + tt + 'deg)',
                '-o-transform': 'rotate(' + tt + 'deg)',
                '-ms-transform': 'rotate(' + tt + 'deg)',
                'transform': 'rotate(' + tt + 'deg)',
            });
        }

        if(offset>830 && offset<1250){          
            // apply the offset as a css transform to our buttons
            $('.dish2').css({
                '-moz-transform': 'rotate(' + tt + 'deg)',
                '-webkit-transform': 'rotate(' + tt + 'deg)',
                '-o-transform': 'rotate(' + tt + 'deg)',
                '-ms-transform': 'rotate(' + tt + 'deg)',
                'transform': 'rotate(' + tt + 'deg)',
            });
        }

        if(offset>1205 && offset<1630){          
            // apply the offset as a css transform to our buttons
            $('.dish3').css({
                '-moz-transform': 'rotate(' + tt + 'deg)',
                '-webkit-transform': 'rotate(' + tt + 'deg)',
                '-o-transform': 'rotate(' + tt + 'deg)',
                '-ms-transform': 'rotate(' + tt + 'deg)',
                'transform': 'rotate(' + tt + 'deg)',
            });
        }

        if(offset>1565 && offset<2500){          
            // apply the offset as a css transform to our buttons
            $('.dish4').css({
                '-moz-transform': 'rotate(' + tt + 'deg)',
                '-webkit-transform': 'rotate(' + tt + 'deg)',
                '-o-transform': 'rotate(' + tt + 'deg)',
                '-ms-transform': 'rotate(' + tt + 'deg)',
                'transform': 'rotate(' + tt + 'deg)',
            });
        }
        
    }); 


    

        







    
