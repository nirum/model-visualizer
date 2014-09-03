$(function() {
	console.log('Ready!');

	// get list of experiments
	$.ajax('/api/expts').done(function (data) {
		_.each(data, function(item) {
			console.log(item);
			$("#sidebar").add("li").add("a").html(item);
		});
	});

});
