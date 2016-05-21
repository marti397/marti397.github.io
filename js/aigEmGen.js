var emGenDataCollection = "";

$("#emGenCompleted").on('click', function() {
    emGenDataCollection = emGenDataCollection + $('#emgen1').val() + ", ";
    emGenDataCollection = emGenDataCollection + $('#emgen2').val() + ", ";
    emGenDataCollection = emGenDataCollection + $('#emgen3').val() + ", ";
    if($('#emgen4').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator has a containment wall, "}
    if($('#emgen5').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator has a containment curb, "}
    if($('#emgen6').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator has a dike or drainage, "}
    if($('#emgen7').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator has a secondary containment tank, "}
    if($('#emgen8').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator room has sprinklers, "}
    if($('#emgen9').is(':checked')){emGenDataCollection = emGenDataCollection + "the sprinklers have a minimum 0.30/2500, "}
    if($('#emgen10').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator is diesel, "}
    if($('#emgen11').is(':checked')){emGenDataCollection = emGenDataCollection + "the generator is natural gas, "}
    emGenDataCollection = emGenDataCollection + $('#emgen12').val() + ", ";
    if($('#emgen13').is(':checked')){emGenDataCollection = emGenDataCollection + "diesel tank has secondary containment, "}
    if($('#emgen14').is(':checked')){emGenDataCollection = emGenDataCollection + "diesel tank is double walled, "}
    if($('#emgen15').is(':checked')){emGenDataCollection = emGenDataCollection + "leak detection interlocked with pumps, "}
    if($('#emgen16').is(':checked')){emGenDataCollection = emGenDataCollection + "system shuts down on pipe break, "}
    if($('#emgen17').is(':checked')){emGenDataCollection = emGenDataCollection + "pumps interlocked upon suppression activation, "}
    if($('#emgen21').is(':checked')){emGenDataCollection = emGenDataCollection + "manual or automatic shutoffs, "}
    if($('#emgen18').is(':checked')){emGenDataCollection = emGenDataCollection + "LEL detection, "}
    emGenDataCollection = emGenDataCollection + $('#emgen19').val() + ", ";
    $('#emgen20').val(emGenDataCollection);
})