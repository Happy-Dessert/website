console.log('I am connected');

var index = 0;

function animatedImg() {
  var slideshow = document.getElementsByClassName("img");
  for ( var i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";  
  }
  index++;
  if (index > slideshow.length)
  	index = 1  
  slideshow[index-1].style.display = "block";  
  setTimeout(animatedImg, 2000); 
}

animatedImg();

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




