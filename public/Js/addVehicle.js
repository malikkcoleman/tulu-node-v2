var year = "";
var make = "";
var model = "";
var trim = "";
var modelNumber = "";
var packageCode = "";
var driveType = "";
var vehicleType = "";
var bodyType = "";
var bodySubtype = "";
var doors = "";
var bedLength = "";
var wheelBase = "";
var msrp = "";
var invoicePrice = "";
var engineDescription = "";
var blockType = "";
var cylinders = "";
var displacement = "";
var fuelType = "";
var transmissionName = "";
var optionalEquipmentCodes = "";
var installedEquipmentDescriptions = "";
var interiorDescription = "";
var interiorColourCode = "";
var exteriorDescription = "";
var exteriorColourCode = "";
var engineName = "";
var engineID = "";
var engineBrand = "";
var engineIceMaxHp = "";
var engineIceMaxTorque = "";
var engineMaxPayLoad = "";
var maxTowingCapacity = "";
var grossWeight = "";
var fuelTankCapacity = "";

window.onload = function () {
    year =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.year;
    make =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.make;
    model =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.model;
    trim =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.trim;
    modelNumber =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.model_number;
    driveType =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.drive_type;
    vehicleType =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.vehicle_type;
    bodyType =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.body_type;
    bodySubtype =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.body_subtype;
    doors =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.basic_data.doors;
    msrp =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.pricing.msrp;
    engineName =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].name;
    engineFuelType =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].fuel_type;
    engineID =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].engine_id;
    engineBrand =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].brand;
    engineIceMaxHp =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].ice_max_hp;
    engineIceMaxTorque =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].ice_max_torque;
    engineMaxPayLoad =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.engines[0].max_payload;
    // transmissionName =
    //   infoData.query_responses.NodeJS_Sample.us_market_data
    //     .common_us_data.transmissions[0].name;
    /*       maxTowingCapacity =
      infoData.query_responses.NodeJS_Sample.us_market_data
        .common_us_data.standard_specifications[1].specification_values[5]
        .specification_value; */
    grossWeight =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.standard_specifications[1].specification_values[0].specification_value;
    fuelTankCapacity =infoData.query_responses.NodeJS_Sample.us_market_data.common_us_data.standard_specifications[1].specification_values[2].specification_value;
    
    $('#vin').val(vin)
    $('#year').val(year);
    $('#make').val(make);
    $('#model').val(model);
    $('#trim').val(trim);
    $('#modelNumber').val(modelNumber);
    $('#driveType').val(driveType);
    $('#vehicleType').val(vehicleType);
    $('#doors').val(doors);
    $('#msrp').val(msrp);
    $('#engineName').val(engineName);
    $('#engineID').val(engineID);
    $('#iceMaxHp').val(engineIceMaxHp);
    $('#iceMaxTorque').val(engineIceMaxTorque);
    $('#maxPayLoad').val(engineMaxPayLoad);
    $('#fuelType').val(engineFuelType);
    $('#transmissionName').val(transmissionName);
    $('#baseTowingCapacity').val(maxTowingCapacity);
    $('#grossWeight').val(grossWeight);
    $('#fuelTankCapacity').val(fuelTankCapacity);

    console.log(user)
    if(user.role == "dealeradmin"||user.role == "dealeruser"){
        $('#dealerId').val(user.dealerId);
    }

    verifyVehicle();
}

function verifyVehicle(){
    $('.popUp').empty();
    var html="";
    html+='<h2>Is this the correct vehicle?</h2>';
    html+='<h1>'+year+' '+make+' '+model+'</h1>';
    html+='<button class="verifyBtn" onclick="hidePopUp()" type="button">Yes</button>';
    html+='<button class="verifyBtn" onclick="goToVindecoder()" type="button">Try again</button>';
    $('.popUp').append(html);
}

function goToVindecoder(){
    location.replace("/vindecoder");
}

function hidePopUp(){
    $('.popUp').empty();
    document.querySelector('.popUp').style="display:none;";
}


var page = 1;
function goNext(){
    if(page==1){
        document.querySelector('.pageOne').style = "display:none;";
        document.querySelector('.pageTwo').style = "display:flex;";
        document.querySelector('.backBtn').style = "display:flex;";
        page++;
    }else if(page==2){
        document.querySelector('.pageTwo').style = "display:none;";
        document.querySelector('.pageThree').style = "display:flex;";
        page++;
    }else if(page==3){
        document.querySelector('.pageThree').style = "display:none;";
        document.querySelector('.pageFour').style = "display:flex;";
        page++;
    }else if(page==4){
        document.querySelector('.pageFour').style = "display:none;";
        document.querySelector('.pageFive').style = "display:flex;";
    }else if(page==5){
        document.querySelector('.pageFive').style = "display:none;";
        document.querySelector('.pagesix').style = "display:flex;";
        document.querySelector('.nextBtn').style = "display:none;";
        document.querySelector('.saveBtn').style = "display:flex;";
    }
}

function goBack(){
    if(page==1){
        location.replace("/vindecoder");
    }
    else if(page==2){
        document.querySelector('.pageOne').style = "display:flex;";
        document.querySelector('.pageTwo').style = "display:none;";
        document.querySelector('.backBtn').style = "display:none;";
        page--;
    }else if(page==3){
        document.querySelector('.pageTwo').style = "display:flex;";
        document.querySelector('.pageThree').style = "display:none;";
        page--;
    }else if(page==4){
        document.querySelector('.pageThree').style = "display:flex;";
        document.querySelector('.pageFour').style = "display:none;";
        page--;
    }else if(page==5){
        document.querySelector('.pageFour').style = "display:flex;";
        document.querySelector('.pageFive').style = "display:none;";
        page--;
    }else if(page==6){
        document.querySelector('.pageFive').style = "display:flex;";
        document.querySelector('.pagesix').style = "display:none;";
        document.querySelector('.nextBtn').style = "display:flex;";
        document.querySelector('.saveBtn').style = "display:none;";
        page--;
    }
}


function calculate(){
    var min = $('#minPrice').val();
    var max = $('#maxPrice').val();
    var diff = max-min
    $('#refFee').val(diff * 0.25);
}

function sliderValue(){
    var percentage = $('#refPercentage').val()
    $('.percentage').empty();
    $('.percentage').append(percentage + "%");
}