var _currentDate = new Date();
var count = 15;
var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);

var timer = function(time){
	$elem =  $('.timer');

	$elem.each(function(){
			var 
				$this = $(this),
				hours = $this.find('.timer__hours'),
				min = $this.find('.timer__min'),
				sec = $this.find('.timer__sec'),
				hoursNum = hours.find('.timer__num'),
				minNum = min.find('.timer__num'),
				secNum = sec.find('.timer__num');
			$this.countdown(time,function(e){

			hoursNum.eq(0).find('.timer__text').text('' + e.strftime('%H')[0]);
			hoursNum.eq(1).find('.timer__text').text('' + e.strftime('%H')[1]);

			minNum.eq(0).find('.timer__text').text('' + e.strftime('%M')[0]);
			minNum.eq(1).find('.timer__text').text('' + e.strftime('%M')[1]);

			secNum.eq(0).find('.timer__text').text('' + e.strftime('%S')[0]);
			secNum.eq(1).find('.timer__text').text('' + e.strftime('%S')[1]);

		});
	})


};

var random = function(min, max) {
 	return Math.floor(Math.random() * (max - min + 1)) + min;
}



$.fn.isOnScreen = function(shift){
		if(!shift){
			shift = 0;
		}
	  var viewport = {};
	  viewport.top = $(window).scrollTop();
	  viewport.bottom = viewport.top + $(window).height();
	  var bounds = {};
	  bounds.top = this.offset().top + shift;
	  bounds.bottom = bounds.top + this.outerHeight() - shift;
	  return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};





var _countDown = function(elem){

	var timerTime = 5000;
	var minutes = 15; 



	if(!elem){
		elem = $('.count-down');
	}else{
		elem;
	}


	var counter = elem;

	var value = 30;


	var date = new Date();
 	date.setTime(date.getTime() + (minutes * 60 * 1000));


	if($.cookie('counter') == undefined){
		$.cookie('counter', (value),{ expires: date });
	}


	num = $.cookie('counter');

	if($.cookie('counter') == null){
		num = value;
	}

	var str = 
						'<span class="counter__item">0</span>'+
						'<span class="counter__item">'+ num[0] +'</span>'+
						'<span class="counter__item">'+ num[1] +'</span>';

	counter.html(str);

	if(num < 8){
		counter.html(
				'<span class="counter__item">0</span>'+
				'<span class="counter__item">0</span>'+
				'<span class="counter__item">7</span>'
			);
	}

  function Random(min, max) {
 			return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	var count = counter.text();
	var setTimer = setInterval(function(){

				if(num > 7){
					num = '' + (num - Random(0,1));
					var firstNum = num[0];
					var lastNum;
					if(num[1] != undefined){
						lastNum =  num[1];
					}else{
						lastNum =  num[0];
						firstNum = 0;
					}
					var str = 
						'<span class="counter__item">0</span>'+
						'<span class="counter__item">'+ firstNum +'</span>'+
						'<span class="counter__item">'+ lastNum +'</span>'
					counter.html(str);
				}
				$.cookie('counter', (num),{ expires: date });
				if(num < 8){
					clearInterval(setTimer);
					$.cookie('counter', (7),{ expires: date });
				}


			}, timerTime);
	}







var toForm = function(){
	$('.pre_toform').click(function(e) {
		e.preventDefault();
		var a = $('.js_submit'),b = a.closest('form');
		if($('form#order_form').length) a = $('#order_form .js_submit'),b = a.closest('form#order_form');
		if(b.length && a.is(':visible')){
		$("html,body").animate({scrollTop: b.offset().top}, 1000);
				}
		return false;
	});
}

var sameHeight = function(elem){
	var max = 0;
	elem.each(function(){
		var $this = $(this);
		max = max < $this.outerHeight() ? $this.outerHeight() : max;
	})
	return elem.css('min-height',max + 'px');
}

var slider = function(){
	var slider = $('.bxslider').bxSlider({
		adaptiveHeight: false,
		pager: true,
		controls: false,
	});

	$('.round--triger').on('click',function(){
		slider.goToNextSlide();
	});


};

	var _videoInit = function(){
		var play = $('.play');
		var videoWrap = $('.tv');
		var video = document.getElementById("main_video");


		play.on('click',function(){
			video.play();
			videoWrap.addClass('tv--on');
		})

		video.addEventListener('ended',function(){
	    videoWrap.removeClass('tv--on');
	  }, false);
	}




$(function(){
	timer(_toDate);
	_countDown($('.counter__inner'));
	toForm();
	slider();
	_videoInit();
});