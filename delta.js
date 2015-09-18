$(document).ready(function(){
	$(".wholesale-form").hide();

	$(".manu-form").hide();

	$(".install-form").hide();

	$(".wholesale").click(function() {
		$(".wholesale-form").fadeToggle(800);
	});

	$(".manufacturing").click(function() {
		$(".manu-form").fadeToggle(800);
	});

	$(".install").click(function() {
		$(".install-form").fadeToggle(800);
	});
});