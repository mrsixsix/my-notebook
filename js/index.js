
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
		$('.more').tap(function(){
			$('.pic .none').css("display","block")
			$('.more').css('display','none')
		})

		$('.target .one').tap(function(){
			$('.target>.one').css("border","2px solid #50bbdb")
			$('.target>.one>a').css('color','#50bbdb')
			$('.target>.two').css("border","2px solid #ececec")
			$('.target>.two>a').css('color','#a7a7a7')
			$('.target>.three').css("border","2px solid #ececec")
			$('.target>.three>a').css('color','#a7a7a7')
		})
		$('.target .two').tap(function(){
			$('.target>.two').css("border","2px solid #50bbdb")
			$('.target>.two>a').css('color','#50bbdb')
			$('.target>.one').css("border","2px solid #ececec")
			$('.target>.one>a').css('color','#a7a7a7')
			$('.target>.three').css("border","2px solid #ececec")
			$('.target>.three>a').css('color','#a7a7a7')
		})
		$('.target .three').tap(function(){
			$('.target>.three').css("border","2px solid #50bbdb")
			$('.target>.three>a').css('color','#50bbdb')
			$('.target>.two').css("border","2px solid #ececec")
			$('.target>.two>a').css('color','#a7a7a7')
			$('.target>.one').css("border","2px solid #ececec")
			$('.target>.one').css('color','#a7a7a7')
		})

		function sousuo(){
   	var text1 = $('.sousuo>input')
   	// console.log(text1)
   	document.querySelector('.sousuo>a').onclick = function(){
    	if(text1.val()  == '南京'){
    	 document.querySelector('.sousuo>a').setAttribute('href','four.html')
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