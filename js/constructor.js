var whatIsMyText = ""

//variables for emergency generator hazards
var formGenerator = "generatorForm";
var emgenHazardName = "emgen";
createNewForm(formGenerator,"tabs-2");
looperAllElements(emgenHazardName,formGenerator,allGenerator)
addButtons(emgenHazardName,formGenerator);

//variables for hydraulic equipment
var formHydraulicEquipment = "hydraulicEquipmentForm"
var hydraulicHazardName = "hydeq"
createNewForm(formHydraulicEquipment,"tabs-3");
looperAllElements(hydraulicHazardName,formHydraulicEquipment,allHydraulic);
addButtons(hydraulicHazardName,formHydraulicEquipment);

//variables for storage hazards
var formStorage = "storageForm";
var storageHazardName = "storage";
createNewForm(formStorage,"tabs-4");
looperAllElements(storageHazardName,formStorage,allStorage)
addButtons(storageHazardName,formStorage);

//flammable liquids
var formFlammableLiq = "flamLiqForm";
var flamLiqHazardName = "flamliq";
createNewForm(formFlammableLiq,"tabs-5");
looperAllElements(flamLiqHazardName,formFlammableLiq,allFlammableLiquids)
addButtons(flamLiqHazardName,formFlammableLiq);

//Boilers
var formBoiler = "boilerForm";
var boilerHazardName = "boiler";
createNewForm(formBoiler,"tabs-6");
looperAllElements(boilerHazardName,formBoiler,allBoiler)
addButtons(boilerHazardName,formBoiler);

//Fired Equipment
var formFiredEq = "firedEqForm";
var firedEqHazardName = "fireeq";
createNewForm(formFiredEq,"tabs-7");
looperAllElements(firedEqHazardName,formFiredEq,allFiredEquipment)
addButtons(firedEqHazardName,formFiredEq);

//Flammable gases
var formFlamGas = "flamGasForm";
var flamGasHazardName = "flamgas";
createNewForm(formFlamGas,"tabs-8");
looperAllElements(flamGasHazardName,formFlamGas,allFlammableGases)
addButtons(flamGasHazardName,formFlamGas);

//LPG propane
var formPropane = "propaneForm";
var propaneHazardName = "propane";
createNewForm(formPropane,"tabs-9");
looperAllElements(propaneHazardName,formPropane,allPropane)
addButtons(propaneHazardName,formPropane);

//Ammonia
var formAmmonia = "ammoniaForm";
var ammoniaHazardName = "ammonia";
createNewForm(formAmmonia,"tabs-10");
looperAllElements(ammoniaHazardName,formAmmonia,allAmmonia)
addButtons(ammoniaHazardName,formAmmonia);

//Battery Rooms - battery
var formBattery = "batteryForm";
var batteryHazardName = "battery";
createNewForm(formBattery,"tabs-11");
looperAllElements(batteryHazardName,formBattery,allBatteryRoom)
addButtons(batteryHazardName,formBattery);

//Electrical - electrical
var formElectrical = "electricalForm";
var electricalHazardName = "electrical";
createNewForm(formElectrical,"tabs-12");
looperAllElements(electricalHazardName,formElectrical,allElectrical)
addButtons(electricalHazardName,formElectrical);

//External Exposures - external
var formExternal = "externalForm";
var externalHazardName = "external";
createNewForm(formExternal,"tabs-13");
looperAllElements(externalHazardName,formExternal,allExternalExposure)
addButtons(externalHazardName,formExternal);

//Oil heat systems - oilheat
var formOil = "oilheatForm";
var oilHazardName = "oilheat";
createNewForm(formOil,"tabs-14");
looperAllElements(oilHazardName,formOil,allOilHeating)
addButtons(oilHazardName,formOil);

//MiscStorage - miscStorage
var formMiscStorage = "miscStorageForm";
var miscStorageHazardName = "miscStorage";
createNewForm(formMiscStorage,"tabs-15");
looperAllElements(miscStorageHazardName,formMiscStorage,allMiscStorage)
addButtons(miscStorageHazardName,formMiscStorage);

