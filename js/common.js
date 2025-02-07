	
$(document).ready(function() {
	
	// 햄버거 버튼 클릭 시 메뉴 열기
	$(".m_open_btn button").click(function() {
		$(".nav.mobile").addClass("active");
		$(".dark").addClass("show");
	});

	// 닫기 버튼 클릭 시 메뉴 닫기
	$(".closeBtn, .dark").click(function() {
		$(".nav.mobile").removeClass("active");
		$(".dark").removeClass("show");
	});
		
	  // 서브메뉴 클릭 이벤트
	  $('.nav.mobile .menu > li > a').click(function (e) {
		e.preventDefault(); 
		const $submenu = $(this).next('.submenu'); 
	
		if ($submenu.is(':visible')) {
		  $submenu.slideUp(); 
		} else {
		  $('.nav.mobile .submenu').slideUp(); 
		  $submenu.slideDown(); 
		}
	  });
	
	  $(document).click(function (e) {
		if (!$(e.target).closest('.menu').length) {
		  $('.nav.mobile .submenu').slideUp();
		}
	  });

	$(".topmenu li").mouseover(function() {
		$(this).find(".submenu").stop().slideDown(200);
	}).mouseout(function() {
		$(this).find(".submenu").stop().slideUp(200);
	});
	

	$(".dropbox1").click(function(){
		$(".drop-content").toggle();
		
	});

	$(".rankingBox .tab-btn").on("click", function () {
		// 탭 버튼 활성화 상태 업데이트
		$(".rankingBox .tab-btn").removeClass("active");
		$(this).addClass("active");
	
		// 탭 내용 활성화 상태 업데이트
		const targetTab = $(this).data("tab");
		$(".rankingBox .tab-panel").removeClass("active");
		$("#" + targetTab).addClass("active");
	});

	$('.boards-tabs .board-tab').click(function () {
		// 모든 탭과 콘텐츠에서 'active' 클래스 제거
		$('.boards-tabs .board-tab').removeClass('active');
		$('.boards-tabs-cont .boards-contents-wrap').removeClass('active');
	
		// 클릭한 탭에 'active' 클래스 추가
		$(this).addClass('active');
	
		// 클릭한 탭의 ID와 일치하는 콘텐츠에 'active' 클래스 추가
		const tabId = $(this).attr('id');
		$(`.boards-tabs-cont .boards-contents-wrap#${tabId}`).addClass('active');
	  });

	//최근 본 sell/buy
	$(".recentlyViewed-tab-btn").on("click", function () {
		// 현재 클릭된 탭 버튼을 변수에 저장
		const $clickedTab = $(this);

		// 모든 탭 버튼에서 is-active 클래스 제거
		$(".recentlyViewed-tab-btn").removeClass("is-active");

		// 클릭된 탭 버튼에 is-active 클래스 추가
		$clickedTab.addClass("is-active");

		// 클릭된 탭 버튼의 데이터 속성 가져오기
		const targetTab = $clickedTab.data("tab");

		// 모든 탭 패널 숨기기
		$(".recentlyViewed-tab-panel").removeClass("is-active").hide();

		// 현재 탭과 연결된 콘텐츠 패널 표시
		$("#" + targetTab).addClass("is-active").fadeIn();
	});

	// 슬라이드 버튼 클릭 이벤트
	$(".recentlyViewed-slide-btn").on("click", function () {
		const $this = $(this);
		const slider = $this.siblings(".recentlyViewed-slide-content"); 
		const slideWidth = slider.find(".recentlyViewed-slide").first().outerWidth(true); 
		const direction = $this.hasClass("recentlyViewed-next-btn") ? -1 : 1; 

		// 슬라이더 애니메이션
		slider.animate(
			{ scrollLeft: slider.scrollLeft() - direction * slideWidth },
			400
		);
	});

	$(".recentlyViewed-tab-btn:first").trigger("click");

	
	//관심 sell/buy
	$(".interest-tab-btn").on("click", function () {
		// 현재 클릭된 탭 버튼을 변수에 저장
		const $clickedTab = $(this);

		// 모든 탭 버튼에서 is-active 클래스 제거
		$(".interest-tab-btn").removeClass("is-active");

		// 클릭된 탭 버튼에 is-active 클래스 추가
		$clickedTab.addClass("is-active");

		// 클릭된 탭 버튼의 데이터 속성 가져오기
		const targetTab = $clickedTab.data("tab");

		// 모든 탭 패널 숨기기
		$(".interest-tab-panel").removeClass("is-active").hide();

		// 현재 탭과 연결된 콘텐츠 패널 표시
		$("#" + targetTab).addClass("is-active").fadeIn();
	});

	// 슬라이드 버튼 클릭 이벤트
	$(".interest-slide-btn").on("click", function () {
		const $this = $(this);
		const slider = $this.siblings(".interest-slide-content"); 
		const slideWidth = slider.find(".interest-slide").first().outerWidth(true); 
		const direction = $this.hasClass("interest-next-btn") ? -1 : 1; 

		// 슬라이더 애니메이션
		slider.animate(
			{ scrollLeft: slider.scrollLeft() - direction * slideWidth },
			400
		);
	});

	// 페이지 로드 시 첫 번째 탭 자동 활성화
	$(".interest-tab-btn:first").trigger("click");


	// 월간 Sell & Buy 안내
	const $slider = $('.monthly-slider');

	// Slick 초기화
	$slider.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		responsive: [
		{
			breakpoint: 1024, 
			settings: {
			slidesToShow: 4, 
			},
		},
		{
			breakpoint: 768, 
			settings: {
			slidesToShow: 3, 
			},
		},
		{
			breakpoint: 700, 
			settings: {
			slidesToShow: 3, 
			},
		},
		{
			breakpoint: 480, 
			settings: {
			slidesToShow: 2, 
			},
		},
		],
	});

	// 버튼 이벤트
	$('.btn-next').click(function () {
		$slider.slick('slickNext');
	});

	$('.btn-prev').click(function () {
		$slider.slick('slickPrev');
	});

	// Play/Pause 버튼 토글 이벤트
	$('.btn-play, .btn-pause').click(function () {
		if ($(this).hasClass('btn-play')) {
		// Play 버튼 클릭 시
		$slider.slick('slickPlay'); 
		$('.btn-play').removeClass('active'); 
		$('.btn-pause').addClass('active');  
		} else if ($(this).hasClass('btn-pause')) {
		// Pause 버튼 클릭 시
		$slider.slick('slickPause'); // 슬라이더 정지
		$('.btn-pause').removeClass('active'); 
		$('.btn-play').addClass('active');    
		}
	});

	// 페이지 로드 시 초기 상태 설정
	if ($slider.slick('slickGetOption', 'autoplay')) {
		$('.btn-play').removeClass('active'); 
		$('.btn-pause').addClass('active');  
	} else {
		$('.btn-play').addClass('active');   
		$('.btn-pause').removeClass('active'); 
	}


	// FMX NEWS
	$(".news-tabs-container .tabs .tab").on("click", function () {
		// 탭 활성화 처리
		$(".news-tabs-container .tabs .tab").removeClass("active");
		$(this).addClass("active");
	
		// 탭 콘텐츠 활성화 처리
		$(".news-tab-contentr .tab-content").removeClass("active");
		const target = $(this).data("target");
		$(target).addClass("active");
	
		// 슬라이더 초기화 및 재활성화
		$(".news-tab-contentr .tab-content .slider").each(function () {
		  if ($(this).closest(".news-tab-contentr .tab-content").hasClass("active")) {
			// 이미 초기화된 슬라이더는 다시 설정하지 않고 재활성화
			if (!$(this).hasClass("slick-initialized")) {
			  $(this).slick({
				infinite: true,
				slidesToShow: 2, 
				slidesToScroll: 1,
				arrows: true, 
				dots: false, 
				responsive: [
					{
					breakpoint: 1024, 
					settings: {
						slidesToShow: 2, 
					},
					},
					{
					breakpoint: 480, 
					settings: {
						slidesToShow: 1, 
					},
					},
				],
			  });
			}
		  } else {
			// Slick.js 초기화된 경우 슬라이더 정지
			if ($(this).hasClass("slick-initialized")) {
			  $(this).slick("unslick");
			}
		  }
		});
	  });

	  $(".news-tabs-container .tabs .tab").first().trigger("click");

	  // CEO 컬럼
	$(".column-tabs-container .tabs .tab").on("click", function () {
		// 탭 활성화 처리
		$(".column-tabs-container .tabs .tab").removeClass("active");
		$(this).addClass("active");
	
		// 탭 콘텐츠 활성화 처리
		$(".column-tab-contentr .tab-content").removeClass("active");
		const target = $(this).data("target");
		$(target).addClass("active");
	
		// 슬라이더 초기화 및 재활성화
		$(".column-tab-contentr .tab-content .slider").each(function () {
		  if ($(this).closest(".column-tab-contentr .tab-content").hasClass("active")) {
			// 이미 초기화된 슬라이더는 다시 설정하지 않고 재활성화
			if (!$(this).hasClass("slick-initialized")) {
			  $(this).slick({
				infinite: true,
				slidesToShow: 2, 
				slidesToScroll: 1,
				arrows: true, 
				dots: false, 
				responsive: [
					{
					breakpoint: 1024, 
					settings: {
						slidesToShow: 2, 
					},
					},
					{
					breakpoint: 480, 
					settings: {
						slidesToShow: 1, 
					},
					},
				],
			  });
			}
		  } else {
			// Slick.js 초기화된 경우 슬라이더 정지
			if ($(this).hasClass("slick-initialized")) {
			  $(this).slick("unslick");
			}
		  }
		});
	  });
	
	  $(".column-tabs-container .tabs .tab").first().trigger("click");

	// TOP 버튼 클릭 이벤트
	$('.totop').click(function (e) {
		e.preventDefault(); 
		$('html, body').animate({ scrollTop: 0 }, 500); 
	});

});

