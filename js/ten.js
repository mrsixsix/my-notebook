		showhour = '00'
		showsecond=60
		showminute=0
		function fun(){
			showsecond--
			if(showminute==0&&showsecond==0){
				clearInterval(time)
			}
			if(showsecond<10){
				showsecond='0'+showsecond
			}

			if(showsecond<0){
				showminute=showminute-1
				showsecond=parseInt(showsecond)+59
			}
			$('.daojishi>span').text(showhour +':'+showminute+':'+showsecond)
		}
		if(showminute<10){
				showminute='0'+showminute
			}
		fun()

		time=setInterval(fun,1000)





		
		function ting(){
			// disabled:ture; 禁用
			var daojishi = $('.daojishi>span').text()
			if(daojishi == '00:00:00'){
				$('.fukuan>div>a').css({'href':'javascript:;'})
				alert('付款超时，请重新下单')
				$('.fukuan>div>a').css({'backgroundColor':'#ccc'})
			}
		}

		// function


		