
document.addEventListener('DOMContentLoaded', () => {


  // форма
  const btn = document.querySelectorAll('.form-open');
  const btn2 = document.querySelector('.form-close');
  const btn3 = document.querySelector('.form-order');
  const btn4 = document.querySelector('.form-modal-close');

  const main = document.querySelector('.main-content');
  const form = document.querySelector('.form-bg');
  const modal = document.querySelector('.form-modal');


  btn[0].addEventListener('click', () => {
    main.style.display = "none"
    // formOp()
    form.style.display = "block"
  });
  btn[1].addEventListener('click', () => {
    main.style.display = "none"
    // formOp()
    form.style.display = "block"
  });
  btn[2].addEventListener('click', () => {
    main.style.display = "none"
    // formOp()
    form.style.display = "block"
  });
  btn[3].addEventListener('click', () => {
    main.style.display = "none"
    // formOp()
    form.style.display = "block"
  });

  btn2.addEventListener('click', () => {
    main.style.display = "block"
    form.style.display = "none"
  });
  btn3.addEventListener('click', () => {
    // modalOp()
    modal.style.display = "block"
  });
  btn4.addEventListener('click', () => {
    modal.style.display = "none"
    form.style.display = "none"
    main.style.display = "block"
  });


  const nullOpen = document.querySelector('.null-open');
  const nullBg = document.querySelector('.null-bg');

  const paperOpen = document.querySelector('.paper-open');
  const paper = document.querySelector('.partners_two-bg');

  const handsOpen = document.querySelector('.hands-open');
  const hands = document.querySelector('.partners_three-bg');

  nullOpen.addEventListener('click', () => {
    // nullOp()
    nullBg.style.display = "flex"
  });

  paperOpen.addEventListener('click', () => {
    // paperOp()
    paper.style.display = "flex"
  });

  handsOpen.addEventListener('click', () => {
    // handsOp()
    hands.style.display = "flex"
  });
  







  // function nullOp() {
  //   var el = document.getElementsByClassName("null-bg")[0];
  //   var op = 0;
  //   while (op <= 1) {
  //     (function(_op) {
  //       setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
  //     })(op);
  //     op += 0.1;
  //   }
  // }

  
  // function paperOp() {
  //   var el = document.getElementsByClassName("partners_two-bg")[0];
  //   var op = 0;
  //   while (op <= 1) {
  //     (function(_op) {
  //       setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
  //     })(op);
  //     op += 0.1;
  //   }
  // }


  // function handsOp() {
  //   var el = document.getElementsByClassName("partners_three-bg")[0];
  //   var op = 0;
  //   while (op <= 1) {
  //     (function(_op) {
  //       setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
  //     })(op);
  //     op += 0.1;
  //   }
  // }



  // // для формы
  // function formOp() {
  //   var el = document.getElementsByClassName("form-bg")[0];
  //   var op = 0;
  //   while (op <= 1) {
  //     (function(_op) {
  //       setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
  //     })(op);
  //     op += 0.1;
  //   }
  // }

  // // для модального окна
  // function modalOp() {
  //   var el = document.getElementsByClassName("form-modal")[0];
  //   var op = 0;
  //   while (op <= 1) {
  //     (function(_op) {
  //       setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
  //     })(op);
  //     op += 0.1;
  //   }
  // }
  


});








