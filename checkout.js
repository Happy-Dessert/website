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

var total=0;
var result=0;
function addvalue(number){
	result=result+number;
  var quantity = document.getElementById('quantity').value;
  if(quantity==="")
    alert('You should specify your required quantity')
  total= total+(result*quantity);
    console.log(total);
}

// function addvalue(number){
//   var total=0;
//   var result=0;
//   result=result+number;
//   var quantity = document.getElementById('quantity').value;
//   if(quantity==="")
//     alert('You should specify your required quantity')
//   total= total+(result*quantity);
//     console.log(total);
// }

