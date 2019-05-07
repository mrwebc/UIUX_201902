//약식 준비핸들러(DOMContentLoaded)
$(function(){

    //변수선언부
    var $thmbs = $("#slides .slides-pagination>li>a");
    var $container = $("#slides>.slides-container");
    var $btnPrev = $("#slides>.slides-previous");
    var $btnNext = $("#slides>.slides-next");
    var nowIdx = 0;
    var intervalKey;

    //함수선언부
    var move = function(){
        //썸네일 활성화
        $thmbs.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");

        //컨테이너 이동
        $container.stop().animate({
            "left":-708*nowIdx
        },400);

        //현재 슬라이드의 카운트
        $("#slides .page strong").text("현재 "+(nowIdx+1)); 
    };

    $thmbs.on("click", function(evt){
        evt.preventDefault();
        //인덱스번호 추출
        nowIdx = $thmbs.index(this);
        move();
    });//end of $thmbs click


    $btnPrev.on("click", function(){
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=7;
        }
        move();
    });//end of $btnPrev click
    
    
    $btnNext.on("click", function(){
        if(nowIdx<7){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        move();
    });//end of $btnNext click


    //자동실행 버튼에 대한 클릭이벤트 구문
    $(".play").on("click", function(){
        clearInterval(intervalKey);//기존 인터벌 중지

        //새로운 인터벌 시작
        intervalKey = setInterval(function(){
            if(nowIdx<7){
                nowIdx++;
            }else{
                nowIdx=0;
            }
            move();
        }, 2000);
    });//end of .play click


    //멈춤버튼에 대한 클릭이벤트 구문
    $(".pause").on("click", function(){
        clearInterval(intervalKey);
    });
});