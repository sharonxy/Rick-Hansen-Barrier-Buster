$(function(){ 
	// Cached locators
	var $addMenu = $("#addMenu");
	var $searchMenu = $("#searchMenu");
	var $addButton = $("#addButton");
	var $searchButton = $("#searchButton");
	var $intro = $(".intro");
	var counter = 0;

	var changeBackGround = function(){
		if(counter % 3 === 0){
			$intro.css('background', 'url(../img/downloads-bg.jpg) no-repeat center center scroll');

		} else if (counter % 3 === 1){
			$intro.css('background', 'url(../img/rh_bgimage_hike.png) no-repeat center center scroll');
		} else {

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


