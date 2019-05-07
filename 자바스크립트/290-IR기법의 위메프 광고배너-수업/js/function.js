
	$(document).ready(function(){
		/*
			알고리즘			
			1. 썸네일(a) 에 대한 클릭이벤트 구문 작성
			2. a 태그의 기본기능 작동금지
			3. 이번에 클릭한 요소의 href 속성값을 가져온다.
			4. p의 배경이미지를 변경한다.
		*/

		var $thmbs = $("#slides>nav>ul>li>a");

		$thmbs.on("click", function(evt){
			evt.preventDefault();

			//문자열 + 변수 + 문자열
			//"url(" + imgSrc  ")"

			//이번에 클릭한 녀석의 href 속성값 추출
			var imgSrc = $(this).attr("href");

			//배경이미지 데이터 변환
			$(".screen").css({
				"background-image":"url("+imgSrc+")"
			});


			//썸네일 활성화 표시
			$("#slides>nav>ul>li").removeClass("on");
			$(this).parent().addClass("on");


			$(this).parent().addClass("on")
				   .sliblings().removeClss("on");

		});//end of click $thmbs

	});
	