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

function sort(sortType){
    if(sortType == "default"){
        const eitherSort = (vehicleList = []) => {
            vehicleList.sort(function(a, b){
                if(a.model < b.model) { return -1; }
                if(a.model > b.model) { return 1; }
                return 0;
            })
        };
        eitherSort(vehicleList);
        rearrange(vehicleList);

        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("Default");

        
    }else if(sortType == "lowToHigh"){
        const eitherSort = (vehicleList = []) => {
            const sorter = (a, b) => {
                return +a.maxPrice - +b.maxPrice;
            };
            vehicleList.sort(sorter);
        };
        eitherSort(vehicleList);
        rearrange(vehicleList);

        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("Low To High");

    }else if(sortType == "highToLow"){
        const eitherSort = (vehicleList = []) => {
            const sorter = (a, b) => {
                return +a.maxPrice - +b.maxPrice;
            };
            vehicleList.reverse(sorter);
        };
        eitherSort(vehicleList);
        rearrange(vehicleList);

        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("highToLow");

    }else if(sortType == "kilometers"){
        const eitherSort = (vehicleList = []) => {
            const sorter = (a, b) => {
                return +a.mileage - +b.mileage;
            };
            vehicleList.sort(sorter);
        };
        eitherSort(vehicleList);
        rearrange(vehicleList);

        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("kilometers");
    }
    
    const sortMenu = document.querySelector('.sortSettings');
    sortMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
    toggleSort="off";
}

function rearrange(vehicleList){
    if(toggleDisplay == "off"){
        bigView();
        document.querySelector('.vehicleList').style="align-items:center;";
    }else{
        smallView();
        document.querySelector('.vehicleList').style="align-items:unset;";
    }
}