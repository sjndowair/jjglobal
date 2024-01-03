$(function(){
  let swiper = new Swiper(".swiper.mySwiper", {
      effect: "cube",
      grabCursor: true,
      slidesPerView:1,
      centeredSlides: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      autoplay:{
          delay:100000,
      },
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      
      },
      pagination: {
        el: ".swiper-pagination",
      },
      
    });
    var mapOptions = {
      center: new naver.maps.LatLng(37.36272, 127.2423),
      zoom: 10
  };
  
  var map = new naver.maps.Map('map', mapOptions);

  var marker = new naver.maps.Marker({

    position: new naver.maps.LatLng(37.3595704, 127.105399),

    map: map

});
$(".yellow").hide()
$(".mouse").mouseover(function(){
$(this).find(".yellow").stop().slideDown();
$(this).addClass("on");
$(this).children("a").addClass("on");
});
$(".mouse").mouseout(function(){
$(this).find(".yellow").stop().slideUp();
$(this).removeClass("on");
$(this).children("a").removeClass("on")
});
let $listItems = $(".wi100 li");
let currentIndex = 0;

function showSequentially(index) {
if (index < 0) {
  index = $listItems.length - 1;
} else if (index >= $listItems.length) {
  index = 0;
}

$listItems.css({
  "opacity": 0,
  "transform": "translateY(0px)"
});

$listItems.eq(index).css({
  "opacity": 1,
  "transform": "translateY(0)"
});

currentIndex = index;
}

function showNext() {
showSequentially(currentIndex + 1);
}

function showPrev() {
showSequentially(currentIndex - 1);
}

// 다음 및 이전 버튼에 클릭 핸들러를 연결합니다.
$("#nextBtn").on("click", function() {
showNext();
});

$("#prevBtn").on("click", function() {
showPrev();
});

function autoShowSequentially() {
showNext();
setTimeout(autoShowSequentially, 5500); // 필요에 따라 지연 시간을 조정하세요
}

// 자동 순차적 표시를 시작합니다.
autoShowSequentially();


  });
