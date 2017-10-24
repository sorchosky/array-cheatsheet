// Click a button to open a modal
$('.modal-toggle').on('click', function(e) {
	e.preventDefault();

	//get a data-target from the clicked button
	var $target = $(this).parent().parent().parent().data("target");
	$('.modal').toggleClass('visible');

	//get the title from the clicked card
	var $title = $("section[data-target=" + $target + "]").children('.title').text();
	//Add the title to the modal
	$('.modal-content').append( "<h2>" + $title + "</h2>" );

	//get the code block
	var $codeBlock = $("section[data-target=" + $target + "]").children('.code-block-hidden').html();
	$('.modal-content').append( $codeBlock );
});

//Click outside the modal to return
$('.modal-overlay').on('click', function(e) {
	e.preventDefault();
	$(this).parent().toggleClass('visible');
	//remove title
	function removeTitle(){
		$('.modal-content').children("h2").remove();
		$('.modal-content').children(".code-block").remove();
	}
	setTimeout(removeTitle, 300);
})