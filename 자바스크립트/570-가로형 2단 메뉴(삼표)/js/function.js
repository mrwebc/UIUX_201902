$(function(){

    var $gnb = $(".gnb>li");
    var $sub = $(".sub");
    var nowIdx = 0;//마우스포인터가 진입한 메뉴의 인덱스번호


    // 각 메뉴 글자의 width 값을 추출해야 margin-left 값을 설정 가능
    // console.log($gnb.eq(0).find("span").width());
    // console.log($gnb.eq(1).find("span").width());
    // console.log($gnb.eq(2).find("span").width());
    // console.log($gnb.eq(3).find("span").width());
    // console.log($gnb.eq(4).find("span").width());


    $gnb.on({
        "mouseenter":function(){
            nowIdx = $gnb.index(this);
            //console.log("nowIdx = ", nowIdx);

            $gnb.eq(nowIdx).children("a")
                .append('<span class="bar"></span>');

            var barWidth =  $gnb.eq(nowIdx).find("span").first().width();

            //활성화 표시bar의 css속성 설정
            $gnb.eq(nowIdx).find(".bar").css({
                "width" : barWidth,
                "margin-left" : -barWidth/2
            });


            //특정요소.find("자손") - 특정요소의 자손을 선택(레벨에 관계없음)
            $gnb.eq(nowIdx).find(".bar").fadeIn();

            
            //해당 서브메뉴를 노출
            $sub.hide().eq(nowIdx).fadeIn(100);

        }
        ,
        "mouseleave":function(){
            $(".bar").remove();//특정요소만 제거
            $sub.hide();// == $sub.fadeOut();
        }
    });
});