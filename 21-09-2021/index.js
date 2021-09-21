$(document).ready(function () {
    $("#mydiv1").datepicker({
        numberOfMonths: 1,
        changeYear: true,
        changeMonth: true,
        showWeek: true,
        weekHeader: "Week #",
        showOtherMonths: true,
        minDate: new Date(2021, 10, 5),
        maxDate: new Date(2021, 10, 21)
    });
    //----------------------------
    $("#mydiv2").accordion({ //https://jqueryui.com/accordion/
        collapsible: true,
        event: "click", //mouseover, click
        animate: 500,
        active: 1, //starts from 0
        heightStyle: true,
        icons: {
            header: "ui-icon-plus", //https://api.jqueryui.com/theming/icons/
            activeHeader: "ui-icon-minus"
        }
    });
    //----------------------------
    $("#mydiv3").dialog({
        title: "Message-Box Welcome",
        draggable: true,
        resizable: true,
        height: 300,
        width: 400,
        modal: false,
        buttons: [{
                text: "Close",
                icon: "ui-icon-heart",
                click: function () {
                    $(this).dialog("close");
                }
            },
            /*{
                text: "Okay",
                icon: "ui-icon-heart",
                click: function () {
                    $(this).dialog("close");
                }
            }*/
        ]
    });
    //----------------------------
    $("#getter").click(function() { 
        // e.preventDefault();
        ht = $("#mydiv3").dialog("option", "height");
        // alert(ht);
        nom = $("#mydiv1").datepicker("option", "numberOfMonths");
        active = $("#mydiv2").accordion("option", "active");
        document.getElementById("text").innerHTML = "Message-Box Height: " + ht + "<br>Datepicker Number of Months: " + nom + "<br>Accordion Active: " + active;
    });
    $("#setter").click(function() { 
        // e.preventDefault();
        $("#mydiv3").dialog("option", "height", "600");
        $("#mydiv1").datepicker("option", "numberOfMonths", 2);
        $("#mydiv2").accordion("option", "active", 2);
    });
    //----------------------------
    /*$(".lorem").draggable({
        // axis: "x",
        containment: "parent",              //parent, document, 
        cursor: "grabbing",
        opacity: 0.5,
        // grid: [100, 100],
        snap: true,
        snapTolerance: 30,
    });*/
    
    //sortable to be used on parent elements and not elements to be sortables
    $(".mydivs").sortable({
        cursor: "grabbing",
        opacity: 0.5,
        distance: 50,
        // delay: 300,
        containment: "parent",
    });
    //----------------------------
    $("#img1").resizable({
        maxWidth: 500,
        maxHeight: 500,
        autoHide: true,
        ghost: true,
        // distance: 50,
        aspectRatio: true
    });
});