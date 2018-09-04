$(document).ready(function(){
    $(".animasi1").click(function(){
        $(".isi1").animate({left:'200px'});
    });
    $(".animasi2").click(function () {
        $(".isi2").animate({ 
            left: '200px',
            top:'100px',
            fontSize:'2cm',
            padding:'40px',
         },5000,"linear");
    });
    $(".animasi3").click(function () {
        $(".isi3").animate({
            left: '+=200px',
            top: '+=100px',
        }, "slow");
    });
    $(".animasi4").click(function () {
        $(".isi4").animate({
            left: 'toggle',
            top: 'toggle',
        }, "fast","swing");
    });
    $(".animasi5").click(function () {
        $(".isi5,.isi4").animate({
            left: '10px',
            top: '60px',
        }, "fast", "swing");
        $(".isi5,.isi3").animate({
            left: '400px',
            top: '300px',
            borderWidth:'1px',
            fontSize:'1cm',
        });
        $(".isi5,.isi2").animate({
            left: '10px',
            top: '280px',
            borderWidth: '10px',
            fontSize: '2cm',
        }, "fast", "swing");
        $(".isi5, .isi1").animate({
            left: '40px',
            top: '30px',
            borderWidth: '100px',
            fontSize: '1.3cm',
        });
    });
});