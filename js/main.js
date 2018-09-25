$(function () {
	$('button.btn-success').click(function () {
		$('img').toggle();
	});
	$('button.btn-danger').click(function () {
		$('body').hide();
	});
});
