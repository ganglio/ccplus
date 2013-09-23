(function(){
	var l = document.createElement("link");
	l.href = "https://ccplus.localhost/ccplus.css";
	l.type="text/css";
	l.rel="stylesheet";
	l.addEventListener("load",function(){
		alert("Style Loaded");
	});
	document.head.appendChild(l);
})();