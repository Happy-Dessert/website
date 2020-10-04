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
