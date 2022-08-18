let selectedFilter =[];
let filterElements = document.querySelectorAll(".portfolio__filters li")

let checkFilter = function(){
    selectedFilter =[];
        for(let i = 0, j = 0; i < filterElements.length; i++){
            if (filterElements[i].hasAttribute('checked')){
                selectedFilter[j] = filterElements[i].innerHTML;
                j++;
            }
        }
    console.log(selectedFilter);
}

let colorFilter = function(e){
        if(!e.target.hasAttribute('checked')){
            e.target.setAttribute("class", "portfolio__filters_highlighted_true");
            e.target.setAttribute("checked", "");
        }      
        else{
            e.target.setAttribute("class", "portfolio__filters_highlighted_false");
            e.target.removeAttribute("checked");
        }
}

let colorFilterAll = function(){
    for(let i = 0; i < filterElements.length; i++){
       if(!filterElements[i].hasAttribute('checked')){
        filterElements[i].setAttribute("class", "portfolio__filters_highlighted_true");
        filterElements[i].setAttribute("checked", "");
       }
    }
}

let resetFilterAll = function(){
    for(let i = 0; i < filterElements.length; i++){
        if(filterElements[i].hasAttribute('checked')){
         filterElements[i].setAttribute("class", "portfolio__filters_highlighted_false");
         filterElements[i].removeAttribute("checked");
        }
     }
}

document.querySelector(".portfolio__filters").onclick =  function(e){
    if(e.target.tagName == "LI"){
        colorFilter(e);
        checkFilter(); 
    }
}

document.querySelector(".portfolio__browse-all").onclick = function(){
    colorFilterAll();
    checkFilter(); 
}

document.querySelector(".portfolio__hide-all").onclick = function(){
    resetFilterAll();
    checkFilter(); 
}