$(function(){
	
    var $indicator = $("#slides>.slides-pagination>li>a");
    var nowIdx = 0;
    
    $indicator.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $indicator.index(this);
        
        $(".slides-container").stop().animate({
            "left" : (-100*nowIdx)+"%"
        });
    });
});


