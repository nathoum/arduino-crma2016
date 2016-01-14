function animateContent() {
	var tl = new TimelineMax();
	tl.to($(".layer h1"), 0.5, {opacity:1, ease:Power1.easeOut, delay: 1.0});
	tl.to($(".layer h2"), 1.2, {opacity:1, ease:Power1.easeOut});
	tl.to($(".layer .button"), 1.2, {opacity:1, ease:Power1.easeOut});
	//TweenLite.to($(".layer .button"), 0.5, {opacity:1, ease:Back.easeOut, delay: 0.5});
}
animateContent();