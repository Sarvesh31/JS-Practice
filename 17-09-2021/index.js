$(document).ready(function(){
    //$("#mouseover").click(fn1);
    //$("#btn2").dblclick(fn1);
    $("#mouseleave").mouseenter(fn1);
    $("#mouseleave").mouseleave(fn2);
    $("#mouseenter").hover(fn1, fn2 );
    function fn1(){
        $("#div1").fadeOut();
    }
    function fn2(){
        $("#div1").fadeIn();
    }
    $("#hide").click(function() { 
        $("#div1").hide();
        //e.preventDefault();
    });
    $("#reveal").click(function() { 
        $("#div1").show();
        //e.preventDefault();
    });
    $("#hiderevealtoggle").click(function() {
        $("#div1").toggle();
        //e.preventDefault();
    });
    $("#fadeout").click(function () {
        $("#div1").fadeOut();
        //e.preventDefault();
    });
    $("#fadein").click(function() { 
        $("#div1").fadeIn();
        //e.preventDefault();
    });
    $("#fadetoggle").click(function() { 
        $("#div1").fadeToggle(1000, function() {
            document.getElementById("first").innerHTML = "Fading Completed!";
        });
        //e.preventDefault();
    });
    $("#slideup").click(function() { 
        $("#div1").slideUp();
        //e.preventDefault();
    });
    $("#slidedown").click(function() { 
        $("#div1").slideDown();
        //e.preventDefault();
    });
    $("#slidetoggle").click(function() { 
        $("#div1").slideToggle(1000, msg);
        //e.preventDefault();
    });
    $("#chaining").click(function() { 
        $("#div1").hide(1500).show(1500, function(){
            document.getElementById("first").innerHTML = "Hide/Reveal Completed!";
        }).fadeOut(1500).fadeIn(1500, function(){
            document.getElementById("first").innerHTML = "Fading Completed!";
        }).slideUp(1500).slideDown(1500, function(){
            document.getElementById("first").innerHTML = "Sliding Completed!";
        });
        //e.preventDefault();
    });
    function msg(){
        document.getElementById("first").innerHTML = "Slide Toggle Completed!";
    }
    //----------------------------
    $("#animate").click(function() { 
        $(".lorem").animate({
            left: '150px',
            opacity: '1',
            width: '100px',
            height: '100px',
        }, 1000)
        //e.preventDefault();
    });
    $("#deanimate").click(function() { 
        $(".lorem").animate({
            left: '8px',
            opacity: '0.5',
            width: '50px',
            height: '50px'
        }, 1000)
        //e.preventDefault();
    });
    //----------------------------
    $("#getvalue").click(function() { 
        /*alert($("#p1").html());
        $("#p1").text("Hello!");
        alert($("#p1").attr("class"));*/
        alert($("#p1").css("font-family"));
        //e.preventDefault();
    });
    $("#setvalue").click(function() { 
        /*$("#p1").attr("class", "hello");*/
        $("#p1").css("font-family", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif");
        //e.preventDefault();
    });
    $("#append").click(function() { 
        $("#div4").append("<p>Append!</p>");
        //e.preventDefault();
    });
    $("#after").click(function() { 
        $("#div4").after("<p>After!</p>");
        //e.preventDefault();
    });
    $("#prepend").click(function() { 
        $("#div4").prepend("<p>Prepend!</p>");
        //e.preventDefault();
    });
    $("#before").click(function() { 
        $("#div4").before("<p>Before!</p>");
        //e.preventDefault();
    });
    $("#remove").click(function() { 
        // $("#div4").remove();
        $("p").remove("#p2");
        //e.preventDefault();
    });
    $("#empty").click(function() { 
        $("#div4").empty("<p>Empty!</p>");
        //e.preventDefault();
    });
    $("#addclass").click(function() { 
        $("#div5").addClass("newdivclass");
        //e.preventDefault();
    });
    $("#removeclass").click(function() { 
        $("#div5").removeClass("newdivclass");
        //e.preventDefault();
    });
    $("#toggleclass").click(function() { 
        $("#div5").toggleClass("newdivclass newparaclass");
        //e.preventDefault();
    });
    $("#css").click(function() { 
        alert("Padding: " + $("#div4").css("padding"));
        $("#div4").css("font-size", "50px");
        //e.preventDefault();
    });
});