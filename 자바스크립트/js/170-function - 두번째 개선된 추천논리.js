//준비핸들러
$(document).ready(function(){

	//알고리즘 = 레시피 = 로직 = 시나리오 = 순서도
	//자바스크립트에서 가장 중요한 것 : 누구에게, 무엇을, 어떻게

   //1. 썸네일을 누른다. => ol>li를 click 한다.
   //2. a태그의 기본 기능이 작동하지 못하도록 한다.
   //3. li>a의 href 속성값을 가져온다.
	//4. p>img 요소의 src 속성값을 변경한다.

	//1번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(1)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      var imgSrc = $("li:nth-child(1)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(1)").addClass("on");

   });

	//2번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(2)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(2)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(2)").addClass("on");
   });

	//3번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(3)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(3)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(3)").addClass("on");
   });

	//첫번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(4)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(4)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });      
      
      $("li").removeClass("on");
      $("li:nth-child(4)").addClass("on");
   });

	//첫번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(5)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(5)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(5)").addClass("on");
   });

	//6번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(6)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(6)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(6)").addClass("on");
   });

	//7번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(7)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(7)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(7)").addClass("on");
   });

	//8번째 썸네일에 대한 클릭이벤트 구문
   $("li:nth-child(8)").on("click",function(evt){
      evt.preventDefault();//앵커태그의 기본기능 작동 방지
      
      var imgSrc = $("li:nth-child(8)>a").attr("href");

      $("p>img").attr({
         "src" : imgSrc
      });

      $("li").removeClass("on");
      $("li:nth-child(8)").addClass("on");
   });

});




