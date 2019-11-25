//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");
$('#boutonGauche').click(function() {
    $('#flashID').animate({
        'marginLeft' : "-=30px" //moves left
    });
});
$('#boutonDroite').click(function() {
    $('#flashID').animate({
        'marginLeft' : "+=30px" //moves right
    });
});


$(document).ready(function() {
    $("#boutonChangerImage").click(function() {

        var src = $('#flashID').attr('src');

        if(src === 'Flash1.png') {
            $("#flashID").attr("src","img/Flash2.png");

        } else if(src === "img/Flash2.png") {
            $("#flashID").attr("src","img/Flash1.png");

        } else {
            $("#flashID").attr("src","img/Flash2.png");
        }
    });
});

$("#boutonEnleverImage").click(function(){
    $("#flashID").hide();
});

$("#boutonAjouterImage").click(function(){
    $("#flashID").show();
});


$("#boutonAjouterAttribut").click(function(){
    $("#flashID").attr("title","Flash est le nom de plusieurs personnages de fiction appartenant à l'univers de DC Comics. Les différents Flash sont tous dotés de la capacité de se déplacer à très grande vitesse (ils sont appelés des Speedsters). Le costume du super-héros Flash est souvent rouge et jaune, avec au centre un éclair sur fond blanc pour désigner sa vitesse. Mais le tout premier avait également un casque d'acier, inspiré du dieu grec Hermès (ou Mercure chez les Romains), doté lui aussi, d'une vitesse hors du commun. Il a été créé par Gardner Fox et Harry Lampert.");
});
$("#boutonAjouterTitre").click(function() {
   $("#H1").text("Justice League")
});

$("#boutonDupliquer").click(function () {
   $("#flashID").after("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" title=\"\" width=\"200px\"/>")
});
$("#boutonRalentir").click(function () {
    $("#flashID").remove("#flashID")
});
$("#boutonTeleport").click(function() {
    $("#flashID").animate({bottom: "-=600px"}, 10000)
});


