javascript: void((function(d){
	if (!document.querySelector("#ccplus-style")) {
		var s = d.createElement("script");
		s.id="ccplus-style";
		s.src = "http://ccplus.localhost/ccplus.js";
		s.type="text/javascript";
		d.head.appendChild(s);
	}
})(document));