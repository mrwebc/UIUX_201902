$(function(){

    alert("지금 DOMContentLoad 이벤트가 발생");

   var $mnu = $(".gnb a");
   var nowIdx  = 0;
   var arrTopVal = [];//각 article의 top값을 저장할 배열변수

   arrTopVal[0] = $(".line_msg").offset().top;
   arrTopVal[1] = $(".line_tel").offset().top;
   arrTopVal[2] = $(".line_sticker").offset().top;
   arrTopVal[3] = $(".line_share").offset().top;
   arrTopVal[4] = $(".line_tip").offset().top;
   arrTopVal[5] = $(".line_friends").offset().top;

   $mnu.on("click", function(evt){
    evt.preventDefault();

    nowIdx = $mnu.index(this);

    $mnu.eq(nowIdx).parent().addClass("on")
        .siblings().removeClass("on");

    $("html, body").stop().animate({
        "scrollTop" : arrTopVal[nowIdx]-69
    });

   });


   //CI에 대한 클릭이벤트 구문
   $(".logo>a").on("click", function(evt){
       evt.preventDefault();

       $("html,body").stop().animate({
           "scrollTop":0
       });
   });


   //load 이벤트의 작동 시점 - 텍스트와 이미지까지 모두 화면에 나타났을 때
   $(window).on("load", function(){

    alert("지금 Load 이벤트가 발생~!");

        // $("html,body").stop().animate({
        //     "scrollTop":0
        // });

        //이벤트 강제적용 함수
        $(".logo>a").trigger("click");//방아쇠로 CI에게 click 이벤트 적용
   });

});