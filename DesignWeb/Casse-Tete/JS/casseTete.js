var click=1;
var id1;
var id2;
var src1;
var src2;

$(".img-fluid").click(function (swap) {
    if (click===1){
        id1= $(this).attr("id");
        src1= $(this).attr("src");
        click=2;
    }
    else if (click===2){
        id2= $(this).attr("id");
        src2= $(this).attr("src");

        $("#"+id2).attr("src", src1);
        $('#'+id1).attr("src",src2);
        click=1;
    }
});
if ()




    

