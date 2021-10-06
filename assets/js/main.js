jQuery(document).ready(function ($) {


  $(".container-currency .currency").click(function () {
    $(".container-currency .currency").removeClass("select");
    $(this).addClass("select");
  });


  $(".flags img").click(function () {
    $(".flags img").removeClass("select-country");

    $(this).addClass("select-country");
  });


  $(".toggle").click(function () {
    $(".header-menu").slideToggle("slow", function () {
      $(".toggle").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".header-menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".toggle").show();
    });
  });

  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 992) {
      $(".cross").hide();
      $(".header-menu").hide();
      $(".toggle").show();
    } else {
      $(".header-menu").show();
      $(".cross").hide();
      $(".toggle").hide();
    }
  }

});