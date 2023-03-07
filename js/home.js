import Header from './HFwork'
import $ from 'jquery'
import trendData from '../static/data/trend.json'
import slogunData from '../static/data/slogun.json'
import ErrorAct from './error'




$(function(){
  Header



  // slogun
  let movew = $('div#slogunshow>ul>li').width()
  let setbase = slogunData
  let start = 1
  let finish = setbase.length

  $('p.homenext').on('click',function(e){
    $(e.target).stop()
    start += 1
    if(start > finish){
      start = 1
    }  
    let newSlogun = document.createElement('li')
    newSlogun.innerHTML = `<dl>
      <dt>${setbase[start - 1].title}</dt>
      <dd>${setbase[start - 1].cont}</dd>
    </dl>`
    $('#slogunshow>ul').append(newSlogun);
    $('#slogunshow>ul>li:last').css('background','url(./image/slogun/slogun' + start + '.png) no-repeat center/cover')
    $('#slogunshow>ul').stop().animate({marginLeft: '-=' + movew + 'px'}, 500, function(){ 
      $('#slogunshow>ul>li:not(:last)').remove();
      $('#slogunshow>ul').css('margin-left','0')
    })
  })

  $('p.homeprev').on('click',function(e){
    start -= 1
    if(start <= 1){
      start = finish
    }
    let newSlogun = document.createElement('li')
    newSlogun.innerHTML = `<dl>
      <dt>${setbase[start - 1].title}</dt>
      <dd>${setbase[start - 1].cont}</dd>
    </dl>`
    $('#slogunshow>ul').css('margin-left', '-'+movew + 'px').prepend(newSlogun);
    $('#slogunshow>ul>li:first').css('background','url(./image/slogun/slogun' + start + '.png) no-repeat center/cover')
    $('#slogunshow>ul').stop().animate({marginLeft: '+=' + movew + 'px'}, 500, function(){ 
      $('#slogunshow>ul>li:not(:first)').remove();
      $('#slogunshow>ul').css('margin-left','0')
    })


  })



  // trend


  let manset = document.querySelectorAll('#mantrend>ul>li')
  let womanset = document.querySelectorAll('#womantrend>ul>li')
  let mantrendmove = $('#mantrend>ul>li').outerWidth()
  let womantrendmove = $('#womantrend>ul>li').outerWidth()
  let mstart = 1
  let wstart = 1

  $('p.mtrendnext').on('click', function(){
    mstart += 1
    if (mstart > (manset.length - 1)){
      mstart = manset.length - 1
      return false
    }
    $('#mantrend>ul:not(:animated)').animate({marginLeft : '-=' + mantrendmove + 'px' })
  })
  $('p.mtrendprev').on('click', function(){
    mstart -= 1
    if (mstart < 1){
      mstart = 1
      return false
    }
    
    $('#mantrend>ul:not(:animated)').animate({marginLeft : '+=' + mantrendmove + 'px' })
  })


  $('p.wtrendnext').on('click', function(){
    wstart += 1
    if (wstart > (womanset.length - 1)){
      wstart = womanset.length - 1
      return false
    }
    $('#womantrend>ul:not(:animated)').animate({marginLeft : '-=' + womantrendmove + 'px' })
  })

  $('p.wtrendprev').on('click', function(){
    wstart -= 1
    if (wstart < 1){
      wstart = 1
      return false
    }
    $('#womantrend>ul:not(:animated)').animate({marginLeft : '+=' + womantrendmove + 'px' })
  })

})



let manTrend = trendData.man
let womanTrend = trendData.woman

for(let i = 0 ; i < (manTrend.length); i++){
  let trndHeight = 200
  let mnewList = document.createElement('li')
  let mantrend = document.querySelector('div#mantrend>ul')
  mnewList.innerHTML = `
              <figure>
                <p style="background : url('./image/trend/mtrend${i + 1}.png') no-repeat center; background-size : cover; height: ${trndHeight}px"></p>
                <figcaption>
                  <p class="tname">${manTrend[i].product}</p>
                  <p class="tprice">${manTrend[i].price}</p>
                </figcaption>
              </figure>`
  mantrend.append(mnewList)

}


for(let i = 0 ; i < (womanTrend.length); i++){
  let trndHeight = 200
  let wnewList = document.createElement('li')
  let womantrend = document.querySelector('div#womantrend>ul')
  wnewList.innerHTML = `
  <figure>
  <p style="background : url('./image/trend/wtrend${i + 1}.png') no-repeat center; background-size : cover ;height: ${trndHeight}px"></p>
  <figcaption>
    <p class="tname">${womanTrend[i].product}</p>
    <p class="tprice">${womanTrend[i].price}</p>
  </figcaption>
</figure>`
  womantrend.append(wnewList)
}



// non-function place check point
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

$('div#homenewmem>dl>dd>a').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})