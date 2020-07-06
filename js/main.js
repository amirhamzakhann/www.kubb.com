$(function(){

    // Sticky header jquery code start here
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.header').addClass('header-bg');
        }else{
            $('.header').removeClass('header-bg');
        }
    }); 
    // Sticky header jquery code end here


    // Typed Js jquery code start here
    $(".typed").typed({
		strings: ["Designer", "Developer", "ui designer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1300,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 500000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // Typed Js jquery code end here

    // Veno Box jquery code start here
    $('.venobox').venobox(); 
    // Veno Box jquery code end here

    // Counter Up jquery code start
    $('.counter').counterUp({
        delay: 30,
        time: 5000
    });
    // Counter Up jquery code end

    // CountDown jquery code start here
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 05, 2021 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
    // CountDown jquery code end here

    // Back to top button jquery code start here
    $('.btt').click(function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });
    // Back to top button jquery code end here

    // Preloader jquery code start here
    $(window).on('load',function(){
        $('.preloader').delay(3000).fadeOut(500);
    });
    // Preloader jquery code end here

}); 