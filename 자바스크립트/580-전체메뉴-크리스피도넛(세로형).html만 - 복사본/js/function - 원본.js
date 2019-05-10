$(function(){

    //서브메뉴 배경판 동적 생성 - header의 첫번째자식으로 추가
    $("header").prepend('<div class="bg_sub"><a href="#">도넛신제품</a></div>');

    var $gnb = $("#gnb");
    var $sub = $gnb.find(".sub");
    var $bg_sub = $(".bg_sub");

    //#gnb 영역에 마우스 진입시
    $gnb.on("mouseenter", function(){
        $bg_sub.stop().fadeIn(50);
        $sub.stop().fadeIn(50);
    });

    //#gnb 영역에 마우스 떠날시
    $gnb.on("mouseleave", function(){
        $sub.stop().fadeOut(50);
        $bg_sub.stop().fadeOut(50);
    });


    //메인메뉴 활성화 표시
    $gnb.children("li").on({
        "mouseenter":function(){
            $(this).addClass("on");
        }
        ,
        "mouseleave":function(){
            $(this).removeClass("on");
        }
    });


    //서브메뉴의 배경판에 대한 설정
    $bg_sub.on({
        "mouseenter":function(){
            //이미 배경판이 보고 있는 상태이므로 시간 설정이 아무 의미 없다.
            $bg_sub.stop().fadeIn();
            $sub.stop().fadeIn();
        }
        ,
        "mouseleave":function(){
            $sub.stop().fadeOut(50);
            $bg_sub.stop().fadeOut(50);
        }
    });
});