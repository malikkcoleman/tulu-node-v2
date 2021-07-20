var id= "";
window.onload = function () {
    var hash;
    var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
    
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        if (hash[0] === "id") {
            id = hash[1];
        } 
    }
    console.log(id);
    populateVehicle(id);
}

function populateVehicle(id){
    for(x=0;x!=dealerList.length;x++){
        if(dealerList[x].uuid == vehicleList[id].targetId){
            $('#dealershipName').append(dealerList[x].name);
        }
    }


    $('.carPrice').html('$'+vehicleList[id].maxPrice);
    $('.carName').html(vehicleList[id].year+' '+vehicleList[id].make+' '+vehicleList[id].model);
    var html = "";

    html +='<li class="carInfo">';
    html +='    <p>Year</p>';
    html +='    <p class="year">'+vehicleList[id].year+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Make</p>';
    html +='    <p class="make">'+vehicleList[id].make+'</p>';
    html +='</li>   ';
    html +='<li class="carInfo">';
    html +='    <p>Model</p>';
    html +='    <p class="model">'+vehicleList[id].model+'</p>';
    html +='</li>   ';
    html +='<li class="carInfo">';
    html +='    <p>Color</p>';
    html +='    <p class="color">'+vehicleList[id].colorName+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Body Type</p>';
    html +='    <p class="bodyType">'+vehicleList[id].vehicleType+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Engine</p>';
    html +='    <p class="engine">'+vehicleList[id].engineName+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Drivetrain</p>';
    html +='    <p class="driveType">'+vehicleList[id].driveType+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Transmission</p>';
    html +='    <p class="transmission">'+vehicleList[id].transmissionName+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Fuel Type</p>';
    html +='    <p class="fuel">'+vehicleList[id].fuelType+'</p>';
    html +='</li>';
    html +='<li class="carInfo">';
    html +='    <p>Trim</p>';
    html +='    <p class="trim">'+vehicleList[id].trim+'</p>';
    html +='</li>';

    if(vehicleList[id].vin != ""){
        $('.vin').html(vehicleList[id].vin);
    }
    if(vehicleList[id].notes != ""){
        $('.notes').html(vehicleList[id].notes);
    }


    $("#carSpecs").empty();
    $("#carSpecs").append(html);
}

function populateVehicle123(vehicle) {


    $('.carPrice').html('$'+vehicle.maxPrice);
    
    
    
    var html = "";

    if(vehicle.year != ""){
        // $('.year').html(vehicle.year);
        //html +='';
        
    }
    if(vehicle.make != ""){
        // $('.make').html(vehicle.make);

        
    }
    if(vehicle.model != ""){
        // $('.model').html(vehicle.model);

    }
    if(vehicle.colorName != ""){
        // $('.color').html(vehicle.colorName);

    }
    if(vehicle.bodyType != ""){
        // $('.bodyType').html(vehicle.bodyType);

    }
    if(vehicle.engineName != ""){
        // $('.engine').html(vehicle.engineName);

    }
    if(vehicle.driveType != ""){
        // $('.driveType').html(vehicle.driveType);

    }
    if(vehicle.transmissionName != ""){
        // $('.transmission').html(vehicle.transmissionName);

    }
    if(vehicle.fuelType != ""){
        // $('.fuel').html(vehicle.fuelType);

    }
    if(vehicle.mileage != ""){
        // $('.mileage').html(vehicle.mileage+" kms");

    }
    if(vehicle.trim != ""){
        // $('.trim').html(vehicle.trim);

    }
    if(vehicle.vin != ""){
        // $('.vin').html(vehicle.vin);
    }
    if(vehicle.notes != ""){
        // $('.notes').html(vehicle.notes);
    }


    $("#carSpecs").empty();
    $("#carSpecs").append(html);
    

}