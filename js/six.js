$('.two>.top>.b').tap(function(){
	$('.two>.top>.xian').css('left','1.3rem')
	$(this).css('color','#50bbdb')
	$('.two>.top>.a').css('color','#000')
	$('.two>.buttom>.you').css('display','block')
	$('.two>.buttom>.zuo').css('display','none')

})
$('.two>.top>.a').tap(function(){
	$('.two>.top>.xian').css('left','0.15rem')
	$(this).css('color','#50bbdb')
	$('.two>.top>.b').css('color','#000')
	$('.two>.buttom>.zuo').css('display','block')
	$('.two>.buttom>.you').css('display','none')
})
var num =$('.banner>.one>.buttom>.num>input').val()
$('.banner>.one>.buttom>.num>.add').tap(function(){
	num++
	console.log(num)
	$('.banner>.one>.buttom>.num>input').val(num)
})
$('.banner>.one>.buttom>.num>.sub').tap(function(){
	if(num>1){
		num--
		$('.banner>.one>.buttom>.num>input').val(num)
	}else{
		num=1
	}
})


  var ind=$('.but>p>input').val()
	var num=$('#money').val()
	
	// console.log(ind,num)
	var num1 =Number(ind)-Number(num)
	

$('#two').tap(function(){
	$('#one').tap(function(){
		$('.but>p>input').val('5920')
	})
	ind =num1
	$('.but>p>input').val(ind)
	// console.log(ind)
	var ind1 =$('#id1').val()
	var num2 =Number(ind)+Number(ind1)
	var num21 =Number(ind1)+Number(num2)

	$('.check').tap(function(){
		if(this.checked ==true && $('.check1').prop('checked')===true){
			$('.but>p>input').val(num21)
		}else if(this.checked ==true && $('.check1').prop('checked')===false){
			$('.but>p>input').val(num2)
		}else if(this.checked ==false && $('.check1').prop('checked')===false){
			$('.but>p>input').val(ind)
		}else if(this.checked ==false && $('.check1').prop('checked')===true){
			$('.but>p>input').val(num2)
		}
	})

	// console.log(ind)
	var ind2 =$('#id').val()
	// console.log(num2,ind2)
	var num3 =Number(ind)+Number(ind2)
	// console.log(num3)
	var num4 =Number(ind2)+Number(num3)
	// console.log(num4)


	$('.check1').tap(function(){
		console.log(this.checked,$('.check').prop('checked'))
		if(this.checked ==true && $('.check').prop('checked')===true){
			$('.but>p>input').val(num4)
		}else if(this.checked ==true && $('.check').prop('checked')===false){
			$('.but>p>input').val(num3)
		}else if(this.checked ==false && $('.check').prop('checked')===false){
			$('.but>p>input').val(ind)
		}else if(this.checked ==false && $('.check').prop('checked')===true){
			$('.but>p>input').val(num3)
		}
		
	})

})

$('#one').tap(function(){
	var ind1 =$('#id1').val()
	var num2 =Number(ind)+Number(ind1)
	var num21 =Number(ind1)+Number(num2)

	$('.check').click(function(){
		if(this.checked ==true && $('.check1').prop('checked')===true){
			$('.but>p>input').val(num21)
		}else if(this.checked ==true && $('.check1').prop('checked')===false){
			$('.but>p>input').val(num2)
		}else if(this.checked ==false && $('.check1').prop('checked')===false){
			$('.but>p>input').val(ind)
		}else if(this.checked ==false && $('.check1').prop('checked')===true){
			$('.but>p>input').val(num2)
		}
	})

	// console.log(ind)
	var ind2 =$('#id').val()
	// console.log(num2,ind2)
	var num3 =Number(ind)+Number(ind2)
	// console.log(num3)
	var num4 =Number(ind2)+Number(num3)
	// console.log(num4)


	$('.check1').tap(function(){
		console.log(this.checked,$('.check').prop('checked'))
		if(this.checked ==true && $('.check').prop('checked')===true){
			$('.but>p>input').val(num4)
		}else if(this.checked ==true && $('.check').prop('checked')===false){
			$('.but>p>input').val(num3)
		}else if(this.checked ==false && $('.check').prop('checked')===false){
			$('.but>p>input').val(ind)
		}else if(this.checked ==false && $('.check').prop('checked')===true){
			$('.but>p>input').val(num3)
		}
		
	})
})
	







$('.banner>.four>.buttom>.three>i').tap(function(){
	$('.banner>.four>.buttom>.none').css('display','block')
	$(this).css('display','none')
})


$('.banner>.three>.buttom>div>.a').blur(function(){
	var username = /[\u4E00-\u9FA5]{2,4}/
	if(!username.test($(".banner>.three>.buttom>div>.a").val())){
		$(".tishi>.name").css('display','block').siblings("div").css("display","none")
	}else{
		$(".tishi>.dui").css('display','block').siblings("div").css("display","none")
	}
})
$('.banner>.three>.buttom>div>.b').blur(function(){
	var re=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
	if(!re.test($(".banner>.three>.buttom>div>.b").val())){
		$(".tishi>.number").css('display','block').siblings("div").css("display","none")
	}else{
		$(".tishi>.dui").css('display','block').siblings("div").css("display","none")
	}
})

$('.banner>.three>.buttom>div>.c').blur(function(){
	var re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	if(!re.test($(".banner>.three>.buttom>div>.c").val())){
		$(".tishi>.email").css('display','block').siblings("div").css("display","none")
	}else{
		$(".tishi>.dui").css('display','block').siblings("div").css("display","none")
	}
})

