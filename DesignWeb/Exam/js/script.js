$("#court").hide();
$("#long").hide();

$('#search').keyup(function (){
    var nom = $('#search').val().length;
    if (nom<3) {
        $('#long').hide();
        $('#court').show();
    }
    else if (nom>12) {
        $('#court').hide();
        $('#long').show();
    }
    else {
        $('#court').hide();
        $('#long').hide();
    }
});
$('#button').click(function (){
    var val=$('#search').val().toString().toUpperCase();

    var long=val.length;
    var tab=String[long];
    for (i=0; i<long;i++) {
        long[i] = val[i];
    }
    $('#id').html("");
    if (long<13 && long>6){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-1 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }
    }
    else if (long<7 && long>4){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-2 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }}
    else if (long===4){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-3 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }}
    else if (long===3){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-4 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }}
});


$(document).on('keypress',function(e) {
if(e.which === 13) {
    var val=$('#search').val().toString().toUpperCase();

    var long=val.length;
    var tab=String[long];
    for (i=0; i<long;i++) {
        long[i] = val[i];
    }
    $('#id').html("");
    if (long<13 && long>6){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-1 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }
    }
    else if (long<7 && long>4){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-2 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }}
    else if (long===4){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-3 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }}
    else if (long===3){
        for (i=0;i<long;i++){
            $('#id').append("<div class=\"col-4 px-2\"><img src=\"Letters/"+val[i]+"/"+val[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
        }}

}

});
$("#blanc").click(function () {
$('#id').removeClass('background2 background3 background4 background5 background6 background7').addClass('background1');
});
$("#bleu").click(function () {
$('#id').removeClass('background1 background3 background4 background5 background6 background7').addClass('background2');
});
$("#bleuf").click(function () {
$('#id').removeClass('background1 background2 background4 background5 background6 background7').addClass('background3');
});
$("#gris").click(function () {
$('#id').removeClass('background1 background3 background2 background5 background6 background7').addClass('background4');
});
$("#noir").click(function () {
$('#id').removeClass('background1 background3 background4 background2 background6 background7').addClass('background5');
});
$("#rose").click(function () {
$('#id').removeClass('background1 background3 background4 background5 background2 background7').addClass('background6');
});
$("#rouge").click(function () {
$('#id').removeClass('background1 background3 background4 background5 background6 background2').addClass('background7');
});
$(".id").print();{
}






