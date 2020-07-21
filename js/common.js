function bgPos() {
	var mPos = $("#main").offset().top;
	var wPos = $(window).scrollTop();
	var wWidth = $(window).width();
	var cListH = $('.candidates-list').outerHeight();
	if (wWidth > 768) {
		if (wPos >= mPos - cListH - 150) {
			$('.candidates-list .bottom').css({
				top: wPos - 156
			});
		}
		if (wPos >= mPos) {
			$('.main-bg-wrapper').addClass('fixed');
		} else {
			$('.main-bg-wrapper').removeClass('fixed');
		}
	}
}
jQuery(document).ready(function($) {
	bgPos();
	function markLinks() {
	  var $links = $('header .bg .item');
	  var time = 6000;
	  var l = $('header .bg .item').length;
	  $links.each(function(i) {
	    var $this = $(this);
	    $this.css({
	    	zIndex: '0'
	    });
	    setTimeout(function() {
	    	$this.css({
	    		display: 'block'
	    	});
	    }, 2000);
	    $this.delay(i * time).queue(function() {
	    	if (i > 0) {
	    		$this.css({
	    			opacity: '0'
	    		});
	    	}
	    	$this.addClass("scale").css('z-index', i + 1).dequeue();
	    	$this.animate({
		      	opacity: 1
		    },time / 4, function() {
		      	setTimeout(function() {
		      		$this.removeClass('scale');
		      		$this.css({
		      			opacity: '0'
		      		});
		      	}, 7000);
	    	});
	    });
	  });
	  setTimeout(markLinks, time * l);
	}
	markLinks();

	$('.candidate-name-wrapper .name').addClass('animate');
	setTimeout(function() {
		$('.candidate-name-wrapper .quote').addClass('animate');
	}, 500);
	$('.go-down').delay(3000).fadeIn();
	var str = $('header .big-text').data('big-text');
	bgPos();
	if (str) {
		var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';
	}

	setTimeout(function() {
		$(spans).appendTo('header .big-text').each(function(i) {
		    $(this).delay(200 * i).fadeIn();
		});
	}, 1000);
	setTimeout(function() {
		$('header .animated-text img').addClass('animate');
	}, 2000);

	$(".scroll-to").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $("#main").offset().top
	    }, 1000);

	    return false;
	});

	if ($('main .content').length) {
		$('main .content').collapser({
			mode: 'chars',
			truncate: 610,
			speed: 'fast',
			showText: 'Mehr lesen',
			hideText: ' '
		});
	}
	
	$('.events-wrapper .show-all').click(function() {
		$('.candidate .events').addClass('expanded');
		$('.events .item').slideDown();
		return false;
	});

});
jQuery(window).scroll(function() {
	bgPos();
});