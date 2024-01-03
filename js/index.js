$(function(){
    $(".ham").click(function(){
      $(".mobile").toggleClass("on");
    });
  
    $(".ul").hide();
  
    $(".min").click(function(){
      $(this).find(".ul").slideToggle();
    });
  });