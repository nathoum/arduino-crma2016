module.exports = {
  sayHelloInEnglish: function() {
  	$(".Menu-item").removeClass("Menu-item--active");
    return "HELLO";

  },
       
  changeActiveInstrument: function() {
    console.log("change instrument function ");
    	/*
    	$(".Menu-item").removeClass("Menu-item--active");
		console.log("change instrument");
		var selectorNumber = ".Menu-item--"+number;
		$(selectorNumber).addClass("Menu-item--active");

		$(".link--urpi").text(instrument);
		$(".link--urpi").attr("data-letters", instrument);
		$(".link--urpi").addClass("splitdown").addClass("splitup").addClass("link-anim");

		setTimeout(function(){
		  $(".link--urpi").removeClass("splitdown").removeClass("splitup").removeClass("link-anim");
		}, 1500);
	*/

  }
};