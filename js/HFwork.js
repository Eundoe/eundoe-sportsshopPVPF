import $ from "jquery";

$(function(){

  $(window).on('resize',function(){
    if(window.outerWidth <= 580 ){
      $('div#mlink>p.close').css('display','block')
      $('div#login').css('display','block')
      $('div#mlink').css('display','none')
    }
    if(window.outerWidth > 580 && window.outerWidth <= 980){
      $('div#mlink').css('display','block')
      $('div#mlink>p.close').css('display','none')
      $('div#login').css('display','none')
    }
    if(window.outerWidth >980){
      $('div#mlink').css('display','flex')
      $('div#login').css('display','block')
    }
  })
 



  // Main menu580
  $('p.mainmenu580').on('click', function(e){
    $('div#mlink>p.close').css('display','block')
    $('div#mlink').fadeIn(1000)
  })

  $('div#mlink>p.close').on('click', function(e){
    if (window.outerWidth<=579){
    $('div#mlink').fadeOut(1000)
      }
    $('div#login').fadeOut(1000)
    $('div#mlink>p.close').fadeOut(1000)
  })
  //main Menu 980
if(window.outerWidth < 980){
  $('p.mainmenu').on('click', function(e){
    $('div#mlink>p.close').css('display','block')
    $('div#login').fadeIn(1000)
  })
}


  // Footer

  $('p.more').on('click',function(e){
    $('div#footwrap').slideToggle(1200)
  })



})
