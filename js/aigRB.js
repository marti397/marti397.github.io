var kitchenLocation = "";
var outCookingText = "";

$("#wccb").on('change', function() {
  // Does some stuff and logs the event to the console
    kitchenLocation = $('#kitchenLocation').val();
    console.log("Bye Bye")
    console.log(kitchenLocation);
    outCookingText = "The site is provided with a full size commercial kitchen. " +
    "It is located " + kitchenLocation;
    console.log(outCookingText)
    $('#outputCookingText').val(outCookingText);
});

$('body').on('change', $('#id'), function() {
  // Action goes here.
});



