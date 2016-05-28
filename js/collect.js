var dataCollection = "";
$( ":button" ).on('click', function(){
    dataCollection = ""
    var selectedHazard = $(this).attr("id")
    switch($(this).attr("id")){
        case "storage":
            var dataUsed = allStorage
            break;
        case "hydeq":
            var dataUsed = allHydraulic
            break;
        case "emgen":
            var dataUsed = allGenerator
            break;
        case "flamliq":
            var dataUsed = allFlammableLiquids
            break;
        case "boiler":
            var dataUsed = allBoiler
            break;
        case "fireeq":
            var dataUsed = allFiredEquipment
            break;
        case "flamgas":
            var dataUsed = allFlammableGases
            break;
        case "propane":
            var dataUsed = allPropane
            break;
        case "ammonia":
            var dataUsed = allAmmonia
            break;
        case "battery":
            var dataUsed = allBatteryRoom
            break;
        case "electrical":
            var dataUsed = allElectrical
            break;
        case "external":
            var dataUsed = allExternalExposure
            break;
        case "oilheat":
            var dataUsed = allOilHeating
            break;
        case "miscStorage":
            var dataUsed = allMiscStorage
            break;
        case "pallet":
            var dataUsed = allIdlePallet
            break;
        case "computer":
            var dataUsed = allComputerRoom
            break;
        case "firetest":
            var dataUsed = allTesting
            break;
        case "dust":
            var dataUsed = dustCollector
            break;
        case "combustion":
            var dataUsed = combustionControlandAmmonia
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
