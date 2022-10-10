


////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////  main  //////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


$(document).ready(function () {
  //spinner
  $(".spinner ").fadeOut("slow");

  //SmoothScroll js
  var scroll = new SmoothScroll('a[href*="#"]');

  //AOS js
  AOS.init({
    offset: 30,
    duration: 500,
  });

  // SideNav Default Options
  $('.button-collapse').sideNav({
    edge: 'right',
    breakpoint: 992,
    menuWidth: 240,
  });

  // img gallery
  $('[data-fancybox]').fancybox({

    buttons: [
      "zoom",
      // "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    transitionEffect: "slide",
  });


  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();

    if ((appScroll > 60) && (appScroll < 99999999999)) {
      $(".navbar").addClass("navAnimate");

    };
    if ((appScroll > 0) && (appScroll < 60)) {
      $(".navbar").removeClass("navAnimate");
    };
  });



});