$("li").append("<span class='circleNo'>&#x2717;</span>")
$("li").addClass("boxNo");
$("span").click(function(){
    if($(this).html()===document.getElementById("siTrue").innerHTML){
        $(this).html('&#x2717;');
        $(this).removeClass("circleYes");
        $(this).parent().removeClass("boxYes");
        $(this).addClass("circleNo");
        $(this).parent().addClass("boxNo");
    }else{
        $(this).html('&#x2713;');
        $(this).removeClass("circleNo");
        $(this).parent().removeClass("boxNo");
        $(this).addClass("circleYes");
        $(this).parent().addClass("boxYes");
    }
})