$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav:true,
    navContainerClass: "slider-nav",
    navClass: ["slider-nav__left","slider-nav__right"],
    responsive:{
      0:{
          items:1,
      },
      768:{
          items:3,
      },
    }
  });


  // скрипт блокировки кнопки



  // $("#phone1").mask("+79999999999");


  function catalogItemCounter(field){
			
    var fieldCount = function(el) {

      var 
        // Мин. значение
        min = el.data('min') || false,

        // Макс. значение
        max = el.data('max') || false, 

        // Кнопка уменьшения кол-ва
        dec = el.prev('.minus'), 

        // Кнопка увеличения кол-ва
        inc = el.next('.plus');

      function init(el) {
        if(!el.attr('disabled')){
          dec.on('click', decrement);
          inc.on('click', increment);
        }

        // Уменьшим значение
        function decrement() {
          var value = parseInt(el[0].value);
          value--;

          if(!min || value >= min) {
            el[0].value = value;
          }
        };

        // Увеличим значение
        function increment() {
          var value = parseInt(el[0].value);
            
          value++;

          if(!max || value <= max) {
            el[0].value = value++;
          }
        };
        
      }

      el.each(function() {
        init($(this));
      });
    };

    $(field).each(function(){
      fieldCount($(this));
    });
  }
  
catalogItemCounter('.fieldCount');


});



























// jQuery(document).ready(function($) {

// $(".slider").owlCarousel();
  
// $('.slider').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   items: 3,
// })
// });

// jQuery(document).ready(function(){
//   // $(".owl-carousel").owlCarousel();

//   $(".service-slider").owlCarousel({
    
    
//     margin:0,
//     center: true,
//     nav:true,
//     navClass: ['slider-prev', 'slider-next'],
//     navContainerClass: "slider-nav",
//     items: 3,
//     loop:true,
//     responsive:{
//       0:{
//           items:1,
          
//       },
//       990:{
//           items:2,
          
//       },
//       1320:{
//           items:3,
          
//       },
//     }
//   });

//   $('.galery-slider').owlCarousel({
  
//     margin:0,
    
//     nav:true,
//     navClass: ['galery-slider-prev', 'galery-slider-next'],
//     navContainerClass: "galery-slider-nav",
//     items: 1,
//     loop:true,
//   });
// });



// $(document).ready(function () {
//   $('.sub > a').click(function(){
//     $('.sub ul').slideUp();
//      if ($(this).next().is(":visible")){
//          $(this).next().slideUp();
//      } else {
//      $(this).next().slideToggle();
//      }
//     return false;
//   });
//      $('.mini-menu > ul > li > a').click(function(){
//    $('.mini-menu > ul > li > a, .sub a').removeClass('active');
//    $(this).addClass('active');
// }),
//      $('.sub ul li a').click(function(){
//    $('.sub ul li a').removeClass('active');
//    $(this).addClass('active');
// });
// });

// function MobileDetect() {
//   var UA = navigator.userAgent.toLowerCase();
//   return /android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA) ? true : false;
// }
// jQuery(document).ready(function($) {
//   // Если браузер не мобильный, работаем
//   if (!MobileDetect()) {
//     var $window = $(window), // Основное окно
//       $target = $("#nav"), // Блок, который нужно фиксировать при прокрутке
//       $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

//     $window.on("scroll", function() {
//       // Как далеко вниз прокрутили страницу
//       var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
//       if (scrollTop > $h) {
//         $target.addClass("sheensay_fixed");

//         // Иначе возвращаем всё назад
//       } else {
//         $target.removeClass("sheensay_fixed");
//       }
//     });
//   }
// });

// jQuery(function($) {
//   const section = $(".section"),
//     nav = $(".nav-menu"),
//     navHeight = nav.outerHeight(); // получаем высоту навигации

//   // поворот экрана
//   window.addEventListener(
//     "orientationchange",
//     function() {
//       navHeight = nav.outerHeight();
//     },
//     false
//   );

//   $(window).on("scroll", function() {
//     const position = $(this).scrollTop();

//     section.each(function() {
//       const top = $(this).offset().top - navHeight - 5,
//         bottom = top + $(this).outerHeight();

//       if (position >= top && position <= bottom) {
//         nav.find("a").removeClass("active");
//         section.removeClass("active");

//         $(this).addClass("active");
//         nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
//       }
//     });
//   });

//   nav.find("a").on("click", function() {
//     const id = $(this).attr("href");

//     $("html, body").animate(
//       {
//         scrollTop: $(id).offset().top - navHeight,
//       },
//       500
//     );

