time1 = 0;
function printmsg1(){
    document.getElementById("text1").innerHTML = "After 3 seconds!";
}
function settimeout(){
    time = window.setTimeout(printmsg1, 3000);
}
function cleartimeout(){
    window.clearTimeout(time);
}
seconds = 0;
time2 = 0;
function printmsg2(){
    document.getElementById("text2").innerHTML = "After " + seconds + " seconds!";
    seconds++;
}
function setinterval(){
    time2 = window.setInterval(printmsg2, 1000);
}
function clearinterval(){
    window.clearInterval(time2);
}
//----------------------------
opacity = 0;
intervalID1 = 0;
function fadein(){
    intervalID1 = setInterval(show, 50);
}
function show(){
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity += 0.1;
        img.style.opacity = opacity;
    } else {
        clearInterval(intervalID1);
    }
    console.log(opacity);
}
function fadeout(){
    intervalID1 = setInterval(hide, 50);
}
function hide(){
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity > 0){
        opacity -= 0.1;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID1);
    }
    console.log(opacity);
}
//----------------------------
width = 100;
difference = 2;
intervalID2 = 0;
//document.getElementById("img2").style.width = width;
function increase(){
    clearInterval(intervalID2);
    intervalID2 = setInterval(zoomIn, 20);
}
function zoomIn(){
    if(width < 300){
        width += difference;
        document.getElementById("img2").style.width = width;
        console.log(width);
   }
    else{
        clearInterval(intervalID2);
    }
}
function decrease(){
    clearInterval(intervalID2);
    intervalID2 = setInterval(zoomOut, 20);
}
function zoomOut(){
    if (width > 100) {
        width -= difference;
        document.getElementById("img2").style.width = width;
        console.log(width);
    } else {
        clearInterval(intervalID2);
    }
}
//----------------------------
function fn1(){
    //alert();
    $("#h4").fadeToggle(1000);
}
function fn2(){
    //alert();
    $("h5, #div1, .item1, a b, p:first").fadeToggle(); //a b or a>b is same
    //first, even, odd, last
}