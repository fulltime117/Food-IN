$(document).ready(function(){
    var $html = $('html');
    $(window).on('load', function () {
      //preoad
      setTimeout(function(){ 
        preloaderFadeOutInit(); 
      }, 1000);

      if ($(window).width() < 1200) { $html.addClass('mobile'); } else { $html.addClass('desktop');}
      if ($(window).height() < 700) { $("#c_message").attr("rows",3)} else { $("#c_message").attr("rows",4)}
  
      //top contact
      // if ($(window).width()<=768) {
      //   $('#topcontact').addClass('d-none');
      // }
      // else {
      //   $('#topcontact').removeClass('d-none');
      // }
      // var className = $(".banner-swiper-wrapper:nth-child(1)").attr('class');
     
     });
  
     function preloaderFadeOutInit(){
        $('.preloader').fadeOut('3000');
     }
  
     $(window).resize(function() {
      //   location.reload();
        if ($(window).width()<=768) {
          $('#topcontact').addClass('d-none');
        }
        else {
          $('#topcontact').removeClass('d-none');
        }
        if ($(window).width() < 1200) { 
          $html.removeClass('desktop'); 
          $html.addClass('mobile'); 
        } else { 
          $html.removeClass('mobile');
          $html.addClass('desktop');
        }
      });
  
      //round animation
  
      setTimeout(function(){ 
        $(".food-wrapper").addClass("rotate1th");
      }, 2000);
  
      setTimeout(function(){
        $(".food-wrapper").removeClass("rotate1th");
        $(".food-wrapper").addClass("rotate2th");
      }, 4000);
  
      setTimeout(function(){
        $(".food-wrapper").removeClass("rotate2th");
        $(".food-wrapper").addClass("rotate3th");
      }, 6000);
  
      setTimeout(function(){      
        $(".food-wrapper").removeClass("rotate3th");
        $(".food-wrapper").addClass("rotate4th");
      }, 8000);

    var time1,time2,time3,time4;
    var myVar = setInterval(
      ready
      , 8000);

    function ready() {      
       time1 = setTimeout(function(){ 
        $(".food-wrapper").removeClass("rotate4th");
        $(".food-wrapper").addClass("rotate1th");
      }, 2000);
  
       time2 = setTimeout(function(){
        $(".food-wrapper").removeClass("rotate1th");
        $(".food-wrapper").addClass("rotate2th");
      }, 4000);
  
       time3 = setTimeout(function(){
        $(".food-wrapper").removeClass("rotate2th");
        $(".food-wrapper").addClass("rotate3th");
      }, 6000);
  
       time4 = setTimeout(function(){      
        $(".food-wrapper").removeClass("rotate3th");
        $(".food-wrapper").addClass("rotate4th");
      }, 8000);
    }
      
      
  
      $(".swiper-pagination-bullet").click(function(){      
        clearInterval(myVar);
        let num = Number($(this).attr("aria-label").slice(-1)) - 1;
        let key = (num === 0)?'rotate4th':'rotate' + num + 'th';
        $(".food-wrapper").removeClass("rotate1th rotate2th rotate3th rotate4th")
                          .addClass(key);
      });  
  
      $("#GoRegister").click(function(){
        $("#RegisterPageLink").trigger('click')
      })
      
      // calculate monthly money
      $('.estimate').click(function(){
        let average = Number($('[name="average"]').val());
        let orders = Number($('[name="orders"]').val());
        let earningMonthly = (average * orders * 30) * 0.9;
        $('.earningMonthly').text(earningMonthly);
      })

      

      //unmuted
      $(".video-play").click(function(){
        $("video").prop('muted', false);
        playVideo()
      });
      function playVideo() { 
        $('#adVideo').get(0).play(); 
      } 

      //close video
      $("#adClose").click(function(){        
        pauseVideo()
      });

      function pauseVideo() { 
        $('#adVideo').get(0).pause(); 
      } 


  });



  
  
  window.disableOnSwipe = 1;
  var bannerSwiper = new Swiper('.banner-swiper-container', {
    autoplay: {
      delay: 2000,       
    },
    speed:0,
    cubeEffect: {
      slideShadows: false,
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
  
  var socialpostSwiper = new Swiper('.socialpost-swiper-container', {
    slidesPerView: 1,  
    spaceBetween: 0, 
    speed:1000,
    loop:true,
    autoplay: {
      delay: 2000,       
    }, 
  
    pagination: {
        el: '.socialpost-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.socialpost-swiper-button-next',
        prevEl: '.socialpost-swiper-button-prev',
      },
      grabCursor:true
  });

  

  var winnerSwiper = new Swiper('.get-swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30, 
    slidesPerGroup: 1,
    speed:1000,
    loop:true,
    // autoplay: {
    //   delay: 2000,       
    // }, 
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
     
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
  });
  
  
  /* MENU POPUP BEAR */
  $('.trigger-popup-menu').click(function(){
    $('.menu-bear').delay(300).fadeIn(1000);
  });
  $('.popup-close-btn').click(function(){
    $('.menu-bear').fadeOut(200);
  });
  
  $('.menu-item').click(function(){
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
  });
  
  
  jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 767) {
        $('.grid-wrapper').removeClass('grid');
        $('.grid-wrapper').children().removeClass('item');
        $('.grid-wrapper').children().addClass('card');
        $('.agency-wrapper').removeClass('row');
  
      } else if (ww >= 768) {
        $('.grid-wrapper').addClass('grid');
        $('.grid-wrapper').children().removeClass('card');
        $('.grid-wrapper').children().addClass('item');
        $('.agency-wrapper').addClass('row');
  
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });
  
  
  
  /* CUSTOM SELECT OPTION */
  var x, i, j, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
  
  
  