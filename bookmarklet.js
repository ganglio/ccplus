javascript: void((function(d){
	if (!document.querySelector("#ccplus")) {
		var s = d.createElement("script");
		s.id="ccplus";
		s.src = "https://ccplus.localhost/ccplus.js";
		s.type="text/javascript";
		d.head.appendChild(s);
	}
})(document));