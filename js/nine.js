
var ind=$('.footer>p>input').val()
console.log(ind)
	
var ind1 =$('#id1').val()
	var num2 =Number(ind)+Number(ind1)
	var num21 =Number(ind1)+Number(num2)

	$('.check').click(function(){
		if(this.checked ==true && $('.check1').prop('checked')===true){
			$('.footer>p>input').val(num21)
		}else if(this.checked ==true && $('.check1').prop('checked')===false){
			$('.footer>p>input').val(num2)
		}else if(this.checked ==false && $('.check1').prop('checked')===false){
			$('.footer>p>input').val(ind)
		}else if(this.checked ==false && $('.check1').prop('checked')===true){
			$('.footer>p>input').val(num2)
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
			$('.footer>p>input').val(num4)
		}else if(this.checked ==true && $('.check').prop('checked')===false){
			$('.footer>p>input').val(num3)
		}else if(this.checked ==false && $('.check').prop('checked')===false){
			$('.footer>p>input').val(ind)
		}else if(this.checked ==false && $('.check').prop('checked')===true){
			$('.footer>p>input').val(num3)
		}
		
	})