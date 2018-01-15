
window.onscroll=function(){
	var top=document.querySelector('html').scrollTop 
			if(top>= 1500){
				document.querySelector('.Top').style.right='0.2rem'
			}else{
				document.querySelector('.Top').style.right='-0.7rem'
			}
	document.querySelector('.Top').ontouchstart=function(){
		document.querySelector('html').scrollTop =0
	}
var arr=document.querySelectorAll('.xc>p')
for (var i=0;i<arr.length;i++){
			arr[i].index = i
			arr[i].onclick=function(event){
				event.preventDefault()
				var ind = this.index
				var top = document.querySelectorAll('.zou')[ind].offsetTop
				document.querySelector('html').scrollTop =top
			}
		}
}

