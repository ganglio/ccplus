(function(){

	"use strict";

	var $ccplus_cheat,
	    $ccplus_fps;

	var l = document.createElement("link");
	l.href = "https://ganglio.github.com/ccplus/ccplus.css";
	l.type="text/css";
	l.rel="stylesheet";
	l.addEventListener("load",function(){
		var ccplus = document.createElement("div");
		ccplus.id = "ccplus";
		ccplus.innerHTML = "<ul><li class='cheat'>ClickBot </li><li class='fps'></li><li class='mail'>Send Save</li></ul>";
		document.body.appendChild(ccplus);
		init();
	});
	document.head.appendChild(l);

	function init() {
		$ccplus_cheat = document.querySelector("#ccplus .cheat");
		$ccplus_fps = document.querySelector("#ccplus .fps");
		$ccplus_cheat.addEventListener("click",function(){
			this.classList.toggle("on");
		});

		document.querySelector("#ccplus .mail").addEventListener("click",function(){
			window.open("mailto:?subject="+escape("Cookie Clicker Save - "+(new Date()))+"&body="+escape("This is your savefile:\n\n"+Game.WriteSave(1)+"\n\nClick here http://orteil.dashnet.org/cookieclicker/ to play!"));
		});
	}

	var filterStrength = 20;
	var frameTime = 0, lastLoop = new Date, thisLoop;
	var loop = function() {
		if ( $ccplus_cheat && $ccplus_cheat.classList.contains("on"))
			document.querySelector("#bigCookie").click();
		var thisFrameTime = (thisLoop=new Date) - lastLoop;
		frameTime+= (thisFrameTime - frameTime) / filterStrength;
		lastLoop = thisLoop;

		window.requestAnimationFrame(loop);
	}
	setInterval(function(){
		if ( $ccplus_cheat && $ccplus_cheat.classList.contains("on"))
			document.querySelector("#ccplus .fps").innerText= (1000/frameTime).toFixed(1);
	},1000);
	loop();
})();