var toggleFilter="off";
var toggleSort="off";
const filterMenu = document.querySelector('.filterSettings');
const filterBtn = document.querySelector('.filterBtn');
const sortMenu = document.querySelector('.sortSettings');

const slideFilterMenu = () => {
    
    if(toggleFilter=="off"){
        filterMenu.style = "width:100vw;overflow:hidden;right:0px;transition:0.5s ease-out;";
        toggleFilter="on";
    }else{
        filterMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
        toggleFilter="off";
    }

    // When Click Outside the Filter Settings 
    var except = document.querySelector('.filterSettingContainer');
    filterMenu.addEventListener("click", function () {
        filterMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
        toggleFilter="off";
    }, false);
    except.addEventListener("click", function (ev) {
        ev.stopPropagation(); 
    }, false);

};



const slideSortMenu = () => {
    
    if(toggleSort=="off"){
        sortMenu.style = "width:100vw;overflow:hidden;right:0px;transition:0.5s ease-out;";
        toggleSort="on";
    }else{
        sortMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
        toggleSort="off";
    }

    // When Click Outside the Filter Settings 
    var except = document.querySelector('.sortSettingContainer');
    sortMenu.addEventListener("click", function () {
        sortMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
        toggleSort="off";
    }, false);
    except.addEventListener("click", function (ev) {
        ev.stopPropagation(); 
    }, false);

};