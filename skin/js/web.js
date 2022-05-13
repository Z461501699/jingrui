//导航按钮
$(".nav_handle").click(function () {
    $(".inmuen").slideToggle();
    $(this).toggleClass("on");
});

new Swiper('.aboutUs-swiper', {
    direction: 'vertical',
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    speed:1200,
    loop: false,//必须
    pagination: {
        el: '.aPagination',
        clickable: true,
    },
});
new Swiper('.container', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 500,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,//必须
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
    if ($(window).scrollTop() >= 300) {
        $(".page-down").fadeIn();
    } else {
        $(".page-down").fadeOut();
    }
});
(function Page() {
    var oDown = $(".page-down"),
        oBody = $("html,body");
    oDown.bind("click", function () {
        oBody.animate({scrollTop: 0}, 500);
    });
})();

function Kongzhi() {
    $(".wapbanner .swiper-wrapper").css("height", $(".wapbanner .swiper-wrapper img").height() * 1 + "px");
//$(".incasenr .li").css("margin-bottom",$(".incasenr").width()/100+"px");
}

self.setInterval("Kongzhi()", 50)
let isCanUse = true;

function NumAutoPlusAnimation(numId) {
    if (!isCanUse) return
    let endNum = numId.getAttribute('num');
    let startNum = numId.getAttribute('num') - numId.getAttribute('num') / 5
    var step = (endNum - startNum) / 20;
    var count = startNum;
    var timer = window.setInterval(() => {
        isCanUse = false
        count = count + step;
        if (count >= endNum) {
            window.clearInterval(timer);
            timer = null;
            count = endNum;
        }
        numId.innerHTML = parseInt(count)
    }, 100);
}


window.onload = function() {
    /**
     * 监听网页滚动事件
     */
   window.onscroll = function (e) {
        var visibleBottom = window.scrollY + document.documentElement.clientHeight;
        //可见区域顶部高度
        var visibleTop = window.scrollY;
        var centerY = document.getElementById('inaboutMain').offsetTop+(document.getElementById('inaboutMain').offsetHeight/2);
        if(centerY>visibleTop&&centerY<visibleBottom){
            NumAutoPlusAnimation(document.getElementById("numBox1"));
            NumAutoPlusAnimation(document.getElementById("numBox2"));
            NumAutoPlusAnimation(document.getElementById("numBox3"));
            NumAutoPlusAnimation(document.getElementById("numBox4"));
        }
    }
}
document.getElementById("numBox1").addEventListener('mouseenter',)