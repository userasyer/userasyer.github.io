/*
function showAbout(){
	document.location.replace("about.html");
}
	*/
function fire(a) {
	/*
	fetch('motd.txt').then(response => response.text()).then(data => {
		document.getElementById('hide').innerHTML = data;
	}).catch(error => {
		document.getElementById('hide').innerHTML = "No new message";
	})
	*/
	var panel = document.getElementsByClassName("hide");
	var caret = document.getElementsByClassName("show");

	if (panel[a].style.display == "none") {
		panel[a].style.display = "block";
		caret[a].src = "/resources/downcaret.svg";
	} else {
		panel[a].style.display = "none";
		caret[a].src = "/resources/rightcaret.svg";
	}
}