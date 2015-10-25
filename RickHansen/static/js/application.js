$(function(){ 
	// Cached locators
	var $addMenu = $("#addMenu");
	var $searchMenu = $("#searchMenu");
	var $addButton = $("#addButton");
	var $searchButton = $("#searchButton");
	var $intro = $("#introHead");
	var counter = 0;
	// $.fn.preload = function() {
 //    this.each(function(){
 //        // $('static/img/')[0].src = this;
 //    });
// }
	// $(['rh_bgimage_hike.png','rh_bgimage_KidandFather.png','rh_bgimage_Beach.png']).preload();

	var changeBackGround = function(){
		// var oDeferred = jQuery.promise();


		if(counter % 4 === 0){
			$intro.addClass("intro1");
			$intro.removeClass("intro2");
			$intro.removeClass("intro3");
			$intro.removeClass("intro");
			// $intro.css('background', 'url(static/img/rh_bgimage_hike.png) no-repeat center center scroll');
			// $intro.css('background-size', 'cover');
		} else if (counter % 4 === 1){
						$intro.addClass("intro2");
						$intro.removeClass("intro1");
			$intro.removeClass("intro3");
			$intro.removeClass("intro");

			
			
			// $intro.css('background', 'url(static/img/rh_bgimage_KidandFather.png) no-repeat center center scroll');
			// $intro.css('background-size', 'cover');
		} else if (counter % 4 === 2){
						$intro.addClass("intro3");
						$intro.removeClass("intro2");
			$intro.removeClass("intro");
			$intro.removeClass("intro1");

			// $intro.css('background', 'url(static/img/rh_bgimage_Beach.png) no-repeat center center scroll');
			// $intro.css('background-size', 'cover');
		} else if (counter % 4 === 3){
						$intro.addClass("intro");
						$intro.removeClass("intro1");
			$intro.removeClass("intro3");
			$intro.removeClass("intro2");

			// $intro.css('background', 'url(static/img/rh_bgimage_Run.png) no-repeat center center scroll');
			// $intro.css('background-size', 'cover');
		}
		counter++;

		setTimeout(changeBackGround, 5000);


	}

	changeBackGround();

	// // event listener for 'add' button
	// $addButton.on('click', function() {
	// 	$addButton.toggleClass("glyphicon glyphicon-plus");
	// 	$addButton.toggleClass("glyphicon glyphicon-minus");
	// 	$searchMenu.slideUp();
	// 	$addMenu.slideToggle();
	// });

	// event listener for 'search' button
	$searchButton.on('click', function() {
		$addMenu.slideUp();
		$addButton.removeClass("glyphicon glyphicon-minus");
		$addButton.addClass("glyphicon glyphicon-plus");
		$searchMenu.slideToggle();
	});
});


