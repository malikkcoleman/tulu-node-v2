var gUserTest = null;
    var gDealerId = '';
    var gVehicleTest = null;
    var currentVehicle = null;
    var referralFeeValue = 0;
    window.onload = function () {
        GetCurrentUser();
        //alert(gDealerId);
    }

    function ExitAndSave() {
        //addVehicleStepSeven
        $('#addVehicleStepSeven').style = "opacity:0; transition:0.5s;";
        setTimeout(function () {
            $('#addVehicleStepSeven').style = "display:none;";
            StartSaving();
        }, 1000);

    }

    function DeleteLink(index) {
                TestGetVehicle();
    }

    function SaveLink(vl) {
    }

    GetCurrentUser();
    function GetCurrentUser() {
    }



    async function NewVehicle(vin, dealerId) {
    }

    function MakeNewVehicle() {
        play();
        NewVehicle(vin, dealerId).then(function (vehicle) {
            TestGetVehicle();
            document.querySelector('.loading').style = "display:none;";
        });
    }

    function TestGetVehicle() {
        GetVehicle(vin, dealerId).then(function (vehicle) {
            gVehicleTest = vehicle;
            DisplayVehicle(vehicle);
            AddVehicleStep();
            currentVehicle = vehicle;
        });
    }

    async function GetVehicle(vin, dealerId) {
    }

    function rangeSlider() {
        const value = document.querySelector("#rangeSlider").value * 0.01;
        console.log(value);

        if(value == 0.35000000000000003){
            value = 0.35;
            console.log(value);
        }
        $(".refFeeValue").empty();
        $(".refFeeValue").append("Referral Fee Percentage : " + value);
    }

    var vYear = "";
    var vMake = "";
    var vModel = "";
    var vColorName = "";
    var vBodyType = "";
    var vEngineName = "";
    var vDriveType = "";
    var vTransmissionName = "";
    var vFuelType = "";
    var vTrim = "";

    function DisplayVehicle(vehicle) {
        var html="";

        html += '<h3 class="initialInfo">' + vehicle.year + '&nbsp' + vehicle.make + '&nbsp' + vehicle.model + '&nbsp' + vehicle.trim + '</h3>';
        html += '<button type="button" class="nextBtn" onclick="AddVehicleStep()">CONTINUE WITH THIS VEHICLE?</button>';
        html += '<button type="button" class="nextBtn" onclick="goToStepOne()">ENTER ANOTHER VIN</button>';

        $("#addVehicleStepTwo").empty();
        $("#addVehicleStepTwo").append(html);

        html = "";

        html += '<section class="vinInfo">';
        html += '    <ul class="vinInfoList">';
        if(vehicle.year != ""){
            var infoContainer = "yearInfo";
            html += '        <li class="vinInfoListItems" id="yearInfo">';
            html += '            <p>Year</p>';
            html += '            <p>' + vehicle.year + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vYear = vehicle.year;
        }
        if(vehicle.make != ""){
            var infoContainer = "makeInfo";
            html += '        <li class="vinInfoListItems" id="makeInfo">';
            html += '            <p>Make</p>';
            html += '            <p>' + vehicle.make + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vMake = vehicle.make;
        }
        if(vehicle.model != ""){
            var infoContainer = "modelInfo";
            html += '        <li class="vinInfoListItems" id="modelInfo">';
            html += '            <p>Model</p>';
            html += '            <p>' + vehicle.model + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vModel = vehicle.model;
        }
        if(vehicle.colorName != ""){
            var infoContainer = "colorNameInfo";
            html += '        <li class="vinInfoListItems" id="colorNameInfo">';
            html += '            <p>Color</p>';
            html += '            <p>' + vehicle.colorName + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vColorName = vehicle.colorName;
        }
        if(vehicle.bodyType != ""){
            var infoContainer = "bodyTypeInfo";
            html += '        <li class="vinInfoListItems" id="bodyTypeInfo">';
            html += '            <p>Body Type</p>';
            html += '            <p>' + vehicle.bodyType + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vBodyType = vehicle.bodyType;
        }
        if(vehicle.engineName != ""){
            var infoContainer = "engineNameInfo";
            html += '        <li class="vinInfoListItems" id="engineNameInfo">';
            html += '            <p>Engine</p>';
            html += '            <p>' + vehicle.engineName + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vEngineName = vehicle.engineName;
        }
        if(vehicle.driveType != ""){
            var infoContainer = "driveTypeInfo";
            html += '        <li class="vinInfoListItems" id="driveTypeInfo">';
            html += '            <p>DriveTrain</p>';
            html += '            <p>' + vehicle.driveType + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vDriveType = vehicle.driveType;
        }
        if(vehicle.transmissionName != ""){
            var infoContainer = "transmissionNameInfo";
            html += '        <li class="vinInfoListItems" id="transmissionNameInfo">';
            html += '            <p>Transmission</p>';
            html += '            <p>' + vehicle.transmissionName + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vTransmissionName = vehicle.transmissionName;
        }
        if(vehicle.fuelType != ""){
            var infoContainer = "fuelTypeInfo";
            html += '        <li class="vinInfoListItems" id="fuelTypeInfo">';
            html += '            <p>Fuel Type</p>';
            html += '            <p>' + vehicle.fuelType + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vFuelType = vehicle.fuelType;
        }
        if(vehicle.trim != ""){
            var infoContainer = "trimInfo";
            html += '        <li class="vinInfoListItems" id="trimInfo">';
            html += '            <p>Trim</p>';
            html += '            <p>' + vehicle.trim + '</p>';
            html += '            <i class="fas fa-times" onclick="deleteInfo('+infoContainer+')"></i>';
            html += '        </li>';
            vTrim = vehicle.trim;
        }
        html += '    </ul>';
        html += '    <button type="button" class="nextBtn" onclick="AddVehicleStep()">NEXT</button>';
        html += '</section>';

        $("#addVehicleStepThree").empty();
        $("#addVehicleStepThree").append(html);
    }

    function deleteInfo(info){
        document.querySelector('#'+info.id).style = "display:none;";
    }

    var referralOption = 1;

    function manualOption() {
        var html = "";
        if (referralOption == 1) {
            html += '<label for="referralFee">Enter Referral Fee:</label>';
            html += '<div class="inputContainer">';
            html += '    <i class="fas fa-dollar-sign"></i>';
            html += '    <input type="number" name="referralFee" class="referralFee" id="referralFee">';
            html += '</div>';
            referralOption++;
            $(".referralFeeContainer").empty();
            $(".referralFeeContainer").append(html);
            const referralFee = document.querySelector('#referralFee');
            referralFee.style = "display:Flex;opacity:1;";
        } else {
            var minPrice = Number($("#minPrice").val());
            var maxPrice = Number($("#maxPrice").val());
            var refPercent = document.querySelector("#rangeSlider").value * 0.01;
            var referralFee = (maxPrice - minPrice) * refPercent;
            if (referralFee < 1) {
                referralFee = 0;
                html = html + '             <h1 class="calculatedReferralFee">$ ' + referralFee + '</h1>';
                html = html + '             <h3 class="Calculated">Automated Referral Fee</h3>';
            } else {
                html = html + '             <h1 class="calculatedReferralFee">$ ' + referralFee + '</h1>';
                html = html + '             <h3 class="Calculated">Automated Referral Fee</h3>';
            }
            referralOption = 1;
            $(".referralFeeContainer").empty();
            $(".referralFeeContainer").append(html);
        }
    }


    function resetField(){
        $('#vinNum').empty();
        $('#color').empty();
        $('#mileage').empty();
        $('#dpImageContainer').empty();
        $('#thumbnailDpContainer').empty();
        $('#carDescription').empty();
        $('#imageContainer').empty();
        $('#thumbnailContainer').empty();
        $('#maxPrice').empty();
        $('#minPrice').empty();
        // $().empty();
        // $().empty();
    }

    function verifyPrice() {
        var minPrice = Number($("#minPrice").val());
        var maxPrice = Number($("#maxPrice").val());
        if (minPrice == maxPrice) {
            console.log("Cant be the same")
            $(".errorMessage").html("Max price and min price cannot be the same.");
        } else if (maxPrice < minPrice) {
            console.log("min should be lower than max");
            $(".errorMessage").html("Max price is lower than min price.");
        } else if (maxPrice == "" || maxPrice == null || maxPrice == 0) {
            console.log("Max price Empty");
            $(".errorMessage").html("Make sure all input fields are populated");
        } else if (minPrice == "" || minPrice == null || minPrice == 0) {
            console.log("Min price Empty");
            $(".errorMessage").html("Make sure all input fields are populated");
        } else {
            $(".errorMessage").empty();
            $("#submitPrice").prop('disabled', false);
            document.querySelector("#submitPrice").style = "opacity:1 !important;"
        }
    }


    async function SaveVehicle(vehicle) {

    }

    function StartSaving() {
        gVehicleTest = currentVehicle;
        gVehicleTest.year = vYear;
        gVehicleTest.make = vMake;
        gVehicleTest.model = vModel;
        gVehicleTest.colorName = vColorName;
        gVehicleTest.bodyType = vBodyType;
        gVehicleTest.engineName = vEngineName;
        gVehicleTest.driveType = vDriveType;
        gVehicleTest.transmissionName = vTransmissionName;
        gVehicleTest.fuelType = vFuelType;
        gVehicleTest.trim = vTrim;
        gVehicleTest.colorName = $("#color").val();
        gVehicleTest.mileage = $("#mileage").val();
        gVehicleTest.notes = $("#carDescription").val();
        gVehicleTest.maxPrice  = $("#maxPrice").val();
        gVehicleTest.minPrice  = $("#minPrice").val();
        gVehicleTest.priceType = "retail";


        if(referralOption ==2){
            gVehicleTest.refferalFee = $('#referralFee').val();
        }else{
            var minPrice = Number($("#minPrice").val());
            var maxPrice = Number($("#maxPrice").val());
            var refPercent = document.querySelector("#rangeSlider").value * 0.01;
            var refferalFee = (maxPrice - minPrice) * refPercent;
            if (refferalFee < 1) {
                gVehicleTest.refferalFee = 0;
            } else {
                gVehicleTest.refferalFee = (maxPrice - minPrice) * refPercent;
            }
            
        }

        console.log(gVehicleTest.referralFee);

        SaveVehicle(gVehicleTest).then(function (result) {
            gVehicleTest = result;
            //DisplayVehicle(result);
            console.log(result);
            SearchVehicles();
            AfterReferralFee();
        });
    }

    SearchVehicles()
    function SearchVehicles() {
        var obj = new Object();
        // obj.dealerId = gDealerId;
        obj.model = $("#ModelSearch").val();
        obj.make = $("#MakeSearch").val();
        obj.yearMin = parseInt($("#YearMinSearch").val());
        obj.yearMax = parseInt($("#YearMaxSearch").val());
        obj.vehicleType = $("#VehicleTypeSearch").val();
        obj.isSold = false;
        obj.priceMin = parseFloat($("#PriceMinSearch").val());
        obj.priceMax = parseFloat($("#PriceMaxSearch").val());
        obj.priceType = $("#PriceTypeSearch option:selected").val();
        obj.city = '';
        obj.province = '';
        obj.isSold = '';
        if ($("#IsSoldSelect option:selected").val() === "1") { obj.isSold = 'true'; }
        ListVehicles(obj).then(function (list) {
            console.log(list);
            LoadVehicles(list)
            GetCurrentUser();
        });
    }

    async function ListVehicles(obj) {
    }

    function LoadVehicles(vehicles) {
        var html = '';
        var carCountValue = 0;
        for (var i = 0; i != vehicles.length; i++) {
            if(vehicles[i].dealerId == gDealerId){
                if(vehicles[i].priceType == "retail"){
                    carCountValue++;
                    html = html + '<li class="activeListingListItem" id="' + vehicles[i].vin + '" >';
                    var text = '';
                    if (vehicles[i].links !== undefined) {
                        console.log("1");
                        if (vehicles[i].links[0] !== undefined) {
                            console.log("2");
                                for(var v=0; v != vehicles[i].links.length; v++){
                                    console.log("*");
                                    if(vehicles[i].links[v].type == "Main Photo"){
                                        text = vehicles[i].links[v].url;
                                        console.log(text);
                                    }
                                }
                        }
                    }
                    html = html + '    <img src="' + text + '" alt="" class="listingImage" onclick="ViewVehicle(\'' + vehicles[i].vin + '\',\'' + vehicles[i].dealerId + '\');">';
                    html = html + '    <div class="listingInfo" onclick="ViewVehicle(\'' + vehicles[i].vin + '\',\'' + vehicles[i].dealerId + '\');">';
                    html = html + '        <h4 class="listingName">' + vehicles[i].year + ' ' + vehicles[i].make + ' ' + vehicles[i].model + '</h4>';
                    html = html + '        <p class="listingPrice">$' + vehicles[i].maxPrice + '</p>';
                    html = html + '        <p class="listingReferralFee">Referral Fee: $' + vehicles[i].refferalFee + '</p>';
                    html = html + '        <p  class="listingViews">4420 views</p>';
                    html = html + '    </div>';
                    html = html + '    <i class="fas fa-ellipsis-h" class="listingsettingBtn" onclick="listingSettings('+i+')"></i>';
                    html = html + '</li>';
                }
            }
        }

        $(".userActiveListingCount span").empty();
        $(".userActiveListingCount span").append(carCountValue);

        $(".userName").empty();
        $(".userName").append(gUserTest.firstName);

        $("#ActiveListing").empty();
        $("#ActiveListing").append(html);
    }


    function carView(index) {
        console.log(listVehicles[index].vin);
        window.location = "/Home/CarView?vin=" + listVehicles[index].vin + "&dealerId=" + listVehicles[index].dealerId;
    }


    function GetViewListing(i) {
        var obj = new Object();
        // obj.dealerId = gDealerId;
        obj.model = $("#ModelSearch").val();
        obj.make = $("#MakeSearch").val();
        obj.yearMin = parseInt($("#YearMinSearch").val());
        obj.yearMax = parseInt($("#YearMaxSearch").val());
        obj.vehicleType = $("#VehicleTypeSearch").val();
        obj.isSold = false;
        obj.priceMin = parseFloat($("#PriceMinSearch").val());
        obj.priceMax = parseFloat($("#PriceMaxSearch").val());
        obj.priceType = $("#PriceTypeSearch option:selected").val();
        obj.city = '';
        obj.province = '';
        obj.isSold = '';
        if ($("#IsSoldSelect option:selected").val() === "1") { obj.isSold = 'true'; }
        var index = i;
        console.log(index);
        ListVehicles(obj).then(function (list) {
            console.log(list);
            ViewVehicle(list,index);
        })
    }

    function ViewVehicle(vehicles,index){
        window.location = "/Home/CarView?vin=" + vehicles[index].vin + "&dealerId=" + vehicles[index].dealerId;
    }

    function GetDeleteVehicle(i) {
        var obj = new Object();
        // obj.dealerId = gDealerId;
        obj.model = $("#ModelSearch").val();
        obj.make = $("#MakeSearch").val();
        obj.yearMin = parseInt($("#YearMinSearch").val());
        obj.yearMax = parseInt($("#YearMaxSearch").val());
        obj.vehicleType = $("#VehicleTypeSearch").val();
        obj.isSold = false;
        obj.priceMin = parseFloat($("#PriceMinSearch").val());
        obj.priceMax = parseFloat($("#PriceMaxSearch").val());
        obj.priceType = $("#PriceTypeSearch option:selected").val();
        obj.city = '';
        obj.province = '';
        obj.isSold = '';
        if ($("#IsSoldSelect option:selected").val() === "1") { obj.isSold = 'true'; }
        var index = i;
        console.log(index);
        ListVehicles(obj).then(function (list) {
            console.log(list);
            console.log(list[i]);
            console.log(index);
            LoadVehicles(list,index);
            var selectedVin = list[i].vin;
            var dealerId = list[i].dealerId;
            DeleteVehicle(selectedVin,dealerId);
        });
    }

    function DeleteVehicle(vin, dealerId){
    var obj = new Object();
    obj.vin=vin;
    obj.dealerId=dealerId;
        $.ajax({
            type: "PUT",
            url: "/Vehicle/Delete",
            data: obj,
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (results) {
                GetCurrentUser();
                location.reload();
            },
            error: function (results) {
                alert("Error");
            },
        });
    }


    function GetEditVehicle(i) {
        var obj = new Object();
        // obj.dealerId = gDealerId;
        obj.model = $("#ModelSearch").val();
        obj.make = $("#MakeSearch").val();
        obj.yearMin = parseInt($("#YearMinSearch").val());
        obj.yearMax = parseInt($("#YearMaxSearch").val());
        obj.vehicleType = $("#VehicleTypeSearch").val();
        obj.isSold = false;
        obj.priceMin = parseFloat($("#PriceMinSearch").val());
        obj.priceMax = parseFloat($("#PriceMaxSearch").val());
        obj.priceType = $("#PriceTypeSearch option:selected").val();
        obj.city = '';
        obj.province = '';
        obj.isSold = '';
        if ($("#IsSoldSelect option:selected").val() === "1") { obj.isSold = 'true'; }
        var index = i;
        console.log(index);
        document.querySelector(".editVehicleContainer").style = "display:flex !important;";
        ListVehicles(obj).then(function (list) {
            console.log(list);
            console.log(index);
            console.log(list[i].vin);
            LoadVehicles(list,index);
            currentVehicle = list[i];
            console.log(currentVehicle);
            $(".editVin").val(currentVehicle.vin);
            $(".editMileage").val(currentVehicle.mileage);
            $(".editNotes").val(currentVehicle.notes);
            $(".editMinPrice").val(currentVehicle.minPrice);
            $(".editMaxPrice").val(currentVehicle.maxPrice);

        });
    }

    function GetEditPriceVehicle(i) {
        var obj = new Object();
        // obj.dealerId = gDealerId;
        obj.model = $("#ModelSearch").val();
        obj.make = $("#MakeSearch").val();
        obj.yearMin = parseInt($("#YearMinSearch").val());
        obj.yearMax = parseInt($("#YearMaxSearch").val());
        obj.vehicleType = $("#VehicleTypeSearch").val();
        obj.isSold = false;
        obj.priceMin = parseFloat($("#PriceMinSearch").val());
        obj.priceMax = parseFloat($("#PriceMaxSearch").val());
        obj.priceType = $("#PriceTypeSearch option:selected").val();
        obj.city = '';
        obj.province = '';
        obj.isSold = '';
        if ($("#IsSoldSelect option:selected").val() === "1") { obj.isSold = 'true'; }
        var index = i;
        console.log(index);
        document.querySelector(".editPriceVehicleContainer").style = "display:flex !important;";
        ListVehicles(obj).then(function (list) {
            console.log(list);
            console.log(index);
            console.log(list[i].vin);
            LoadVehicles(list,index);
            currentVehicle = list[i];
            console.log(currentVehicle);
            $(".editMinPrice").val(currentVehicle.minPrice);
            $(".editMaxPrice").val(currentVehicle.maxPrice);

        });
    }

    function SaveEdit() {
        gVehicleTest = currentVehicle;
        gVehicleTest.vin = $(".editVin").val();
        gVehicleTest.mileage = $(".editMileage").val();
        gVehicleTest.notes = $(".editNotes").val();
        // gVehicleTest.priceMin = $(".editMinPrice").val();
        // gVehicleTest.priceMax = $(".editMaxPrice").val();


        document.querySelector(".editVehicleContainer").style = "display:none !important;";
        $(".editVehicleContainer").style = "display:none;";
        SaveVehicle(gVehicleTest).then(function (result) {
            gVehicleTest = result;
            //DisplayVehicle(result);
            console.log(result);
            SearchVehicles();

            location.reload();
        });
    }

    function SaveEditPricing() {
        gVehicleTest = currentVehicle;
        // gVehicleTest.vin = $(".editVin").val();
        // gVehicleTest.mileage = $(".editMileage").val();
        // gVehicleTest.notes = $(".editNotes").val();
        gVehicleTest.priceMin = $(".editMinPrice").val();
        gVehicleTest.priceMax = $(".editMaxPrice").val();


        document.querySelector(".editPriceVehicleContainer").style = "display:none !important;";
        $(".editPriceVehicleContainer").style = "display:none;";
        SaveVehicle(gVehicleTest).then(function (result) {
            gVehicleTest = result;
            //DisplayVehicle(result);
            console.log(result);
            SearchVehicles();

            location.reload();
        });
    }



function loadScanner() {

}

function barCodeScanner() {
    // @* var w = window.innerWidth-100; *@
    loadCamera();
    // @* var w = window.innerWidth; *@
    // @* document.querySelector("video").style = "width:"+w+"px !important;"; *@
    document.querySelector("#barCodeScannerContainer").style = "display:flex;";

}

function showEnterVin() {

}

function capture() {

}