function populateVehicle(vehicleList){
    sort('default');
    var html = "";
    for (var i = 0; i != vehicleList.length; i++) {
        html += '<li class="vehicleListItems">';
        var text = '';
        html += '    <img src="/image/'+ vehicleList[i].vin +'" class="carImage" alt="car-image">';
        html += '   <div class="carDetails">';
        html += '       <h2 class="carName">' + vehicleList[i].year + ' ' + vehicleList[i].make + ' ' + vehicleList[i].model + '</h2>';
        html += '       <p class="carPrice">$'+vehicleList[i].maxPrice + '</p>';
        html += '       <p class="carMileage">'+vehicleList[i].mileage +'  Kms</p>';
        html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
        html += '           <p class="carTransmission">' + vehicleList[i].transmissionName + '</p>';
        html += '       </div>';
        html += '       <div class="moreInfoContainer">';
        html += '              <a href="carview/'+ vehicleList[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
        html += '       </div>';
        for(var z=0;z!=dealershipList.length;z++){
            if(dealershipList[z].uuid == vehicleList[i].dealerId){
                html += '<p class="dealership">' + dealershipList[z].name + '</p>';
            }
        }
        html += '   </div>';
        html += '</li>';
    }
    $("#Vehicles").empty();
    $("#Vehicles").append(html);
}

function smallView(){
    var html = "";
    for (var i = 0; i != vehicleList.length; i++) {
        html+='<li class="vehicleListItemsSmallView">';
        var text = '';
        html+='    <img src="/image/'+ vehicleList[i].vin +'" class="carImage" alt="car-image"/>';
        html+='    <div class="carDetails">';
        html+='        <h2 class="carName">' + vehicleList[i].year + ' ' + vehicleList[i].make + ' ' + vehicleList[i].model + '</h2>';
        html+='        <p class="carPrice">$'+vehicleList[i].maxPrice + '</p>';
        html+='        <p class="carMileage">'+vehicleList[i].mileage +' Kms</p>';
        html+='        <a href="carview/'+ vehicleList[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
        html+='    </div>';
        html+='</li>';
    }
    $("#Vehicles").empty();
    $("#Vehicles").append(html);
}

function bigView(){
    var html = "";
    for (var i = 0; i != vehicleList.length; i++) {
        html += '<li class="vehicleListItems">';
        var text = '';
        html += '    <img src="/image/'+ vehicleList[i].vin +'" class="carImage" alt="car-image">';
        html += '   <div class="carDetails">';
        html += '       <h2 class="carName">' + vehicleList[i].year + ' ' + vehicleList[i].make + ' ' + vehicleList[i].model + '</h2>';
        html += '       <p class="carPrice">$'+vehicleList[i].maxPrice + '</p>';
        html += '       <p class="carMileage">'+vehicleList[i].mileage +' Kms</p>';
        html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
        html += '           <p class="carTransmission">' + vehicleList[i].transmissionName + '</p>';
        html += '       </div>';
        html += '       <div class="moreInfoContainer">';
        html += '               <a href="carview/'+ vehicleList[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
        html += '       </div>';
        html += '   </div>';
        html += '</li>';
    }
    $("#Vehicles").empty();
    $("#Vehicles").append(html);
}

function carView(index){
    location.replace("/carview"+ "?id=" + index);
}

function SearchVehicles(){
    vehicleList = [];
    for(var x=0;x!=vehicleListDefault.length;x++){
        if($('#MakeSearch').val()!=""){
            if(vehicleListDefault[x].make == $('#MakeSearch').val()){
                if($('#VehicleTypeSearch').val()!= ""){
                    if(vehicleListDefault[x].vehicleType == $('#VehicleTypeSearch').val()){
                        vehicleList.push(vehicleListDefault[x]);
                    }
                }else{
                    vehicleList.push(vehicleListDefault[x]);
                }
            }
        }else{
            if($('#VehicleTypeSearch').val()!= ""){
                if(vehicleListDefault[x].vehicleType == $('#VehicleTypeSearch').val()){
                    vehicleList.push(vehicleListDefault[x]);
                }
            }
        }
    }

    
    $('.filterBreadCrumbs span').empty()
    if($('#MakeSearch').val()!=""){
        $('.filterBreadCrumbs span').append($('#MakeSearch').val().toUpperCase()+" ")
    }

    if($('#VehicleType').val()!=""){
        $('.filterBreadCrumbs span').append($('#VehicleTypeSearch').val().toUpperCase()+" ")
    }
    
    console.log(vehicleList)
    populateVehicle(vehicleList);
}
