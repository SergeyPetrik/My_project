let observerMarginTop = document.querySelector(".header-section").offsetHeight/2;
let galleryRoll = false;

document.querySelector(".blog__show-all").onclick = function(){
	galleryRoll = !galleryRoll;
	if(galleryRoll){
		blogSliderTimertimer = setInterval(SlideBlog, 50);
	}	
	else{
		clearTimeout(blogSliderTimertimer);
		for(let i = 0; i < blogItemNum; i++){
			document.querySelectorAll('.blog-section__item')[i].removeAttribute("style");
		}
	}
}

function Show(entry) {
  entry.forEach(change => {
	if(!galleryRoll)
		if (change.isIntersecting) {
		change.target.classList.add('element-show');
		}
		else{
		change.target.classList.remove('element-show');
		}
	else{
		change.target.classList.add('element-show');
	}
  });
}

var options = {
    rootMargin: -observerMarginTop+'px 1500px ' + +observerMarginTop +'px 0px',
    threshold: 1.0
}

let intObserver = new IntersectionObserver(Show, options);
let elements = document.querySelectorAll('.blog-section__item');

for (let elm of elements) {
	intObserver.observe(elm);
}

let blogItemNum = document.getElementsByClassName('blog-section__item').length;
let itemElements = document.querySelectorAll(".blog-section__item");
let itemElement = document.querySelector(".blog-section__item");
let blogSliderTimertimer;
let moveCoordinates=[];
let moveCoordinatesTo;

for(let i = 0; i < blogItemNum; i++){
	itemElements[i].style = "top: " + 300 *i + "px;";
	moveCoordinates[i] = 0;
}

let SlideBlog = function(){
    for(let i = 0; i < blogItemNum; i++){
        moveCoordinatesTo = moveCoordinates[i];
        if( moveCoordinatesTo < -itemElement.offsetHeight*i - itemElement.offsetHeight -150){
            moveCoordinates[i] = itemElement.offsetHeight *(blogItemNum-1)  - (itemElement.offsetHeight*i)+120;
        }
        itemElements[i].style = "transform: translateY("+moveCoordinates[i]+"px); opacity: 1; transition: none;";
        moveCoordinates[i]-=5;
    }

}