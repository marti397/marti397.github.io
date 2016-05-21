var whatIsMyText = ""
var tb = "text"
var cb = "checkbox"

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