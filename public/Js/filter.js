var toggleFilter="off";
var toggleSort="off";
const filterMenu = document.querySelector('.filterSettings');
const filterBtn = document.querySelector('.filterBtn');
const sortMenu = document.querySelector('.filterSettings');

const slideFilterMenu = () => {
    z
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

function selectedFilter(){
    var filterval = Object.fromEntries(new URLSearchParams(location.search))
    $('#MakeSearch').val(filterval.make)
    $('#VehicleTypeSearch').val(filterval.vehicleType)
    $('#VehicleSort').val(filterval.VehicleSort)
  }



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
    console.log(sortType)
    if(sortType == "default"){
        // const eitherSort = (arr = []) => {
        //     arr.sort(function(a, b){
        //         if(a.model < b.model) { return -1; }
        //         if(a.model > b.model) { return 1; }
        //         return 0;
        //     })
        // };
        // eitherSort(arr);
        // rearrange(arr);
        shuffleArray(arr)
        populateVehicle(arr);
        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("Default");

        
    }else if(sortType == "lowToHigh"){
        const eitherSort = (gVehicle = []) => {
            const sorter = (a, b) => {
                return +a.maxPrice - +b.maxPrice;
            };
            gVehicle.sort(sorter);
            rearrange(gVehicle);
            console.log(gVehicle);
        };
        eitherSort(gVehicle);
        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("Low To High");

    }else if(sortType == "highToLow"){
        const eitherSort = (gVehicle = []) => {
            const sorter = (a, b) => {
                return +a.maxPrice - +b.maxPrice;
            };
            gVehicle.reverse(sorter);
            rearrange(gVehicle);
            console.log(gVehicle);
        };
        eitherSort(gVehicle); 
        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("High To Low");

    }else if(sortType == "kilometers"){
        const eitherSort = (gVehicle = []) => {
            const sorter = (a, b) => {
                if(a==null){
                    a=0;
                }
                if(b==null){
                    b=0;
                }
                return +a.mileage - +b.mileage;
            };
            gVehicle.sort(sorter);
            rearrange(gVehicle);
            console.log(gVehicle);
        };
        eitherSort(gVehicle);
        $('.sortBreadCrumbs span').empty();
        $('.sortBreadCrumbs span').append("Kilometers");
    }
    
    const sortMenu = document.querySelector('.filterSettings');
    sortMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
    toggleSort="off";
}

function rearrange(){
    if(toggleDisplay == "off"){
        bigView();
        document.querySelector('.vehicleList').style="align-items:center;";
    }else{
        smallView();
        document.querySelector('.vehicleList').style="align-items:unset;";
    }
}