var start = 0;
var limit = 4;
$.ajax({
    url: "/shop/" + start + "/" + limit,
    method: "GET",
    success: function(res){
      renderPosts(res);
      console.log('teoptspoeitsepo')
    }
  });
function getNext(){
  start = start + limit;
  $.ajax({
    url: "/shop/" + start + "/" + limit,
    method: "GET",
    success: function(res){
      renderPosts(res);
    }
  });
}
// function getPrevious(){
//   start = start - limit;
//   $.ajax({
//     url: "/get-post/" + start + "/" + limit,
//     method: "GET",
//     success: function(response){
//       renderPosts(response);
//     }
//   });
// }
var view
function renderPosts(resss){
  if (resss.vehicles.length > 0){
      console.log(resss)
    var html = "";
    resss.vehicles.forEach(function(data){
        if(view == 'small'){
            html+='<li class="vehicleListItemsSmallView" id="vehicleHolder">';
            var text = '';
            html+='    <img src="/image/'+ data.vin +'" class="carImage" alt="car-image"/>';
            html+='    <div class="carDetails">';
            html+='        <h2 class="carName">' + data.year + ' ' + data.make + ' ' + data.model + '</h2>';
            html+='        <p class="carPrice">$' + data.maxPrice + '</p>';
            html += '       <p class="refFee">Referral Fee : $'+vehicleList[i].refFee+'</p>'; 
            if(data.mileage != null){
                html += '       <p class="carMileage">'+data.mileage +'  Kms</p>';
            }
            html+='        <a href="carview/'+ data.vin +'"><button class="moreInfo">View Vehicle</button></a>';
            html += '       <p class="dealership">' + data.dealer.name + '</p>';
            html+='    </div>';
            html+='</li>';
        }else{
            html += '<li class="vehicleListItems" id="vehicleHolder">';
            var text = '';
            html += '    <img src="/image/'+ data.vin +'" class="carImage" alt="car-image">';
            html += '   <div class="carDetails">';
            html += '       <h2 class="carName">' + data.year + ' ' + data.make + ' ' + data.model + '</h2>';
            html += '       <p class="carPrice">$'+data.maxPrice + '</p>';
            html += '       <p class="refFee">Referral Fee : $'+vehicleList[i].refFee+'</p>'; 
            if(data.mileage != null){
                html += '       <p class="carMileage">'+data.mileage +'  Kms</p>';
            }
            html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
            html += '           <p class="carTrim">' + data.trim + '</p>';
            html += '           <p class="carTransmission">' + data.transmissionName + '</p>';
            html += '       </div>';
            html += '       <div class="moreInfoContainer">';
            html += '              <a href="carview/'+ data.vin +'"><button class="moreInfo">View Vehicle</button></a>';
            html += '       </div>';
            html += '       <p class="dealership">' + data.dealer.name + '</p>';
            html += '       <p class="views"><i class="far fa-eye"></i> '+data.views+' views</p>';
            html += '   </div>';
            html += '</li>';
        }
        
    })
    $("#loading").remove()
    $("#Vehicles").append(html)
  }
}

function smallView(){
    view = 'small'
    getNext()
}

function bigView(){
    view = 'big'
    getNext()
}

$(window).scroll(function(){
  if($(window).scrollTop() >= $(document).height() - $(window).height() - 
  30
  ){
    getNext();
  }
})



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
        if(user.role = "tulu"){
            html += '       <p class="refFee">Referral Fee : $'+vehicleList[i].refFee+'</p>'; 
        }
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
        if(user.role = "tulu"){
            html += '       <p class="refFee">Referral Fee : $'+vehicleList[i].refFee+'</p>'; 
        }
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
        if(user.role = "tulu"){
            html += '       <p class="refFee">Referral Fee : $'+vehicleList[i].refFee+'</p>'; 
        }
        html += '       <p class="carMileage">'+vehicleList[i].mileage +' Kms</p>';
        html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
        html += '           <p class="carTransmission">' + vehicleList[i].transmissionName + '</p>';
        html += '       </div>';
        html += '       <div class="moreInfoContainer">';
        html += '               <a href="carview/'+ vehicleList[i].vin +'"><button class="moreInfo">View Vehicle</button></a>';
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
            }else{
                vehicleList.push(vehicleListDefault[x]);
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