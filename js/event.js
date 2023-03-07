import Header from './HFwork'
import $ from 'jquery'
import ErrorAct from './error'


$(function(){
  Header

  $('div#roullete>dl>dd>button').on('click',function(e){
    $('div#emodal').fadeIn(1000)
  })

  $('p#emodalclose').on('click',function(){
    $('div#emodal').fadeOut()
    $('div#eventcont>p').show()
    $('div#randomresul').hide()
    Reback()

  })


  $('button.estart').on('click',function(e){
    e.target.textContent = 'Retry'
    RandomTreasure()


    })

})






function Reback(){
  let BigBox = document.querySelector('#eventcont>p')
  let Btn = document.querySelector('button.estart')
  BigBox.style.background = `url("./image/event/bigboxClose.png") no-repeat center`
  Btn.textContent = 'Start'
}






function RandomTreasure(){
  let Random = Math.floor(Math.random() * 6 + 1)
  let Box = document.querySelector('ul.treasured')
  let BigBox = document.querySelector('#eventcont>p')


  
  BigBox.style.background = `url("../image/event/bigboxOpen.png") no-repeat center`
  BigBox.textContent = 'BigTreasure' + Random
  Box.innerHTML= ''

  // Smallbox
 for(let i = 0; i < Random; i++ ){
    let SmallBox = document.createElement('li')
    SmallBox.classList.add('smallbox')
    SmallBox.style.background = `url("../image/event/bigboxClose.png") no-repeat center/cover`
    SmallBox.addEventListener('click', function(e){
      let product = [10,20,40,80,100]
      let Random2 = Math.floor(Math.random() * product.length)
      e.target.style.background = `url("../image/event/bigboxOpen.png") no-repeat center/cover`
      window.alert(`${product[Random2]}% 할인권에 당첨되었습니다!`)
    },{once:true})
    Box.append(SmallBox)
  }
 $('div#eventcont>p').hide()
 $('div#randomresul').fadeIn()

}

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

// differ Place
$('div#newmem>dl>dd>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})