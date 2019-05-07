$(function(){

    var $slide = $("#slides>.slides-container>li");//4장의 슬라이드
    var $indicator = $("#slides>.slides-pagination>li>a");

    var $prev = $("#slides>.slides-prev");//이전버튼
    var $next = $("#slides>.slides-next");//다음버튼

    var $auto = $("#slides>.slides-auto");//자동재생버튼

    var nowIdx = 0;
    var intervalKey;

    //슬라이드, 인디케이터 활성화
    var fadeAction = function(){        
        //이전 슬라이드 사라짐
        $slide.filter(".on").stop().fadeOut(1000).removeClass("on");

        //이번 슬라이드 나타남
        $slide.eq(nowIdx).stop().fadeIn(1000).addClass("on");

        //인디케이터 활성화
        $indicator.eq(nowIdx).parent().addClass("on")
                  .siblings().removeClass("on");
    };


    //다음번 슬라이드 번호 추출함수
    var nextIdx = function(){
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    };


    $indicator.on("click", function(evt){
        evt.preventDefault();
        nowIdx = $indicator.index(this);//재할당
        fadeAction();
    });


    //이전버튼에 대한 클릭이벤트 구문
    $prev.on("click", function(evt){
        evt.preventDefault();

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=3;
        }

        fadeAction();    
    });


    //다음버튼에 대한 클릭이벤트 구문
    $next.on("click", function(evt){
        evt.preventDefault();
        nextIdx();        
        fadeAction();
    });

    

    //자동실행 버튼에 대한 클릭이벤트 구문
    $auto.on("click", function(evt){
        evt.preventDefault();

        if($(this).hasClass("pause")==true){//재생중이면....
            clearInterval(intervalKey);
            $(this).removeClass("pause");
        
        }else{//재생중이 아니면

            intervalKey= setInterval(function(){
                nextIdx();            
                fadeAction();
            },2000);
    
            $(this).addClass("pause");
        }

    });
});