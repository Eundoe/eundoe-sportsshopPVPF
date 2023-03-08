import Header from './HFwork'
import $ from 'jquery'
import ErrorAct from './error'

Header

let filD = ''
let CartData = JSON.parse(localStorage.getItem('baskets'))





if (CartData.length > 0 ){
  let gall = document.querySelector('div#cartlist')
  gall.innerHTML = ``
}

for (let i = 0; i < CartData.length; i++){
  let gall = document.querySelector('div#cartlist')
  let newLi = document.createElement('figure')
  newLi.innerHTML = `
  <p><img src=${CartData[i].img} alt=${CartData[i].name}></p>
  <figcaption>
    <dl>
      <dt>제품명</dt>
      <dd>${CartData[i].name}</dd>
    </dl>
    <dl>
      <dt>수량</dt>
      <dd>${CartData[i].amount}</dd>
    </dl>
    <dl>
      <dt>사이즈</dt>
      <dd>${CartData[i].size}</dd>
    </dl>
    <dl>
      <dt>색깔</dt>
      <dd>${CartData[i].color}</dd>
    </dl>
    <dl>
      <dt>총액</dt>
      <dd>${CartData[i].total}</dd>
    </dl>  
    <p id="cartdelete" ><span class="material-symbols-outlined" type-value = ${i}>
    delete
    </span></p>
  </figcaption>
  `
  gall.append(newLi)
}

let deleteBtn = document.querySelectorAll('p#cartdelete>span')
deleteBtn.forEach((item) => {
  item.addEventListener('click',function(e){
    filD = e.target.getAttribute('type-value')
    CartData.splice(filD,1)
    localStorage.setItem('baskets',JSON.stringify(CartData))
    window.location.reload()

  })
})



