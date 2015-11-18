(function(){

	"use strict";

	var $ccplus_cheat,
	    $ccplus_fps;

	var l = document.createElement("link");
	l.href = "http://ganglio.github.com/ccplus/ccplus.css";
	// l.href = "http://localhost:8080/ccplus/ccplus.css?"+Math.random();
	l.type="text/css";
	l.rel="stylesheet";
	l.addEventListener("load",function(){
		var ccplus = document.createElement("div");
		ccplus.id = "ccplus";
		ccplus.innerHTML =
			"<ul>" +
				"<li>" +
					"<label for='cheat'>ClickBot</label>" +
					"<input type='checkbox' id='cheat' class='switch' data-on='1' data-off='0' name='cheat'>" +
				"</li>" +
				"<li>" +
					"<span class='fps'>0</span>fps" +
				"</li>" +
				"<li>" +
					"<span class='hoard'>Hoard</span>" +
				"</li>" +
				"<li>" +
					"<span class='mail'>Send Save</span>" +
				"</li>" +
			"</ul>"
		;
		document.body.appendChild(ccplus);
		init();
	});
	document.head.appendChild(l);

	function init() {
		document.querySelector("#support").innerHTML = "";
		$ccplus_cheat = document.querySelector("input[type=checkbox][name=cheat]");
		$ccplus_fps = document.querySelector("#ccplus .fps");

		document.querySelector("#ccplus .mail").addEventListener("click",function(){
			window.open("mailto:?subject="+escape("Cookie Clicker Save")+"&body="+escape("This is your savefile on " + new Date() + ":\n\n" + Game.WriteSave(1)+"\n\nClick here http://orteil.dashnet.org/cookieclicker/ to play!"));
		});
		document.querySelector("#ccplus .hoard").addEventListener("click",function(){
			Game.UpgradesById[83].toggle();
		});
	}

	var filterStrength = 20;
	var frameTime = 0, lastLoop = new Date, thisLoop;
	var loop = function() {
		if ( $ccplus_cheat && $ccplus_cheat.checked) {
			document.querySelector("#bigCookie").click();
			for (var i=0;i<10;i++) {
				if (Game.wrinklers[i].close==1) {
					Game.wrinklers[i].hp = 0
				}
			}
			if (Game.goldenCookie.life > 0) {
				Game.goldenCookie.click();
			}
			if (Game.seasonPopup.life > 0) {
				Game.seasonPopup.click();
			}
		}
		var thisFrameTime = (thisLoop=new Date) - lastLoop;
		frameTime+= (thisFrameTime - frameTime) / filterStrength;
		lastLoop = thisLoop;
	}
	setInterval(function(){
		if ( $ccplus_cheat && $ccplus_cheat.checked)
			document.querySelector("#ccplus .fps").innerText= (1000/frameTime).toFixed(1);
	},1000);
	setInterval(function(){
		loop();
	},1)
	console.log("CCPlus Initialized");
})();