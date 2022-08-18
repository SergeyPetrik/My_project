let a = 0;
let isDay = true;
let timerSwitcher;
let timerTime;
let isStarted = false;
let Rotate = function(){
	let x;
	if (isDay){
		if(a!=180){
		a++;
		document.querySelector(".switcher__inner").style = "transform: rotate(" + a + "deg)";
		document.querySelector(".sun").style = "transform: rotate(" + -a + "deg)";
		x = a - 45;
		document.querySelector(".sub-sun").style = "transform: rotate(" + -x + "deg)";
		document.querySelector(".moon").style = "transform: rotate(" + -a + "deg)";
		}
		else{
			clearTimeout(timerSwitcher);
			isDay = false;
			isStarted = false;
			let darkTheme = document.createElement("link");
			darkTheme.setAttribute("rel", "stylesheet");
			darkTheme.setAttribute("type", "text/css");
			darkTheme.setAttribute("href", "style/dark.css");
			document.querySelector("link[href='style/switcher.css']").after(darkTheme);
		}
	}
	else{
		if(a!=360){
		a++;
		document.querySelector(".switcher__inner").style = "transform: rotate(" + a + "deg)";
		document.querySelector(".sun").style = "transform: rotate(" + -a + "deg)";
		x = a - 45;
		document.querySelector(".sub-sun").style = "transform: rotate(" + -x + "deg)";
		document.querySelector(".moon").style = "transform: rotate(" + -a + "deg)";
		}
		else{
			clearTimeout(timerSwitcher);
			a = 0;
			isDay = true;
			isStarted = false;
			document.querySelector("link[href='style/dark.css']").remove();
		}
	}
}
 
document.querySelector(".switcher").addEventListener("click", function(){
	if(!isStarted){
		timerSwitcher = setInterval(Rotate, 2);
		isStarted = true;
	}
})
document.addEventListener("DOMContentLoaded", function(){
	let curentTime = new Date().getHours();
	if(!(curentTime >= "6" && curentTime < "21")){
		timerSwitcher = setInterval(Rotate, 2);
	}
	
});