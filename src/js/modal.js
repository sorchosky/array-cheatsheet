// Click a button to open a modal
$('.modal-toggle').on('click', function(e) {
	e.preventDefault();
	//get a data-target from the clicked button
	var $target = $(this).parent().parent().data("target");
	$('.modal-' + $target).toggleClass('visible');
});

//Click outside the modal to return
$('.modal-overlay').on('click', function(e) {
	e.preventDefault();
	$(this).parent().toggleClass('visible');
})