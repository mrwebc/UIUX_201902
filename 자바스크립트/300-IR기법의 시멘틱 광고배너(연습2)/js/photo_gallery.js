$(document).ready(function(){

    //썸네일 클릭이벤트
    $("ul>li>a").on("click", function(evt){
        
        evt.preventDefault();//a의 기본기능 작동방지

        //변환할 이미지를 가져온다.
        var imgSrc = $(this).attr("href");
        console.log("imgSrc = ", imgSrc);
    
        //큰 이미지 변환
        $(".screen").css({
            "background-image":"url("+imgSrc+")"
        });

        //썸네일 활성화 표시(방법2)
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");


        $(this).parent().addClass("on")
               .siblings().removeClass("on");
        
    });

});