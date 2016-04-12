var color = 1;
$("#colorChange").click(function(){
    if (color === 1){
        $("#colorChange").css("color","blue");
        color = 2;
    }else{
        $("#colorChange").css("color","green");
        color = 1;
    }
 });