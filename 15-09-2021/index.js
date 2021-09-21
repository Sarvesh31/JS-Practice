function newImg(){
    document.getElementById("img1").src = "/15-09-2021/photo2.jpeg";
}
function oldImg(){
    document.getElementById("img1").src = "/15-09-2021/photo.jfif";
}
//----------------------------
function validate(){
    var user = document.getElementById("uname");
    var pass = document.getElementById("pwd");
    if(user.value.trim() == ""){
        //alert("Username cannot be blank!");
        uname.style.border = " solid 2px red";
        document.getElementById("lbl1").style.visibility = "visible";
        document.getElementById("lbl1").innerHTML = "Username cannot be blank!";
        return false;
    }
    else if(user.value.trim().length < 5){
        //alert("Username length should be more than 5 characters!");
        uname.style.border = " solid 2px red";
        document.getElementById("lbl1").style.visibility = "visible";
        document.getElementById("lbl1").innerHTML = "Username length should be more than 5 characters!";
        return false;
    }
    /*else{
        user.style.border = "solid 1px black";
        document.getElementById("lbl1").style.visibility = "Hidden";
        //return true;
    }*/
    if(pass.value.trim() == ""){
        //alert("Password cannot be blank!");
        pass.style.border = "solid 2px red";
        document.getElementById("lbl2").style.visibility = "visible";
        document.getElementById("lbl2").innerHTML = "Password cannot be blank!";
        return false;
    }
    else if(pass.value.trim().length < 5){
        //alert("Password length should be more than 5 characters!");
        pass.style.border = "solid 2px red";
        document.getElementById("lbl2").style.visibility = "visible";
        document.getElementById("lbl2").innerHTML = "Password length should be more than 5 characters!";
        return false;
    }
    /*else{
        pass.style.border = "solid 1px black";
    }*/
}
//----------------------------
function validation(){
    var username = document.getElementById("uname1").value;
    var mobno = document.getElementById("num1").value;
    var email = document.getElementById("email").value;
    //console.log(mobno);
    var regex = /[^a-z]abc/;
    var numregex = /^[5-9][a-z]{8}0$/; //^[7-9]\d{9}$
    var emailregex = /^([a-zA-z0-9\.-]+)([a-zA-z0-9-]+).([a-z]{2, 20})(.[a-z]{2, 8})?$/;
    var emailregex = /[[a-z0-9]-._]*@gmail.com$/
    if(regex.test(username)){
        //alert("Valid!");
        document.getElementById("lbl3").style.visibility = "visible";
        lbl3.style.color = "green";
        document.getElementById("lbl3").innerHTML = "Valid!";
    }
    else{
        //alert("Invalid");
        document.getElementById("lbl3").style.visibility = "visible";
        lbl3.style.color = "red";
        document.getElementById("lbl3").innerHTML = "Invalid!";
        return false;
    }
    if(numregex.test(mobno)){
        document.getElementById("lbl4").style.visibility = "visible";
        document.getElementById("lbl4").style.color = "green";
        document.getElementById("lbl4").innerHTML = "Valid!";
    }
    else{
        document.getElementById("lbl4").style.visibility = "visible";
        document.getElementById("lbl4").style.color = "red";
        document.getElementById("lbl4").innerHTML = "Invalid!";
        // return false;
    }
    if (emailregex.test(email)) {
        document.getElementById("lbl5").style.visibility = "visible";
        document.getElementById("lbl5").style.color = "green";
        document.getElementById("lbl5").innerHTML = "Valid!";
    } else {
        document.getElementById("lbl5").style.visibility = "visible";
        document.getElementById("lbl5").style.color = "red";
        document.getElementById("lbl5").innerHTML = "Invalid!";
        // return false;
    }
}