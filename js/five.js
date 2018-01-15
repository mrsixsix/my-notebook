var addArr = document.querySelectorAll('.jiajian .add')
var subArr = document.querySelectorAll('.jiajian .sub')


function sub(obj){
	var num = obj.querySelector('.jiajian .num1').value;
	var num1 = obj.querySelector('.jiajian .num2').value;

	obj.querySelector('.downlode1 input').value = Number(num1)+Number(num)
}
function sub1(obj){
	var num = obj.querySelector('.jiajian .num2').value;
	var price = obj.querySelector('.daren1 .da').innerText;
	obj.querySelector('.xiaohai .da').innerText= num*price;
}
function sub2(obj){
	var num1 = obj.querySelector('.jiajian input').value;
	var price1 = obj.querySelector('.daren1 .da').innerText;
	obj.querySelector('.daren .dada').innerText= num1*price1;
}
for(var i = 0;i<addArr.length;i++){
	addArr[i].onclick = function(event){
		event.preventDefault();
		var num = this.parentNode.querySelector('input').value;
		num++
		this.parentNode.querySelector('input').value = num;
		sub(this.parentNode.parentNode.parentNode.parentNode.parentNode)
		sub1(this.parentNode.parentNode.parentNode.parentNode.parentNode)
		sub2(this.parentNode.parentNode.parentNode.parentNode.parentNode)
	}
}
for(var i = 0;i<subArr.length;i++){
	subArr[i].onclick = function(event){
		event.preventDefault();
		var num = this.parentNode.querySelector('input').value;
		if(num>=1){
			num--
		}else{
			num =0
		}
		this.parentNode.querySelector('input').value = num;
		sub(this.parentNode.parentNode.parentNode.parentNode.parentNode)
		sub1(this.parentNode.parentNode.parentNode.parentNode.parentNode)
		sub2(this.parentNode.parentNode.parentNode.parentNode.parentNode)

	}
}

