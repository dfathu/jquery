$(document).ready(function(){
    $("h1#judul").click(function(){
        $("p.posting").slideUp(2000);
    });
    $("h1#judul2").dblclick(function () {
        $("p.posting2").slideUp(2000);
    });
    $("div.div4").mouseenter(function () {
        $("p.pesan4").slideUp(2000);
    });
    $("div.div4").mouseleave(function () {
        $("p.pesan4").slideDown(2000);
    });
    $("h1#judul3").on({
        mouseenter:function(){
            $(this).css("background-color","lightgrey");
        },
        mouseleave:function(){
            $(this).css("background-color", "lightblue");
        },
        click:function () {
            $(this).css("background-color", "yellow");
        }
    });
});