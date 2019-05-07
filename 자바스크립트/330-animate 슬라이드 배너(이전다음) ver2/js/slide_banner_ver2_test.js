//약식 준비핸들러(ash)
$(function(){

    var $thmbs = $("#slides>.slides-pagination>li>a");
    var nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스번호

    //썸네일활성화, 컨테이너이동 함수
    var move = function(){
        //썸네일 활성화
        $thmbs.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");

        //컨테이너 이동
        $("#slides>.slides-container").stop().animate({
            "left":-672*nowIdx
        },400);
    };


    $thmbs.on("click", function(evt){
        evt.preventDefault();

        //인덱스 번호 추출
        nowIdx = $thmbs.index(this);

        move();

    });//end of click


    //썸네일 활성화
    $thmbs.on("mouseover", function(){
        $(this).parent().addClass("on");
    });//end of mouseover  
    
    
    $thmbs.on("mouseout", function(){
        console.log("mouseout 이벤트 발생");
        $thmbs.eq(nowIdx).parent().siblings().removeClass("on");
    });//end of mouseout


    //이전 버튼에 대한 클릭이벤트 구문
    $(".slides-prev").on("click",function(){

        //1. 이전 슬라이드에 대한 인덱스 번호 추출
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=6;
        }

        move();
    });


    //다음 버튼에 대한 클릭이벤트 구문
    $(".slides-next").on("click", function(){
        if(nowIdx<6){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        move();
    });


});