$(function(){
    
    var $gnb = $(".gnb");
    var $sub_container = $(".gnb .sub_container");

    $gnb.on({
        "mouseenter" : function(){
            $sub_container.stop().slideDown();//나타남
        }
        ,

        "mouseleave" : function(){
            $sub_container.stop().slideUp();//사라짐
        }
    });
});

