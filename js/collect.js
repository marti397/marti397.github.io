var dataCollection = "";
$( ":button" ).on('click', function(){
    dataCollection = ""
    var selectedHazard = $(this).attr("id")
    switch($(this).attr("id")){
        case "storage":
            var dataUsed = allStorage;
            break;
        case "hydeq":
            var dataUsed = allHydraulic;
            break;
        case "emgen":
            var dataUsed = allGenerator;
            break;
    }
    getAllData(dataUsed,selectedHazard,dataCollection);
})

//function to gather data
function getAllData (myArray,typeOfHazard,externalStringToCollect){
    var stringToCollect = "";
    for (i=0; i < myArray.length - 1; i++){
        var elementID = "#" + typeOfHazard + i;
        if (myArray[i].input === tb){
            stringToCollect = stringToCollect + $(elementID).val() + ", ";
        }else if (myArray[i].input === cb){
            if($(elementID).is(':checked')){
                stringToCollect = stringToCollect + myArray[i].text + ", ";
            }
        }
    }
    $("#" + typeOfHazard + (myArray.length - 1)).val(stringToCollect);
    dataCollection = stringToCollect;
}
