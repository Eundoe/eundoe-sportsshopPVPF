import Header from './HFwork'
import $ from 'jquery'
import ErrorAct from './error'

$(function(){
  Header

 window.addEventListener('resize',function(){
  let Wwidth = window.outerWidth
  FocusOn(Wwidth)
 })
  


  $('dl.questions>dt:first-child').addClass('selected')
  $('dd:not(:first)').css('display','none')
  $('dl.questions>dt').on('click',function(e){
    let status = $(this).next('dd').css('display')
    if (status ===  'none'){
      $('.selected').next('dd').slideUp(500)
      $(this).next('dd').slideDown(500)
      $('dl.questions>dt').removeClass()
      $(this).addClass('selected')
    }
  })


  function FocusOn(x){
    let stat = $('div#format>form>fieldset>ul>li>input')
    let mstat = $('div#format>form>fieldset>ul>li>textarea')

  if(x <= 580){
    stat.on('focus',function(e){
      $(this).prev('label').fadeOut(100)
    })
    stat.on('blur',function(e)
    {
      $(this).prev('label').fadeIn(100)
    })
    mstat.on('focus',function(){
      $(this).prev('label').fadeOut(100)
    })
    mstat.on('blur',function(e)
    {
      $(this).prev('label').fadeIn(100)
    })
  }
  else{
    stat.off()
    mstat.off()
  }
  
}


})

ErrorAct
// merge place

$('ul#policy>li>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
  
})

$('ul#sns>li>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})

$('div#login>span>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})

$('ul#mypage>li:nth-child(1)>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})

$('ul#mypage>li:nth-child(3)>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})

// diff place


$('button#csubmit').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})

