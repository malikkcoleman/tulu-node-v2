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
    


    console.log(dealer)
    var html = ""
    for(var x=0;x!=dealer.length;x++){
        html+='<option value="'+dealer[x].uuid+'">'+dealer[x].name+'</option>';
    }
    $('#dealerId').append(html);

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
    location.replace("/SysAdminVinDecoder");
}

function hidePopUp(){
    $('.popUp').empty();
    document.querySelector('.popUp').style="display:none;";
}


function calculate(){
    var min = $('#minPrice').val();
    var max = $('#maxPrice').val();
    var diff = max-min
    var percentage = $('#refPercentage').val()
    $('#refFee').val(diff * percentage);
}

function sliderValue(){
    calculate()
    var percentage = $('#refPercentage').val()
    $('.percentage').empty();
    $('.percentage').append(percentage + "%");
}