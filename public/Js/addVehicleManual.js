window.onload = function () {
    $('#dealerId').val(user.dealerId);
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