(function(){
	var l = document.createElement("link");
	l.href = "https://raw.github.com/ganglio/ccplus/master/ccplus.css";
	l.type="text/css";
	l.rel="stylesheet";
	l.addEventListener("load",function(){
		alert("Style Loaded");
	});
	document.head.appendChild(l);
})();