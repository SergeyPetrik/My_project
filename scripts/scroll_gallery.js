let itemNum = document.getElementsByClassName('conteiner__img').length;
let itemCounter = 0
let stepCounter = 0;
let moving = 0
let galleryTimer;
let moveIsStartet = false;
let scrollVal = document.querySelector(".conteiner__img").offsetWidth;
window.onresize = function() {
    scrollVal = document.querySelector(".conteiner__img").offsetWidth;
};

let MoveL = function(){
	if(stepCounter <= scrollVal && itemCounter < itemNum-1){
		stepCounter += 2;
		moving = -stepCounter - (itemCounter * scrollVal);
		document.querySelector(".viewe__conteiner").style = "transform: translateX("+ moving +"px);"
	}
	else{
		moveIsStartet = false;
		stepCounter = 0;
		clearTimeout(galleryTimer);
		if( itemCounter < itemNum-1 ){
			itemCounter += 1;
		}
	}
}

let MoveR = function(){
	if(stepCounter < scrollVal && itemCounter > 0){
		stepCounter += 2;
		moving = stepCounter-(itemCounter * scrollVal);
		document.querySelector(".viewe__conteiner").style = "transform: translateX("+ moving +"px);"
	}
	else{
		moveIsStartet = false;
		stepCounter = 0;
		clearTimeout(galleryTimer);
		if(itemCounter > 0){
			itemCounter -= 1;
		}
	}
}

document.querySelector(".placeholder__next").onclick = () => {
    if(!moveIsStartet){
        galleryTimer = setInterval(MoveL, 2);
        moveIsStartet = true;
    }
}

document.querySelector(".placeholder__prev").onclick = () => {
    if(!moveIsStartet){
        galleryTimer = setInterval(MoveR, 2);
        moveIsStartet = true;
    }
}