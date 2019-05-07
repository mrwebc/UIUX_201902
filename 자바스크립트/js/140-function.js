//준비핸들러
$(document).ready(function(){

	//알고리즘 = 레시피 = 로직 = 시나리오 = 순서도
	//자바스크립트에서 가장 중요한 것 : 누구에게, 무엇을, 어떻게

	//1. 썸네일을 누른다. => ol>li를 click 한다.
	//2. p>img 요소의 src 속성값을 변경한다.

	//첫번째 썸네일에 대한 클릭이벤트 구문

   $("li:nth-child(1)").on("click", function(){
      //$("p>img").attr("변경할 속성명", "속성값");
      $("p>img").attr("src", "images/photo/big1.jpg");
   });

   $("li:nth-child(2)").on("click", function(){
      $("p>img").attr("src", "images/photo/big2.jpg");
   });

   $("li:nth-child(3)").on("click",function(){
      $("p>img").attr("src", "images/photo/big3.jpg");
   });

   $("li:nth-child(4)").on("click",function(){
      $("p>img").attr("src","images/photo/big4.jpg");
   });

   $("li:nth-child(5)").on("click",function(){
      $("p>img").attr("src","images/photo/big5.jpg");
   });

   $("li:nth-child(6)").on("click",function(){
      $("p>img").attr("src","images/photo/big6.jpg");
   });   

   $("li:nth-child(7)").on("click",function(){
      $("p>img").attr("src","images/photo/big7.jpg");
   });   

   $("li:nth-child(8)").on("click",function(){
      $("p>img").attr("src","images/photo/big8.jpg");
   });   

});




