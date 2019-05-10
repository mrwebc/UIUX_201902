$(function(){

    //1. 메인메뉴를 li로 선택해서 작업하는 경우
    var $mainmnu = $(".gnb>li");
    var $sub = $(".gnb .sub");

    //서브메뉴 노출처리
    $mainmnu.on("mouseenter", function(){
        //$sub.show();
        $(this).children(".sub").show();
    });

    //서브메뉴 숨김처리
    $mainmnu.on("mouseleave", function(){
        $(this).children(".sub").hide();
    });




    //2. 메인메뉴를 li>a로 선택해서 작업하는 경우
    //서브메뉴를 클릭하려고 a영역을 벗어나면 서브메뉴가 사라지는 하자발생
/*    
    var $mainmnu = $(".gnb>li>a");
    var $sub = $(".gnb .sub");

    //서브메뉴 노출처리
    $mainmnu.on("mouseenter", function(){
        $(this).next().show();
    });

    //서브메뉴 숨김처리
    $mainmnu.on("mouseleave", function(){
        $(this).next().hide();
        $sub.hide();
    });
*/    
});

