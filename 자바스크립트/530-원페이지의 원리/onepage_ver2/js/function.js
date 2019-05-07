$(function(){

    //메뉴를 브라우저의 세로 중앙에 위치시킨다.
    $("header").css({
        "top":($(window).height()-$("header").height())/2
    });

    $(window).on("resize", function(){
        $("header").css({
            "top":($(window).height()-$("header").height())/2
        });
    });

    var $mnu = $("nav a");

    /*
        메뉴1 - scrollTop : 0
        메뉴2 - scrollTop : 1000
        메뉴3 - scrollTop : 1845
        메뉴4 - scrollTop : 2645
        메뉴5 - scrollTop : 3245
    */

    /**
     * 배열은 저장할 변수들의 값이 일정한 패턴을 가질때 뿐만 아니라
     * 가지고 있지 않을 때도 매우 편리하게 값을 컨트롤 할 수 있다.
     */

    //각 article의 top 값

    var arrTopVal=[];//빈 배열변수 선언

    //어떤 요소의 top값(문서/브라우저/body로부터의 거리)를 구하는 방법 => $("어떤요소").offset().top

    arrTopVal[0] = $(".con1").offset().top;//0;
    arrTopVal[1] = $(".con2").offset().top;//1000;
    arrTopVal[2] = $(".con3").offset().top;//1845;
    arrTopVal[3] = $(".con4").offset().top;//2645;
    arrTopVal[4] = $(".con5").offset().top;//3245;


    var nowIdx=0;


    $mnu.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $mnu.index(this);

        $("body,html").stop().animate({
            "scrollTop" : arrTopVal[nowIdx]
        });
    });
});