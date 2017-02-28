$(document).ready(function() {
	$("#loader_div").hide();
	$("#body").show();
	var winHeight = $(window).height();
	$("#header").css("height", winHeight );
	$("#personal_info_div").css("height", winHeight );
	$("#experience_div").css("height", winHeight );
	$("#education_div").css("height", winHeight );
	$("#skills_div").css("height", winHeight );
	$("#contact_div").css("height", winHeight );
	header();

	$("#personal_info_trigger, #experience_trigger, #education_trigger, #skills_trigger, #contact_trigger").click(function() {
		$(this).parent().children().removeClass("active");
		$(this).addClass("active");
		scroll($(this).attr("data-div"));
	});

	setWayPoint("#personal_info_div");
	setWayPoint("#experience_div");
	setWayPoint("#education_div");
	setWayPoint("#skills_div");
	setWayPoint("#contact_div");
	var waypointFunc = function() {
		removedviewattr = "opaque";
		viewattr = "transparent";
		$("header").removeClass("opaqueheader").addClass("transparentheader");
		$(".table_of_contents").children().removeClass("active");
	};
	$("#header").waypoint(waypointFunc, {offset:'-75%'});
	$("#header").waypoint(waypointFunc, {offset:'-15%'});
});

var viewattr = "transparent";
var removedviewattr = "opaque";

function setWayPoint(section) {
	var waypointFunc = function() {
		removedviewattr = "transparent";
		viewattr = "opaque";
		$("header").removeClass("transparentheader").addClass("opaqueheader");
		var $trigger = $($(this.element).attr("data-trigger"));
		$trigger.parent().children().removeClass("active");
		$trigger.addClass("active");
	};
	$(section).waypoint(waypointFunc, {offset:'15%'});
	$(section).waypoint(waypointFunc, {offset:'-15%'});
}

function scroll(section) {
	$('html, body').animate({
		scrollTop: ($(section).offset().top - 25)
	}, 500);
}

function header() {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		if(Math.abs(lastScrollTop - st) <= delta)
			return;

		if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('nav-down').removeClass(removedviewattr+'nav-up').addClass(viewattr+'nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	        	$('header').removeClass(viewattr+'nav-up').removeClass(removedviewattr+'nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}
}


