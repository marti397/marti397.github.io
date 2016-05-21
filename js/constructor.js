var whatIsMyText = ""
var tb = "text"
var cb = "checkbox"

//hydraulic equipment hazard
var allHydraulic = [
    {text:"This is a test",input:cb},
    {text:"Equipment Description, what is it used for?",input:tb},
    {text:"Size and location of the room",input:tb},
    {text:"Construction and fire resistance, at least 1 hour, check fire doors",input:tb},
    {text:"Type of fluid and propeties flash point - petroeum based, water based, less hazardous",input:tb},
    {text:"Operating pressure and temperature of the fluid",input:tb},
    {text:"Containment or Drainage",input:cb},
    {text:"Reservoir Size",input:tb},
    {text:"Fire protection - if at least one manual or automatic interlock use 0.18/2500 at least If no interlocks use .28/3000",input:tb},
    {text:"Low reservoir level interlocks",input:cb},
    {text:"Flame or heat detection above pumps, filters and reservoir",input:cb},
    {text:"Interlocked to sprinkler system",input:cb},
    {text:"Manual e-stop at least 40ft from equipment",input:cb},
    {text:"At least one manual or automatic interlock",input:cb},
    {text:"Additional Comments",input:tb},
    {text:"Final Output",input:tb},
];
createNewForm("hydraulicEquipmentForm","tabs-3");
addButtons("hydeqCompleted","hydraulicEquipmentForm");
looperAllElements("hydeq","hydraulicEquipmentForm",allHydraulic, "tabs-3");


//storage Hazard
var allStorage =[
    {text:"Size of the area sq ft", input:tb},
    {text:"Ceiling height and slope peak, eave and distance. should be less than 16%", input:tb},
    {text:"construction and fire resistance of the area", input:tb},
    {text:"Metal Halide? lamps", input:cb},
    {text:"Lamps fixtures with containment barriers?", input:cb},
    {text:"Turn off at least once a week for a minimum of 15 min", input:cb},
    {text:"Commodity?", input:tb},
    {text:"Encapsulated?",input:cb},
    {text:"Open top containers?",input:cb}
];
//create all storage hazard elements
createNewForm("storageForm","tabs-4")
looperAllElements("storage","storageForm",allStorage, "tabs-4")

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
function looperAllElements(typeOfHazard,nameOfTheForm,theArray, elementToAppend){
    for (i=0; i < theArray.length; i++){
        whatIsMyText = theArray[i].text
        if (theArray[i].input === "checkbox"){
            checkboxInput(i,whatIsMyText,typeOfHazard, elementToAppend);
        }else{
            textInput(i,whatIsMyText,typeOfHazard,nameOfTheForm,elementToAppend);
        }
    }
    return;
}

//function to create single text Inputs
function textInput(indexValue,textValue,hazardtype,formName, elementToAppend){
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
    document.getElementById(elementToAppend).appendChild(createbr);
    document.getElementById(elementToAppend).appendChild(creatediv);
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