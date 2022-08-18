let modalW = document.body.offsetWidth * 0.2;
let modalH = window.innerHeight * 0.2;
let modalT = window.innerHeight * 0.2;
let modalL = (document.body.offsetWidth - modalW) / 2;
let modalStyle = "width: " + modalW + "px;" + "height: " + modalH + "px;" +
    "top: " + modalT + "px;" + "left: " + modalL + "px;" +  "position: fixed;" +
    "z-index: 10;" + "background-color: #555;" + "border-radius: 25px;" +
    "padding: 80px;" + "color: #f6edd8;" + "font-size: 36px;" + "font-family: RobotoSlab;" +
    "text-align: center;";
let modalYesBtnStyle = "width: 20%;" + "height: 20%;" +
    "bottom: 10%;" + "left: 10%;" + "position:absolute;";
let modalNoBtnStyle = "width: 20%;" + "height: 20%;" +
    "bottom: 10%;" + "right: 10%;" + "position:absolute;";


document.querySelector(".question-block").style = modalStyle + "display: none;";
document.querySelector("#yes-btn").style = modalYesBtnStyle + "display: none;";
document.querySelector("#no-btn").style = modalNoBtnStyle + "display: none;";

document.querySelector("#yes-btn").onclick = function(){
    modalStyle += "display: none;";
    document.querySelector(".question-block").style = modalStyle;
};


let modalTimer;
let modalTimerClose;

let showModal = function() {
    clearTimeout(modalTimer);
    modalW = document.body.offsetWidth * 0.2;
    modalH = window.innerHeight * 0.2;
    modalT = window.innerHeight * 0.2;
    modalL = (document.body.offsetWidth - modalW) / 2;
    modalStyle = "width: " + modalW + "px;" + "height: " + modalH + "px;" +
    "top: " + modalT + "px;" + "left: " + modalL + "px;" +  "position: fixed;" +
    "z-index: 11;" + "background-color: #555;" + "border-radius: 25px;" +
    "padding: 80px;" + "color: #f6edd8;" + "font-size: 36px;" + "font-family: RobotoSlab;" +
    "text-align: center;";
    document.querySelector(".question-block").style = modalStyle + "display: block;";
    document.querySelector("#yes-btn").style = modalYesBtnStyle + "display: block;";
    document.querySelector("#no-btn").style = modalNoBtnStyle + "display: block;";
    modalTimerClose = setInterval(()=> window.close() , 10000);
}

let event = function() {

    clearTimeout(modalTimer);
    modalTimer = setInterval(showModal, 60000)
}

document.querySelector("#yes-btn").onclick = function(){
    document.querySelector(".question-block").style = modalStyle + "display: none;";
    clearTimeout(modalTimerClose);
};

document.querySelector("#no-btn").onclick = function(){
    window.close();
};

document.onclick = event;
document.onmousemove = event;
document.onkeypress = event;
document.onwheel = event;
document.oncontextmenu = event;



