$(function(){

	/* 
		알고리즘
		
		1. 원하는 요소 a 를 클릭한다. => 클릭이벤트 구문 작성
		2. a태그에 대한 기본기능 방지
		3. a 태그중 몇번째 요소인지 그 인덱스를 알아낸다.
		4. 인덱스에 해당하는 부모 li요소에 .on 클래스를 추가한다.
		5. 그 외 나머지 li 요소에서 .on 클래스를 제거한다.
		
    */  

		var $mnu = $(".gnb>li>a");
		var nowIdx;

		$mnu.on("click", function(evt){
			evt.preventDefault();

			//전체 a에서 이번에 클릭한 녀석의 인덱스번호
			nowIdx = $mnu.index(this);

			$mnu.eq(nowIdx).parent().addClass("on")
										 .siblings().removeClass("on");
		});
    
});

