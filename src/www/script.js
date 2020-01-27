
// select a background image
function selectBackground() {
	var LIMIT = 3;

	var hour = new Date().getHours();
	var isDay = hour >= 6 && hour < 18;
	var bgNum = 1+Math.floor(Math.random() * LIMIT);
	var bodyClass = (isDay ? "day-" : "night-")+bgNum;

	document.getElementsByTagName("BODY")[0].className = bodyClass;
}

selectBackground();
setInterval(selectBackground, 300000); // 5 minutes
