function set_screen_dimension() {
	var message = "";
	message += "width : " + window.innerWidth + " px";
	message += "&nbsp;|&nbsp;"
	message += "height : " + window.innerHeight + " px";
	$("#screen-dimension").html(message);
}

function handle_resize() {
	console.log(window.innerWidth + ' x ' + window.innerHeight);

	set_screen_dimension();
    loadModel(getModelFile(window.innerWidth, window.innerHeight));
}

window.onresize = handle_resize;