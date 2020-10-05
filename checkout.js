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

var firstOffer = document.getElementById('offer1')
var imgArray = ['doughnuts.jpg', 'Eclair.jpg', 'Pastry2.jpg', 'chocolate tart.jpg'];
var imgIndex = 1;
function presentImage() {
  firstOffer.setAttribute('scr',imgArray[imgIndex]);
  imgIndex++;
  if(imgIndex > 3)
    imgIndex = 0;
}

// imgArray[0] = new Image();
// imgArray[0].src = 'doughnuts.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = 'Eclair.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = 'Pastry2.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = 'chocolate tart.jpg';


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

