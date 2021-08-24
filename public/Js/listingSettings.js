var toggleSetting="off";

const listingSettings = (index) => {
    var html = "";
    html += '    <ul class="listingSettingsList">';
    html += '        <li class="settingsListItem" onClick="viewListing('+index+')">';
    html += '            <i class="far fa-clipboard"></i>';
    html += '            <p>';
    html += '                View Listing';
    html += '            </p>';
    html += '        </li>';
    html += '        <li class="settingsListItem" onclick="GetDeleteVehicle('+index+')">';
    html += '            <i class="far fa-trash-alt"></i>';
    html += '            <p>';
    html += '                Delete Listing';
    html += '            </p>';
    html += '        </li>';
    html += '        <li class="settingsListItem" onclick="editVehicle('+index+')">';
    html += '            <i class="far fa-edit"></i>';
    html += '            <p>';
    html += '                Edit Listing';
    html += '            </p>';
    html += '        </li>';
    html += '        <li class="settingsListItem">';
    html += '            <i class="far fa-check-circle"></i>';
    html += '            <p>';
    html += '                Mark Sold';
    html += '            </p>';
    html += '            <span>*Coming Soon*</span>';
    html += '        </li>';
    html += '        <li class="settingsListItem">';
    html += '            <i class="fas fa-chart-line"></i>';
    html += '            <p>';
    html += '                Boost Lisitng';
    html += '            </p>';
    html += '            <span>*Coming Soon*</span>';
    html += '        </li>';
    html += '        <li class="settingsListItem">';
    html += '            <i class="far fa-share-square"></i>';
    html += '            <p>';
    html += '                Share Listing';
    html += '            </p>';
    html += '            <span>*Coming Soon*</span>';
    html += '        </li>';
    html += '    </ul>';
    $("#ListingSettingsContainer").empty();
    $("#ListingSettingsContainer").append(html);
    
    const listingSettingsContainer = document.querySelector('.listingSettingsContainer');
    if(toggleSetting=="off"){
        listingSettingsContainer.style = "bottom:0vh; opacity:1;transition:0.5s ease-out;";
        toggleSetting="on";
    }else{
        listingSettingsContainer.style = "bottom:-100vh; opacity:0;transition:0.5s ease-in;";
        toggleSetting="off";
    }

    // When Click Outside the Filter Settings 
    var except = document.querySelector('.listingSettingsList');
    listingSettingsContainer.addEventListener("click", function () {
        listingSettingsContainer.style = "bottom:-100vh; opacity:0;transition:0.5s ease-in;";
        toggleSetting="off";
    }, false);
    except.addEventListener("click", function (ev) {
        ev.stopPropagation(); 
    }, false);

};

function editVehicle(i){
    location.replace("/vehicles/editVehicle/" + vehicleList[i].vin);
}

function viewListing(i){
    location.replace("/carview/"+ vehicleList[i].vin);
}

function GetDeleteVehicle(i){
    location.replace("/vehicles/deleteVehicles/"+vehicleList[i].vin)
}