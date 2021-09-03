function populateVehicle(){
    // sort('default');
    var html = "";
    for (var i = 0; i != gVehicle.length; i++) {
        html += '<li class="vehicleListItems">';
        var text = '';
        html += '    <img src="/image/'+ gVehicle[i].vin +'" class="carImage" alt="car-image">';
        html += '   <div class="carDetails">';
        html += '       <h2 class="carName">' + gVehicle[i].year + ' ' + gVehicle[i].make + ' ' + gVehicle[i].model + '</h2>';
        html += '       <p class="carPrice">$'+gVehicle[i].maxPrice + '</p>';
        html += '       <p class="carMileage">'+gVehicle[i].mileage +'  Kms</p>';
        html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
        html += '           <p class="carTransmission">' + gVehicle[i].transmissionName + '</p>';
        html += '       </div>';
        html += '       <div class="moreInfoContainer">';
        html += '              <a href="carview/'+ gVehicle[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
        html += '       </div>';
        for(var z=0;z!=dealershipList.length;z++){
            if(dealershipList[z].uuid == gVehicle[i].dealerId){
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
    for (var i = 0; i != gVehicle.length; i++) {
        html+='<li class="vehicleListItemsSmallView">';
        var text = '';
        html+='    <img src="/image/'+ gVehicle[i].vin +'" class="carImage" alt="car-image"/>';
        html+='    <div class="carDetails">';
        html+='        <h2 class="carName">' + gVehicle[i].year + ' ' + gVehicle[i].make + ' ' + gVehicle[i].model + '</h2>';
        html+='        <p class="carPrice">$'+gVehicle[i].maxPrice + '</p>';
        html+='        <p class="carMileage">'+gVehicle[i].mileage +' Kms</p>';
        html+='        <a href="carview/'+ gVehicle[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
        for(var z=0;z!=dealershipList.length;z++){
            if(dealershipList[z].uuid == gVehicle[i].dealerId){
                html += '<p class="dealership">' + dealershipList[z].name + '</p>';
            }
        }
        html+='    </div>';
        html+='</li>';
    }
    $("#Vehicles").empty();
    $("#Vehicles").append(html);
}

function bigView(){
    var html = "";
    for (var i = 0; i != gVehicle.length; i++) {
        html += '<li class="vehicleListItems">';
        var text = '';
        html += '    <img src="/image/'+ gVehicle[i].vin +'" class="carImage" alt="car-image">';
        html += '   <div class="carDetails">';
        html += '       <h2 class="carName">' + gVehicle[i].year + ' ' + gVehicle[i].make + ' ' + gVehicle[i].model + '</h2>';
        html += '       <p class="carPrice">$'+gVehicle[i].maxPrice + '</p>';
        html += '       <p class="carMileage">'+gVehicle[i].mileage +' Kms</p>';
        html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
        html += '           <p class="carTransmission">' + gVehicle[i].transmissionName + '</p>';
        html += '       </div>';
        html += '       <div class="moreInfoContainer">';
        html += '               <a href="carview/'+ gVehicle[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
        html += '       </div>';
        for(var z=0;z!=dealershipList.length;z++){
            if(dealershipList[z].uuid == gVehicle[i].dealerId){
                html += '<p class="dealership">' + dealershipList[z].name + '</p>';
            }
        }
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
    gVehicle = [];
    for(var x=0;x!=arr.length;x++){
        if($('#MakeSearch').val()!=""){
            if(arr[x].make == $('#MakeSearch').val()){
                if($('#VehicleTypeSearch').val()!= ""){
                    if(arr[x].vehicleType == $('#VehicleTypeSearch').val()){
                        gVehicle.push(arr[x]);
                    }
                }else{
                    gVehicle.push(arr[x]);
                }
            }
        }else{
            
            if($('#VehicleTypeSearch').val()!= ""){
                if(arr[x].vehicleType == $('#VehicleTypeSearch').val()){
                    gVehicle.push(arr[x]);
                }
            }else{
                gVehicle.push(arr[x]);
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
    
    console.log(gVehicle)
    populateVehicle(gVehicle);
}