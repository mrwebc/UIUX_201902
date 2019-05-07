//준비핸들러
$(document).ready(function(){

	//알고리즘 = 레시피 = 로직 = 시나리오 = 순서도
	//자바스크립트에서 가장 중요한 것 : 누구에게, 무엇을, 어떻게

   //1. 썸네일을 누른다. => ol>li를 click 한다.
   //2. a태그의 기본 기능이 작동하지 못하도록 한다.
   //3. li>a의 href 속성값을 가져온다.
	//4. p>img 요소의 src 속성값을 변경한다.

	//썸네일에 대한 클릭이벤트 구문
   $("li>a").on("click",function(evt){
      evt.preventDefault();

      //이번에 클릭한 앵커의 href 속성값
      var imgSrc = $(this).attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $(this).parent().addClass("on");
   });

});