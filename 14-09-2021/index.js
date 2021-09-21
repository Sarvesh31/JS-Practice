function add(num1, num2){
    document.write("<p>Add: ", num1+num2);
}
function diff(num1, num2){
    document.write("<p>Difference: ", num1-num2, "</p>");
}
function prod(num1, num2){
    document.write("<p>Product: ", num1*num2, "</p>");
}
function div(num1, num2){
    document.write("<p>Division: ", num1/num2, "</p>");
}

var num1 = 10;
var num2 = 5;
/*add(num1, num2);
diff(num1, num2);
prod(num1, num2);
div(num1, num2);*/
//----------------------------
function fruits(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    fruit.push(this.name);
    //document.write(name, " ");
    this.addfruit = function(){
        document.write("<p>Fruit added.</p>");
    }
}
var fruit = [];
var f1 = new fruits("Apple", "Red", 10);
var f2 = new fruits("Mango", "Yellow", 20);
f1.addfruit();
f2.addfruit();
document.write(fruit);
//document.write("<p>", f1.name);
fruits.size = 1;
document.write("<p>", fruits.size, "</p>");
delete fruits.size;
document.write("<p>", fruits.size, "</p>");
fruits.size = "3";
document.write(typeof(fruits.size));
//----------------------------
function buttonClick(){
    //alert("Hi there!");
    var x = document.getElementById("heading4").innerHTML = "Hello there!";
    //document.write(x);
}
function fn1(){
    var txt = document.getElementById("text1").value;
    //alert(txt);
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    if(pwd1 == pwd2){
        alert("Passwords Match!");
    }
    else{
        alert("Passwords do not match!");
    }
}
function fn2(){
    var rb1 = document.getElementById("rb1");
    var rb2 = document.getElementById("rb2");
    var rb3 = document.getElementById("rb3");
    if(rb1.checked == true){
        alert(rb1.value + " is selected");
    }
    else if(rb2.checked == true){
        alert(rb2.value + " is selected");
    }
    else if(rb3.checked == true){
        alert(rb3.value + " is selected");
    }
    else{
        alert("No color selected");
    }
}
function fn3(){
    var select = document.getElementById("sel1");
    alert(select.options[select.selectedIndex].value + " is selected");
}
function changestyle1(){
    var para = document.getElementsByTagName("p");
    para[2].style.fontSize = 50;
    para[3].style.color = "yellow";
    para[4].style.fontWeight = "bold";
    para[5].style.fontStyle = "italic";
    /*for(var i=0; i<para.length; i++){
        para[i].style.color = "yellow";
    }*/
}
function changestyle2(){
    var element = document.getElementsByClassName("c1");
    for(var i=0; i<element.length; i++){
        element[i].style.color = "blue";
    }
}
//----------------------------