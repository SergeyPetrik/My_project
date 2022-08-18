let ScrollCalc = function(){
    let scrollPercent = (window.pageYOffset * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    document.querySelector('.progress-bar__indicator').style = 'width: ' + scrollPercent +'%';
}

document.addEventListener("scroll", ScrollCalc);
document.addEventListener("DOMContentLoaded", ScrollCalc);