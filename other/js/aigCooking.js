var kitchenLocation = "",
    cookingArea = "",
    kitchenArea = "",
    outCookingText = "",
    grills = "",
    ovens = "",
    deepFryers = "",
    stoves = "",
    hoods = ""
    electricEqpmt = ""
    gasFiredEqpmt = ""
    cookingDataCollection = "";
$("#cookingCompleted").on('click', function() {
    getCookingValues();

    outCookingText = "The site is provided with a full size commercial kitchen. " +
    "It is located " + kitchenLocation +
    ". Size of the cooking area is about " + cookingArea + " sq. ft. " +
    "Size of the kitchen (size of fire area) is about " + kitchenArea + " sq. ft. " +
    "Cooking equipment includes " + grills + ", " + ovens + ", " + deepFryers + ", " + stoves + " and " + hoods +
    ". Cooking equipment is " + electricEqpmt + gasFiredEqpmt;

    $('#outputCookingText').val(outCookingText);
    console.log(outCookingText)
    
    
    if($('#wetChemicalKitchen').is(':checked')){
        cookingDataCollection = cookingDataCollection + "Wet Chemical System per ANSI/UL300 NFPA 96, 10.2.3, "
    }
    if($('#coverOilHazard').is(':checked')){
        cookingDataCollection = cookingDataCollection + "Protection covers all oil hazards, "
    }
    if($('#cookingFuelShutoff').is(':checked')){
        cookingDataCollection = cookingDataCollection + "System interlocked to shutoff fuel supply, "
    }
    if($('#hoodVent').is(':checked')){
        cookingDataCollection = cookingDataCollection + "Adequate hood ventilation, "
    }
    cookingDataCollection = cookingDataCollection + $('#CookingCanister').val() + ", ";
    cookingDataCollection = cookingDataCollection + $('#sizeCookingCanister').val() + ", ";
    if($('#kitchenSprinklers').is(':checked')){
        cookingDataCollection = cookingDataCollection + "Wet pipe sprinklers at the ceiling, "
    }
    if($('#kratedExtinguisher').is(':checked')){
        cookingDataCollection = cookingDataCollection + "Portable wet chemical extinguishers (K-rated) are also provided, "
    }
    cookingDataCollection = cookingDataCollection + "the hood is cleaned " + $('input[name=hoodCleaning]:checked').val() + ", ";
    cookingDataCollection = cookingDataCollection + $('#cookingCommentsTextbox').val() + ", ";  
    $('#dataCommercialCooking').val(cookingDataCollection);
    console.log(cookingDataCollection)
});

function getCookingValues(){
    kitchenLocation = $('#kitchenLocation').val();
    cookingArea = $('#cookingArea').val();
    kitchenArea = $('#kitchenArea').val();
    if($('#grills').is(':checked')){
        grills = $('#grills').val();
    }else{grills = ""}
    if($('#ovens').is(':checked')){
        ovens = $('#ovens').val();
    }else{ovens = ""}
    if($('#deepFryers').is(':checked')){
        deepFryers = $('#deepFryers').val();
    }else{deepFryers = ""}
    if($('#stoves').is(':checked')){
        stoves = $('#stoves').val();
    }else{stoves = ""}
    if($('#hoods').is(':checked')){
        hoods = $('#hoods').val();
    }else{hoods = ""}
    if($('#electricCooking').is(':checked')){
        electricEqpmt = $('#electricCooking').val();
    }else{electricEqpmt = ""}
    if($('#naturalGasCooking').is(':checked')){
        gasFiredEqpmt = " and " + $('#naturalGasCooking').val();
    }else{gasFiredEqpmt = ". Natural gas is not used in the kitchen."}
    return;
}

$(function() {
    $( "#tabs" ).tabs();
});



