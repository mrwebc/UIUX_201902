/*
	알고리즘 == 로직 == 레시피
	
	1. 클릭한 인디케이터(a)가 몇번째 요소인지를 나타내는 index 번호를 추출
	
	2. 그 index 번호에 해당하는 a 요소의 부모에 .on 클래스를 추가한다.
	
	3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li에게서 .on 클래스를 제거한다.
	
	4. index 번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
*/

$(document).ready(function(){

	var $indicator = $(".slides>.slides-pagination>li>a");
	var nowIdx;//0~3 정수값

	$indicator.on("click", function(evt){
		evt.preventDefault();

		nowIdx = $indicator.index(this);//이번에 클릭한 녀석의 인덱스번호

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass("on")
							 .siblings().removeClass("on");

		//컨테이너 이동
		$(".slides-container").stop().animate({
			"left" : -665*nowIdx
		},2000);
	});

});





















