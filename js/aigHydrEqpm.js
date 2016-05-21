var hydeqDataCollection = "";
$("#hydeqCompleted").on('click', function() {
    hydeqDataCollection = hydeqDataCollection + $('#hydeq1').val() + ", ";
    hydeqDataCollection = hydeqDataCollection + $('#hydeq2').val() + ", ";
    hydeqDataCollection = hydeqDataCollection + $('#hydeq3').val() + ", ";
    hydeqDataCollection = hydeqDataCollection + $('#hydeq4').val() + ", ";
    hydeqDataCollection = hydeqDataCollection + $('#hydeq5').val() + ", ";
    if($('#hydeq6').is(':checked')){hydeqDataCollection = hydeqDataCollection + "containment or drainage for the reservoir, "}
    hydeqDataCollection = hydeqDataCollection + $('#hydeq7').val() + ", ";
    hydeqDataCollection = hydeqDataCollection + $('#hydeq8').val() + ", ";
    if($('#hydeq10').is(':checked')){hydeqDataCollection = hydeqDataCollection + "Low reservoir level interlocks, "}
    if($('#hydeq11').is(':checked')){hydeqDataCollection = hydeqDataCollection + "Flame or heat detection above pumps, filters and reservoir, "}
    if($('#hydeq12').is(':checked')){hydeqDataCollection = hydeqDataCollection + "Interlocked to sprinkler system, "}
    if($('#hydeq14').is(':checked')){hydeqDataCollection = hydeqDataCollection + "Manual e-stop at least 40ft from equipment, "}
    if($('#hydeq15').is(':checked')){hydeqDataCollection = hydeqDataCollection + "At least one manual or automatic interlock, "}
    hydeqDataCollection = hydeqDataCollection + $('#hydeq16').val() + ", ";
    $('#hydeq17').val(hydeqDataCollection);
})