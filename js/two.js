$('.Nmain>.two').tap(function(){
      $('.Nmain>.one').css("background-color","#50bbdb")
      $('.Nmain>.one>img').css('display','none')
      $('.Nmain>.one>p').css('color','#fff')
      $('.Nmain>.two').css("background-color","#fff")
      $('.Nmain>.two>img').css("display","block")
      $('.Nmain>.two>p').css('color','#50bbdb')
})
$('.Nmain>.one').tap(function(){
      $('.Nmain>.two').css("background-color","#50bbdb")
      $('.Nmain>.two>img').css('display','none')
      $('.Nmain>.two>p').css('color','#fff')
      $('.Nmain>.one').css("background-color","#fff")
      $('.Nmain>.one>img').css("display","block")
      $('.Nmain>.one>p').css('color','#50bbdb')
})
$('.more1').tap(function(){
      $('.pic .none1').css("display","block")
      $('.more1').css('display','none')
})
$('.more2').tap(function(){
      $('.pic .none2').css("display","block")
      $('.more2').css('display','none')
})

function sousuo(){
   var text1 = $('.sou>input')
   // console.log(text1)
   document.querySelector('.sou>a').onclick = function(){
    if(text1.val()  == '南京'){
     document.querySelector('.sou>a').setAttribute('href','four.html')
    }else{
     alert('请输入‘南京’后再搜索！谢谢~')
    }
   }
  }
  sousuo();

var mySwiper = new Swiper('.swiper-container',{
      slidesPerView : 1,
      slidesPerGroup : 1,
      loop: true, 
      pagination: '.swiper-pagination',
      paginationClickable: true,
      speed: 500,
      loop: true,
      observer:true,
      observeParents:true,
      autoplayDisableOnInteraction : false,
      autoplay:1500   
})
