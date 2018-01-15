// function mee(){
// 	var alone = document.querySelectorAll('.mee>div>div')
// 	for(var i =0; i<alone.length ; i++){
// 		alone[i].onclick = function(){
// 				this.children.style.display = 'block'
// 			}
// 		}
// 	}

// mee();

// var arr1 = $('.mee>div>div')
// for(var i =0 ;i < arr1.length ; i++){
// 	$(arr1).tap(function(){
// 		$(arr1[i]).children().css({'display','block'})
// 	})
// }


var chks=document.querySelectorAll("input");
var bian = document.querySelectorAll('.me>div>p')
// console.log(bian)
var color = document.querySelectorAll('.mee>div>div')
var shuliang = document.querySelector('.me>div>p')
   for(var i=0;i<chks.length;i++){
   		chks[i].setAttribute('num',i)
   		color[i].setAttribute('id',i)
      chks[i].onclick=function(){
      	line=parseInt(this.getAttribute('num'))
      	ps=document.getElementById(line)
         var ischk=0;
         for(var j=0;j<chks.length;j++){
            if(chks[j].checked){
            	ischk++;
               shuliang.text = ischk
            	ps.style.backgroundColor = '#50bbdb';
            }
         }
         if(ischk>2){
            // alert("最多只能选两项！");
            this.checked=false;
            ps.style.backgroundColor='#fff'
            // color[ischk].style.backgroundColor = '#fff';
         }
      }
   }
// for(var j =0;j<chks.length;j++){

// }
