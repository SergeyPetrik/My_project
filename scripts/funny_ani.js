let size = 0;
let secondarySize;
let isLoaded = false;
let timer;
let Animate = function(){
	size++;
	document.querySelector(".smile").style = "width: "+ size +"px; height: "+ size +"px; margin-top: "+ secondarySize +"vh;";
	secondarySize = size / 18;
	document.querySelector(".mouth").style = "border-bottom-width: "+ secondarySize +"px;";

	if(size >= 400){
		clearTimeout(timer);
		isLoaded = true;
	}
}

let Hide  = function(){
	if(isLoaded){
		document.querySelector(".smile-block").style = "display: none;";
        size = 0;
		isLoaded = false;
	}
}

let FunnyAni = function(){
	timer = setInterval(Animate, 2);
    document.querySelector(".smile-block").style = "display: block;"
    
}
