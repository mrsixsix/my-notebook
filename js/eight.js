var Phone = 
/^[1](3[0-9]|4[57]|5[012356789]|7[3678]|8[0-9])[0-9]{8}$/
		$('.phone>input').blur(function(){
			var val1 = $(this).val()
			if(Phone.test(val1) === false){
				alert('请输入正确的手机号')
			}
		})


var str1 = $('.name>input').val()
var pho = $('.phone>input').val()
var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$"); 
if (!re1.test(str1)){ 
alert("姓名格式错误");  
}
// $('nav>a').click(function(){
// 	if( pho == '' || str1 == '' ){
// 		alert('请检查是否已经填写完整！')
// 	}else if(Phone.test(val1) === true && re1.test(str1) ===true ){
// 		$('nav>a').attr('href','../seven.html')
// 	}
// })