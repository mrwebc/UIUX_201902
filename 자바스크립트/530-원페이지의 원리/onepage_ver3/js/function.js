$(function(){
    var $container = $("section");//내용 컨테이너
    var arrTopVal = [];
    var nowIdx = 0;
    var $mnu = $(".gnb>li>a");

    //이미지와 텍스트를 포함한 내용이 로드된 시점에 대한 이벤트구문
    $(window).on("load", function(){
        $container.filter(":even").css({
            backgroundColor : "#ffc90e"
        });

        $container.filter(":odd").css({
            backgroundColor : "#ff0"
        });

        //페이지가 로드된 순간 맨위로 페이지 이동
        $("html, body").stop().animate({
            scrollTop : 0
        });

    });//end of load


    //배열에 컨테이너의 top값을 저장
    //arrTopVal[0] = $container.eq(0).offset().top;
    //arrTopVal[1] = $container.eq(1).offset().top;
    //arrTopVal[2] = $container.eq(2).offset().top;
    //arrTopVal[3] = $container.eq(3).offset().top;
    //arrTopVal[4] = $container.eq(4).offset().top;
    //arrTopVal[5] = $container.eq(5).offset().top;

    //횟수에 정함이 있을 경우 유용한 반복문
    for(var i=0;i<=5;i++){
        arrTopVal[i] = $container.eq(i).offset().top;
    }

    console.log("arrTopVal = ",arrTopVal);


    //scroll 이벤트 구문
    $(window).on("scroll", function(){

        var scrollTop = $(this).scrollTop();//스크롤바의 top값 추출
        console.log("scrollTop = ", scrollTop);

        //스크롤바의 top값에 따른 header 처리
        if(scrollTop > 900){
            $("header").addClass("n-fixed");
            $container.eq(1).css({
                marginTop : 50
            });//50은 헤더의 높이값

        }else{
            $("header").removeClass("n-fixed");
            $container.eq(1).css({
                marginTop : 0
            });                
        }

        //스크롤바의 높이값에 따른 메뉴 활성화 표시(for문 활용)
        for(var k=0;k<=5;k++){
            if(scrollTop>=arrTopVal[k]-50){
                $mnu.eq(k).parent().addClass("on")
                              .siblings().removeClass("on");
            }
        }

/*        
        //스크롤바의 높이값에 따른 메뉴 활성화 표시
        if(scrollTop>=arrTopVal[0]){
            $(".gnb>li>a").eq(0).parent().addClass("on")
                          .siblings().removeClass("on");
        }

        if(scrollTop>=arrTopVal[1]-50){
          $(".gnb>li>a").eq(1).parent().addClass("on")
                        .siblings().removeClass("on");
        }            

        if(scrollTop>=arrTopVal[2]-50){
            $(".gnb>li>a").eq(2).parent().addClass("on")
                          .siblings().removeClass("on");
        }            

        if(scrollTop>=arrTopVal[3]-50){
            $(".gnb>li>a").eq(3).parent().addClass("on")
                          .siblings().removeClass("on");
        }            

        if(scrollTop>=arrTopVal[4]-50){
            $(".gnb>li>a").eq(4).parent().addClass("on")
                          .siblings().removeClass("on");
        }            

        if(scrollTop>=arrTopVal[5]-50){
            $(".gnb>li>a").eq(5).parent().addClass("on")
                          .siblings().removeClass("on");
        }            
*/
    });//end of scroll

   
    var nowIdx = 0;
    $mnu.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $mnu.index(this);

        $("html,body").stop().animate({
            scrollTop : arrTopVal[nowIdx]-50
        },2000);
    });


    $(window).on("scroll", function(){

        var scrollTop = $(this).scrollTop();

        /*
            스크롤바를 내렸을 때
            푸터가 노출되는 시점의 scrollTop 값과 
            브라우저의 높이를 더한 값에 
            $("footer").offset().top 값을 빼면
            정확히 0 이 나온다.

            만약 더 내리면 view 값이 양수가 나오는 성질을 이용함.

            즉 양수이면 해당 footer 요소가 노출됐다는 것을 의미한다.
        */

        //view>0 이면 푸터요소가 노출됐다는 것을 의미
        var view = (scrollTop + $(window).height())-$("footer").offset().top;


        //푸터 노출시 아이콘의 위치를 일정 간격으로 위치시킴
        if(view>0){//푸터가 노출됐다면
            $("aside").css("margin-bottom", view);
        }else{
            $("aside").css("margin-bottom", 0);
        }
    });
});