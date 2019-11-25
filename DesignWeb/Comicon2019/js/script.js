var nb;



$( "#dc" ).hide();
$( "#mv" ).hide();
$( "#sw" ).hide();
$( "#id1" ).hide();
$( "#id2" ).hide();
$( "#id3" ).hide();

$( "#ST" ).click(function() {
    $( "#sw" ).toggle();
    $( "#mv" ).hide();
    $("#dc").hide();

});
$( "#MV" ).click(function() {
    $( "#sw" ).hide();
    $( "#mv" ).toggle();
    $("#dc").hide();

});
$( "#DC" ).click(function() {
    $( "#sw" ).hide();
    $( "#mv" ).hide();
    $("#dc").toggle();
});






