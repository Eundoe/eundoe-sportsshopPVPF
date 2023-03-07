import $ from "jquery";
import Header from "./HFwork";
import Fdata from '../static/data/productwomen.json'
import ErrorAct from './error'

let Ivalue = 0
$(function(){
  $(window).on('resize',function(e){
    if (window.outerWidth == 979 || window.outerWidth == 579 )
    location.reload();});
  Header;
 

  // Sort
  $('#sort').on('click', function(e){
    $('#sortmodal').fadeIn(500)
  })
  $('.sortclose').on('click',function(){
    $('#sortmodal').fadeOut(500)
  })
  
  // Purchase modal
  $('p.modalclose').on('click',function(e){
    $('div#productmodal').fadeOut(500)
    $('span.result').html(0)
    $('select#psize').html("")
    $('select#pcolor').html("")
    Ivalue = 0
  })


  $('button.plus').on('click',function(e){
    Ivalue++
    return $('span.result').html(Ivalue)
  })


  $('button.minus').on('click',function(e){
    if (Ivalue == 0){
      return window.alert('수량은 0 이하가 되지않습니다.')
    }
    else{
      Ivalue--
      return $('span.result').html(Ivalue)
    }
  })

// sorting
let Bdata = Fdata
ListUp()
let SortData = []

$('#mcategory li').on('click',function(e){
  let sortWord = this.textContent.toLowerCase()
  sortClick(sortWord)
})

function sortClick(word){
  SortData = []
  if (word == 'default'){
  Bdata = Fdata
  Bdata.sort((a,b) => {
    return (a.id - b.id)
  })

  $('ul.paging').html('')

  ListUp()  
  }
  else{
  Fdata.map((item,index) => {
  if(item.type == word){
    SortData.push(item)
  }
  })
  Bdata = SortData
  $('ul.paging').html('')
  ListUp()  
  }
}


$('dl.pricesort>dd').on('click',function(e){
  let sortWord = this.textContent.toLowerCase()
  Sortsub(sortWord)
})

function Sortsub(x){
let sortD = Bdata
let sortname = x
 Bdata = sortD.sort((a,b) => {
  let order = (sortname === 'olim') ? 1 : -1
  return (a.price < b.price) ? -1 * order : 1 * order
}
 )
  $('ul.paging').html('')
  ListUp() 
}







function ListUp(){

//VanillaJS object part

  let modalName = document.querySelector('#buy>h3')
  let modalMpic = document.querySelector('#productimg>img')
  let modalPrice = document.querySelector('#buy>p>ins')
  let modalDesc = document.querySelector('#description>p')
  let modalSpic = document.querySelectorAll('#description>ul>li>img')
  const place1 = document.querySelector('ul#gall');

  let currentPage = 1;
  let postsPerpage = 12;
 
  // Data fucntion
  const currentPost = function(x){
    const indexOfLast = x * postsPerpage;
    const indexOfFirst = indexOfLast - postsPerpage;
    const postNow = Bdata.slice(indexOfFirst,indexOfLast)
    return postNow
  }
  let NowOnPost = currentPost(currentPage)
  
  function showup(){
    place1.innerHTML=""
    const colorSelect = document.querySelector('select#pcolor')
    const sizeSelect = document.querySelector('select#psize');
    for (let i = 0; i < NowOnPost.length; i++){
      let indexOn = NowOnPost[i]
      let NewList = document.createElement('li')

      NewList.classList.add('detail')
      NewList.innerHTML = `<figure><img src=${indexOn.mpic} alt=${indexOn.id} /><figcaption><h3>${indexOn.name}</h3><p><ins>${indexOn.price}</ins></p></figcaption></figure>`;
      place1.append(NewList)
    

      NewList.addEventListener('click', function(e){
        $('div#productmodal').fadeIn(500)
        modalName.textContent = indexOn.name
        modalMpic.setAttribute('src', indexOn.mpic)
        modalPrice.textContent = indexOn.price
        modalDesc.innerHTML = indexOn.description
          modalSpic.forEach((item,index) => {
            item.setAttribute('src', indexOn.spic[index])
        });
        for(let i = 0; i < indexOn.color.length; ++i){
          let colorOpt = document.createElement('option')
          colorOpt.setAttribute('value', indexOn.color[i])
          colorOpt.innerHTML = indexOn.color[i]
          colorSelect.append(colorOpt);
        }
        for(let i = 0; i < indexOn.size.length; ++i){
          let sizeOpt = document.createElement('option')
          sizeOpt.setAttribute('value', indexOn.size[i])
          sizeOpt.innerHTML = indexOn.size[i]
          sizeSelect.append(sizeOpt)
        }
      })
    }
  }


  showup()
  
  //  Pagination
  const totalPosts = Bdata.length;
  const pageNumber = [];
  
  for(let i = 1;i <= Math.ceil(totalPosts/postsPerpage);i++){ pageNumber.push(i)
  }  
  const listup = document.querySelector('ul.paging')
  for(let i = 1; i <= pageNumber.length; i++){
    let newLi = document.createElement('li')
    newLi.classList.add('datapage');
    newLi.setAttribute('type-value', i)
    newLi.innerHTML = i;
    listup.append(newLi)

    newLi.addEventListener('click', function(e){      
      currentPage = Number(this.getAttribute('type-value'))
      place1.innerHTML = ""
      NowOnPost = currentPost(currentPage)
      showup()
    })
    }
  $('li.datapage:first').addClass('showpage')
  $('li.datapage').on('click',function(e){
      $('li.datapage').removeClass('showpage')
      $(this).addClass('showpage')
    })
  
  
}

})


function AddItem(){
  let Product = document.querySelector('#buy>h3')
  let Picture = document.querySelector('#productimg>img')
  let Price = document.querySelector('#buy>p>ins')
  let Amount = document.querySelector('span.result')
  let Color = document.querySelector('select#pcolor')
  let Size = document.querySelector('select#psize')
  let CartList = JSON.parse(localStorage.getItem('baskets')) || [];
 
  let citem  = {
    id : CartList.length,
    name : Product.textContent,
    img : Picture.getAttribute('src'),
    amount : Number(Amount.textContent),
    total : Number(Amount.textContent) * Number(Price.textContent),
    color : Color.value,
    size : Size.value
  }
  CartList.push(citem)
  localStorage.setItem('baskets', JSON.stringify(CartList))
  console.log(CartList)
}

let CartBtn = document.querySelector('button.wbasket')
CartBtn.addEventListener('click',function(){
  AddItem()
  $('div#productmodal').fadeOut(500)
  $('span.result').html(0)
  $('select#psize').html("")
  $('select#pcolor').html("")
  Ivalue = 0
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
$('button.mbuy').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})

$('span.mfav').on('click', function(e){
  $('div.Errorcode').slideDown(500)
  return false
})






