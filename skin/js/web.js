

//导航按钮
$(".nav_handle").click(function(){
  $(".inmuen").slideToggle();
  $(this).toggleClass("on");
});

// new Swiper('.wapbanner',{
// 	pagination: {
// 		el: '.pagination',
// 	},
// });
new Swiper('.aboutUs',{
	direction:'vertical',
	pagination: {
		el: '.aPagination',
		clickable: true,
		type:'progressbar'
	},
});
new Swiper('.container',{
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed:500,
	spaceBetween: 30,
	effect: 'fade',
	loop:true,//必须
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.cPagination',
		clickable: true,
	},
});

//返回顶部
$(window).scroll(function () {
if ($(window).scrollTop()>=300) {
$(".page-down").fadeIn();
}else{
$(".page-down").fadeOut();
}
});
(function Page(){
var oDown = $(".page-down"),
oBody = $("html,body");
oDown.bind("click",function(){
oBody.animate({ scrollTop : 0 },500);
});        
})();

function Kongzhi() {
$(".wapbanner .swiper-wrapper").css("height",$(".wapbanner .swiper-wrapper img").height()*1+"px");
//$(".incasenr .li").css("margin-bottom",$(".incasenr").width()/100+"px");
}
self.setInterval("Kongzhi()",50)
