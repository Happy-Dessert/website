console.log('I am connected');

var homeTab=document.getElementById('home');
var storeTab=document.getElementById('store');
var cartTab=document.getElementById('cart');

// homeTab.onclick = 
homeTab.onclick=function homePage(){
	location.href= "index.html";
}

storeTab.onclick=function storePage(){
	location.href= "store.html";
}
cartTab.onclick=function storePage(){
  location.href= "cart.html";
}



/*function addvalue(number){
   var result=0;
  var quantity = document.getElementById('quantity').value;
  
result=result+(number*quantity);
  if(quantity==="")
   alert('You should specify your required quantity')
  total= total+result;
    console.log(total);
}*/
 /* var array = [document.getElementById('quantity0').value, document.getElementById('quantity1').value, document.getElementById('quantity2').value,

  document.getElementById('quantity3').value]*/


var result=0;
function addvalue(number){
  var total=0;
  result=result+number;
  var quantity = document.getElementById('quantity').value;
  if(quantity==="")
  alert('You should specify your required quantity')
  total= total+(result*quantity);
  console.log(total);
var amount=document.getElementById('amount').innerHTML=total;
console.log(amount);
}
// var result=0;
// function addvalue(number)
// {
// result=result+number;
// console.log(result);
// }



//$("#amount").text(total);