//     return false;
//   });
// });



//   $('#form').validate({
//     rules: {

//       name: {
//         required: true,
//         minlength: 2
//       },
//       email: {
//         minlength: 10,
//         email:true,
//       },
//       phone: {
//         required: true,
//       }
//     },
    

//       messages: {
//         name: {
//           required: "Имя обязательно",
//           minlength: "Минимальное количество символов - 2"
//         },
//         email: {
//           required: "Укажите e-mail",
//           email: "Укажите верный e-mail",
//         },
//         phone: {
//           required: "Укажите телефон",
//         },
//       },
    
//   });
  

  // $(".owl-carousel").owlCarousel();

 


// if (document.body.contains(document.querySelector(".swiper-price-imgs")))
//   var swiperCalculator = new Swiper(".swiper-price-imgs", {
//     // Optional parameters
//     slidesPerView: 1,

//     navigation: {
//       nextEl: ".swiper-price-next",
//       prevEl: ".swiper-price-prev",
//     },
//   });
// jQuery(document).ready(function($) {
//   var
 
//     $window = $(window), // Основное окно
 
//     $target = $("#nav"), // Блок, который нужно фиксировать при прокрутке
 
//     $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)
 
//   $window.on('scroll', function() {
 
//     // Как далеко вниз прокрутили страницу
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
//     // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
//     if (scrollTop > $h) {
 
//       $target.addClass("sheensay_fixed");
 
//     // Иначе возвращаем всё назад
//     } else {     
 
//       $target.removeClass("sheensay_fixed");
//     }
//   });
 
// });

// document.addEventListener('DOMContentLoaded', () => {

//   const btn = document.getElementById('nav-menu_mini');

//   const menu = document.querySelector('.nav-menu_mini-list');

  
  
//   btn.addEventListener('click', () => {
//     console.log("pip")
//     if (menu.style.display == "flex") {
//       menu.style.display = "none";
      
//     } else {
//       menu.style.display = "flex";
      
//     }
//   });


//   const link = document.querySelector('.mini')
//   const link2 = document.querySelector('.mini2')
//   const link3 = document.querySelector('.mini3')
//   const link4 = document.querySelector('.mini4')

//   link.addEventListener('click', () => {
//     console.log("pip")
//     menu.style.display = "none"
//   });
//   link2.addEventListener('click', () => {
//     console.log("pip")
//     menu.style.display = "none"
//   });
//   link3.addEventListener('click', () => {
//     console.log("pip")
//     menu.style.display = "none"
//   });
//   link4.addEventListener('click', () => {
//     console.log("pip")
//     menu.style.display = "none"
//   });

  // btnMenu.addEventListener('click', () => {
  //   if (navMenu.style.display == 'none') {
  //     navMenu.style.display = 'flex';
  //     btnIcon.style.transform = 'rotate(90deg)';

  //   } else {
  //     navMenu.style.display = 'none';
  //     btnIcon.style.transform = 'rotate(0deg)';
  //   }
  // });

  //   linkMenu.addEventListener('click', () =>{
  //     navMenu.style.display = 'none';
  //   });


// });

// document.addEventListener('DOMContentLoaded', function() {
//   var modalButtons = document.querySelectorAll('.js-open-modal'),
//       overlay      = document.querySelector('#overlay-modal'),
//       closeButtons = document.querySelector('.js-modal-close'),
//       modalElem = document.querySelector('.modal');
  
  
//   modalButtons.forEach(function(item){
     
//      item.addEventListener('click', function(e) {

        
        
//         modalElem.classList.add('modal-active');
//         overlay.classList.add('modal-active');
//      }); // end click
//   }); 

//     closeButtons.addEventListener('click', () => {
//       //  var parentModal = this.closest('.modal');
//       modalElem.classList.remove('modal-active');
//       overlay.classList.remove('modal-active');
//     });
//  }); 


