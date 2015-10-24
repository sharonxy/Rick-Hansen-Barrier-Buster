$(function(){ 
	// Cached locators
	var $addMenu = $("#addMenu");
	var $searchMenu = $("#searchMenu");
	var $addButton = $("#addButton");
	var $searchButton = $("#searchButton");

	// event listener for 'add' button
	$addButton.on('click', function() {
		$addButton.toggleClass("glyphicon glyphicon-plus");
		$addButton.toggleClass("glyphicon glyphicon-minus");
		$searchMenu.slideUp();
		$addMenu.slideToggle();
	});

	// event listener for 'search' button
	$searchButton.on('click', function() {
		$addMenu.slideUp();
		$addButton.removeClass("glyphicon glyphicon-minus");
		$addButton.addClass("glyphicon glyphicon-plus");
		$searchMenu.slideToggle();
	});
});


