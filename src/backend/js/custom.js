/*-----------------------------------------------------------------
    LOADER
-------------------------------------------------------------------*/
document.onreadystatechange = function () {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector(".loader").style.visibility = "visible";
	} else {
		document.querySelector(".loader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
};

$(function () {
	AOS.init();

	$(window).on('scroll', function () {
		let header = $('.sticky-top').outerHeight() / 3;
		if ($(this).scrollTop() >= header) {
			$('.sticky-top').addClass('active');
		}
		else {
			$('.sticky-top').removeClass('active');
		}
		if ($(this).scrollTop() > 500) {
			$("#back-to-top").fadeIn();
		} else {
			$("#back-to-top").fadeOut();
		}
	});
	// scroll body to 0px on click
	$("#back-to-top").on('click', function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			400
		);
		return false;
	});
});

let tooltipSelector = document.querySelector(".back-to-top");
let tooltip = new bootstrap.Tooltip(tooltipSelector);

/* scroll to a section */
jQuery(".link-scroll").each(function () {
	jQuery(this).on("click", () => {
		let targetID = jQuery(this).data("link");
		jQuery("html, body").animate({
			scrollTop: jQuery("#" + targetID).offset().top - 88,
		});
	});
});

/* swiper carousel */
let heroSlider = new Swiper(".heroSwiper", {
	spaceBetween: 100,
	speed: 1500,
	slidesPerView: 1,
	autoplay: false,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: ".heroSwiper-pagination",
	},
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ["-30%", 0, -1],
		},
			next: {
			translate: ["100%", 0, 0],
		},
	},
});
var partnerSwiperText = new Swiper(".partnerSwiperText", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 1,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var partnerSwiperImage = new Swiper(".partnerSwiperImage", {
	loop: true,
	spaceBetween: 10,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});
partnerSwiperText.params.control = partnerSwiperImage;
partnerSwiperImage.params.control = partnerSwiperText;



let blogSlider = new Swiper(".blogSwiper", {
	spaceBetween: 10,
	slidesPerView: 1,
	autoplay: true,
	loop: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		640: {
		  slidesPerView: 2,
		},
		768: {
		  slidesPerView: 3,
		},
		1024: {
		  slidesPerView: 3,
		},
	},
});

let testimonialSlider = new Swiper(".testimonialSwiper", {
	spaceBetween: 10,
	slidesPerView: 1,
	loop: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		640: {
		  slidesPerView: 1,
		},
		768: {
		  slidesPerView: 3,
		},
		1024: {
		  slidesPerView: 3,
		},
	},
});