//Idle Pallet Storage - pallet
var formPallet = "palletForm";
var palletHazardName = "pallet";
createNewForm(formPallet,"tabs-16");
looperAllElements(palletHazardName,formPallet,allIdlePallet)
addButtons(palletHazardName,formPallet);

//Computer rooms - computer
var formComputerRoom = "computerRoomForm";
var computerRoomHazardName = "computer";
createNewForm(formComputerRoom,"tabs-17");
looperAllElements(computerRoomHazardName,formComputerRoom,allComputerRoom)
addButtons(computerRoomHazardName,formComputerRoom);

//Fire testing - firetest
var formFireTesting = "fireTestForm";
var fireTestHazardName = "firetest";
createNewForm(formFireTesting,"tabs-18");
looperAllElements(fireTestHazardName,formFireTesting,allTesting)
addButtons(fireTestHazardName,formFireTesting);


//function to create new form
function createNewForm(formID, elementToAppend){
    var newForm = document.createElement("form");
    newForm.setAttribute("action", "MAILTO:chris.m.servin@gmail.com");
    newForm.setAttribute("method", "post");
    newForm.setAttribute("enctype", "text/plain");
    newForm.setAttribute("id", formID);
    document.getElementById(elementToAppend).appendChild(newForm);
}

//function to create all elements
function looperAllElements(typeOfHazard,nameOfTheForm,theArray){
    for (i=0; i < theArray.length; i++){
        whatIsMyText = theArray[i].text
        if (theArray[i].input === "checkbox"){
            checkboxInput(i,whatIsMyText,typeOfHazard, nameOfTheForm);
        }else{
            textInput(i,whatIsMyText,typeOfHazard,nameOfTheForm);
        }
    }
    return;
}

//function to create single text Inputs
function textInput(indexValue,textValue,hazardtype,formName){
    var createbr = document.createElement("br");
    var creatediv = document.createElement("div");
    var createInputTextArea = document.createElement("textarea");
    var textfordiv = document.createTextNode(textValue);
    var textInputIndex = hazardtype + indexValue;
    createInputTextArea.setAttribute("id", textInputIndex)
    createInputTextArea.setAttribute("name", textInputIndex)
    createInputTextArea.setAttribute("form", formName)
    creatediv.appendChild(textfordiv);
    //creatediv.appendChild(createbr);
    creatediv.appendChild(document.createElement("br"));
    creatediv.appendChild(createInputTextArea);
    document.getElementById(formName).appendChild(createbr);
    document.getElementById(formName).appendChild(creatediv);
    return;
}

//function to create checkbox inputs
function checkboxInput(indexValue,textValue,hazardtype, elementToAppend){
    var createbr = document.createElement("br");
    var creatediv = document.createElement("div");
    var createinputCheckbox = document.createElement("input");
    var textfordiv = document.createTextNode(textValue);
    var checkboxInputIndex = hazardtype + indexValue;
    createinputCheckbox.setAttribute("id", checkboxInputIndex)
    createinputCheckbox.setAttribute("type", "checkbox")
    createinputCheckbox.setAttribute("name", checkboxInputIndex)
    createinputCheckbox.setAttribute("value", "")
    creatediv.appendChild(createinputCheckbox)
    creatediv.appendChild(textfordiv);
    document.getElementById(elementToAppend).appendChild(createbr)
    document.getElementById(elementToAppend).appendChild(creatediv)
    return;
}

//add completed, reset and submit buttons for each from
function addButtons(btnID,formID){
    var newCompleteBtn = document.createElement("input");
    var newSubmitBtn = document.createElement("input");
    var newResetBtn = document.createElement("input");
    newCompleteBtn.setAttribute("type", "button");
    newCompleteBtn.setAttribute("value", "Preview");
    newCompleteBtn.setAttribute("id", btnID);
    newSubmitBtn.setAttribute("type","submit");
    newSubmitBtn.setAttribute("value", "Send");
    newResetBtn.setAttribute("type","reset");
    newResetBtn.setAttribute("value", "Reset");
    $("#" + formID).append(newCompleteBtn);
    //document.getElementById(formID).appendChild(newCompleteBtn)
    document.getElementById(formID).appendChild(newSubmitBtn)
    document.getElementById(formID).appendChild(newResetBtn)
    
}