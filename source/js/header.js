var scrollRefresh = {
    pastTop: false,
    pastBottom: false,
    previous: 0,
    bottom: function(callback) {
      var pBottom = $(window).height() + $(window).scrollTop() >= $(document).height();
      if(!this.pastBottom && pBottom) {
        callback($(window).height() + $(window).scrollTop());
        this.pastBottom = true;
      } else {
        if(!pBottom) this.pastBottom = false;
      }
      this.previous = $(window).scrollTop();
    },
    top: function(callback) {
      var pTop = $(window).scrollTop() < this.scrollPrevious && $(window).scrollTop <= 0;
      if(!this.pastTop && pTop) {
        callback($(window).scrollTop());
        this.pastTop = true;
      } else {
        if(!pTop) this.pastTop = false;
      }
      this.previous = $(window).scrollTop();
    }
  }
  
$(window).scroll(function () {

	// Show header when scrolled a little from top
	if ($(document).scrollTop() == 0) {
		$('.header.sliding').removeClass('header-shrink');
	} else {
		$('.header.sliding').addClass('header-shrink');
	}
	
	// Blog Header Shrink
	if ($(document).scrollTop() == 0) {
		$('.header.shortme').removeClass('header-short');
	} else {
		$('.header.shortme').addClass('header-short');
	}

	// Hide header when scrolled to the end of site
	scrollRefresh.top(function(pos) {
		console.log("Loading top. " + pos);
		$('.header').addClass('header-shrink');
	});
	scrollRefresh.bottom(function(pos) {
		console.log("Loading bottom. " + pos);
		$('.header').removeClass('header-shrink');
	});
	
});

