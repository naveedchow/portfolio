$(document).ready(function(){

	/* FOR AUTOMATED SCROLL TO THE NEXT SECTION */
	var isScrolling = false;
	function autoScrollToNextSection(direction){
		if ($(window).width() > 992){ /* FOR DESKTOP ONLY */
			if (!isScrolling){
				isScrolling = true;
				var index = 0;
				if (direction == "up"){
					if (($("#myNav li.active").index() - 1) >= 0){
						index = $("#myNav li.active").index() - 1;
					} else {
						index = $(".section").length - 1;
					}
				} else if (direction == "down" && (($("#myNav li.active").index() + 1) <= ($(".section").length - 1))){
					index = $("#myNav li.active").index() + 1;
				}
				$("html, body").animate({scrollTop: $(".section").eq(index).offset().top}, 550, function(){
					isScrolling = false;
				});
			}
			return false;
		}
	}
	$("body").on("mousewheel DOMMouseScroll", function(e){
		if(typeof e.originalEvent.detail == "number" && e.originalEvent.detail !== 0) {
			if(e.originalEvent.detail > 0) {
				return autoScrollToNextSection("down");
			} else if(e.originalEvent.detail < 0){
				return autoScrollToNextSection("up");
			}
		} else if (typeof e.originalEvent.wheelDelta == "number") {
			if(e.originalEvent.wheelDelta < 0) {
				return autoScrollToNextSection("down");
			} else if(e.originalEvent.wheelDelta > 0) {
				return autoScrollToNextSection("up");
			}
		}
	});
	/* END */
	
});