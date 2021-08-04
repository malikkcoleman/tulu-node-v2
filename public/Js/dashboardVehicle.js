
function populateVehicles(){
    var html = "";
    for(var x=0;x!=vehicleList.length;x++){
        html+='<li class="activeListingListItem" id="' + vehicleList[x].vin + '" >';
        html+='    <img src="" alt="" class="listingImage">';
        html+='    <div class="listingInfo" onclick="ViewVehicle(\'' + vehicleList[x].vin + '\',\'' + vehicleList[x].dealerId + '\');">';
        html+='        <h4 class="listingName">' + vehicleList[x].year + ' ' + vehicleList[x].make + ' ' + vehicleList[x].model + '</h4>';
        html+='        <p class="listingPrice">$' + vehicleList[x].maxPrice + '</p>';
        html+='        <p class="listingReferralFee">Referral Fee: $' + vehicleList[x].refferalFee + '</p>';
        html+='        <p  class="listingViews">4420 views</p>';
        html+='    </div>';
        html+='    <i class="fas fa-ellipsis-h" class="listingsettingBtn" onclick="listingSettings('+x+')"></i>';
        html+='</li>';
    }
    document.querySelector('.loading').style = "display:none;"
    $('.activeListingList').empty();
    $('.activeListingList').append(html);
}

function AddVehicle(){
    location.replace("/testaddvehicle");
}