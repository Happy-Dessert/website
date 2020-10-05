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
// function object(){
//   var info={};
//   info.phone=document.getElementById("phone").value;
//   info.address=document.getElementById("Address").value;
//   info.amount=document.getElementById("amount").value;
// }
var add1= document.getElementById("order");
add1.onclick = function addTask() {
  //To get the input value we used. value and we will add it to the ul
  var inputText1 = document.getElementById("phone").value;
  var inputText2 = document.getElementById("Address").value;
  var inputText3 = document.getElementById("amount").value;
  var finalInput = "Phone: " +inputText1 +\n+ "Address: " + inputText2 +\n+ "Amount: $" + inputText3;  
  confirm(finalInput);
  // var newTask = document.createElement("li");
  // //add <li> to <ul>
  // document.getElementById("todo-list").appendChild(newTask);
  // //add inputText===TASK to li inside ul
  // //inner.HTML is used to type in values/give values
  // newTask.innerHTML = inputText;
  // console.log("Add new task");
}