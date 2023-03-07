
import $ from 'jquery'

function ErrorAct(){

   let Erpage = document.createElement('div')
   let Erback = document.createElement('button')
   Erback.textContent = '돌아가기'
  
   Erpage.classList.add('Errorcode')
   Erpage.innerHTML = `
   <div>
   <h3>기능이 아직 구현되지않았습니다.</h3>
   <p>이기능은 아직 구현되지 않았습니다 불편을 드려 죄송합니다.</p>
   </div>
   `
   $(Erback).on('click', function(e){
      $(e.target).parents('div.Errorcode').slideUp(200)
   })
   document.querySelector('div#wrap').append(Erpage)
   document.querySelector('div.Errorcode>div').append(Erback)
}

export default ErrorAct()