var toggleDisplay="off";

const vehicleDisplay = () => {
    if(toggleDisplay=="off"){
        toggleDisplay="on";
        smallView();
        document.querySelector('.vehicleList').style="align-items:unset;";
        document.querySelector('#gridDisplayBtn').className = "fas fa-images fa-2x";
    }else{
        toggleDisplay="off";
        bigView();
        document.querySelector('.vehicleList').style="align-items:center;";
        document.querySelector('#gridDisplayBtn').className = "fas fa-th-list fa-2x";
    }
};
