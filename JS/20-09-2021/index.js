$("#dateinput").datepicker({        //https://api.jqueryui.com/datepicker/
    numberOfMonths: 1,
    changeYear: true,
    changeMonth: true,
    showWeek: true,
    weekHeader: "Week #",
    showOtherMonths: true,
    minDate: new Date(2021, 10, 5), //yyyy, mm, dd
    maxDate: new Date(2021, 10, 21)
});
//----------------------------
$("#myimg").tooltip({
    //track: true,
    content: "Tool-tip Taj",
    show: {
        effect: "blind",            //bounce, pulsate, highlight, explode, blind
        duration: 2000,
    },
    hide: {
        effect: "highlight",
        duration: 2000,
    }
});
//----------------------------
$("#mydiv3").accordion({            //https://jqueryui.com/accordion/
    collapsible: true,
    event: "click",                 //mouseover, click
    animate: 500,
    active: 1,                      //starts from 0
    heightStyle: true,
    icons: {
        header: "ui-icon-plus",     //https://api.jqueryui.com/theming/icons/
        activeHeader: "ui-icon-minus"
    }
});
//----------------------------
$("#btn1").click(function() { 
    $("#mydiv5").dialog({
        title: "Message-Box Welcome",
        draggable: false,
        resizable: true,
        height: 250,
        width: 400,
        modal: true,
        buttons: [
            {
                text: "Close",
                icon: "ui-icon-heart",
                click: function(){
                    $(this).dialog("close");
                }
            },
            {
                text: "Okay",
                icon: "ui-icon-heart",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });
    //e.preventDefault();
});
//----------------------------
var cities = ["New Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai", "New Delhi", "Aurangabad"];
$("#location").autocomplete({
    source: cities
}, {
    autoFocus: true,
    delay: 0,
    minLength: 2
});