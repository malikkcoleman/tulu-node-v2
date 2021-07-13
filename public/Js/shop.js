var gUser = "";
    var gDealerId = $("#GlobalDealerId").val();
    var gTuluId = $("#GlobalTuluId").val();
    var vin = null;
    var listVehicles = null;

    SearchVehicles();
    
    //this is for the Gif loading thing, dont touch
    // loading();
    // play();
    ////////////////////////////

    //GetCurrentUser();
    function SearchVehicles() {
        var obj = new Object();
        obj.dealerId = gDealerId;
        obj.model = $("#ModelSearch").val();
        obj.make = $("#MakeSearch option:selected").val();
        obj.yearMin = parseInt($("#YearMinSearch").val());
        obj.yearMax = parseInt($("#YearMaxSearch").val());
        obj.vehicleType = $("#VehicleTypeSearch option:selected").val();
        obj.isSold = false;
        obj.priceMin = parseFloat($("#PriceMinSearch").val());
        obj.priceMax = parseFloat($("#PriceMaxSearch").val());
        obj.priceType = $("#PriceTypeSearch option:selected").val();
        obj.isSold = '';
        if ($("#IsSoldSelect option:selected").val() === "1") { obj.isSold = 'true'; }
        ListVehicles(obj).then(function (list) {
            console.log(list)
            listVehicles = list;
            populateVehicle(list);
        });

        var filterBreadcrumbs = "";
        if(obj.make != ""){
            filterBreadcrumbs += "Make ";
        }   
        if(obj.vehicleType != ""){
            filterBreadcrumbs += "VehicleType ";
        }   
        if(obj.yearMax != 0 || obj.yearMin != 0){
            filterBreadcrumbs += "Year ";
        }   
        if(obj.priceMax != 0 || obj.priceMin != 0){
            filterBreadcrumbs += "Price ";
        }   

        $('.filterBreadCrumbs span').empty();
        $('.filterBreadCrumbs span').append(filterBreadcrumbs);

    }

    function sort(sortType){
        if(sortType == "default"){
            const eitherSort = (listVehicles = []) => {
                listVehicles.sort(function(a, b){
                    if(a.model < b.model) { return -1; }
                    if(a.model > b.model) { return 1; }
                    return 0;
                })
            };
            eitherSort(listVehicles);
            console.log(listVehicles);
            rearrange(listVehicles);

            $('.sortBreadCrumbs span').empty();
            $('.sortBreadCrumbs span').append("Default");

            
        }else if(sortType == "lowToHigh"){
            const eitherSort = (listVehicles = []) => {
                const sorter = (a, b) => {
                    return +a.maxPrice - +b.maxPrice;
                };
                listVehicles.sort(sorter);
            };
            eitherSort(listVehicles);
            console.log(listVehicles);
            rearrange(listVehicles);

            $('.sortBreadCrumbs span').empty();
            $('.sortBreadCrumbs span').append("Low To High");

        }else if(sortType == "highToLow"){
            const eitherSort = (listVehicles = []) => {
                const sorter = (a, b) => {
                    return +a.maxPrice - +b.maxPrice;
                };
                listVehicles.reverse(sorter);
            };
            eitherSort(listVehicles);
            console.log(listVehicles);
            rearrange(listVehicles);

            $('.sortBreadCrumbs span').empty();
            $('.sortBreadCrumbs span').append("highToLow");

        }else if(sortType == "kilometers"){
            const eitherSort = (listVehicles = []) => {
                const sorter = (a, b) => {
                    return +a.mileage - +b.mileage;
                };
                listVehicles.sort(sorter);
            };
            eitherSort(listVehicles);
            console.log(listVehicles);
            rearrange(listVehicles);

            $('.sortBreadCrumbs span').empty();
            $('.sortBreadCrumbs span').append("kilometers");
        }
        
        const sortMenu = document.querySelector('.sortSettings');
        sortMenu.style = "width:0vw;overflow:hidden;right:-430px;transition:0.5s ease-out;";
        toggleSort="off";
    }

    function rearrange(listVehicles){
        if(toggleDisplay == "off"){
            bigView();
            document.querySelector('.vehicleList').style="align-items:center;";
        }else{
            smallView();
            document.querySelector('.vehicleList').style="align-items:unset;";
        }
    }
    
    function populateVehicle(vehicles) {
        var html = "";
        for (var i = 0; i != vehicles.length; i++) {
            if(vehicles[i].priceType == "retail"){
                html += '<li class="vehicleListItems">';
                var text = '';
                if (vehicles[i].links !== undefined) {
                    if (vehicles[i].links[0] !== undefined) {
                        for(var v=0; v != vehicles[i].links.length; v++){
                            if(vehicles[i].links[v].type == "Main Photo"){
                                text = vehicles[i].links[v].url;
                            }
                        }
                    }
                }
                html += '    <img src="' + text + '" class="carImage" alt="car-image">';
                html += '   <div class="carDetails">';
                html += '       <h2 class="carName">' + vehicles[i].year + ' ' + vehicles[i].make + ' ' + vehicles[i].model + '</h2>';
                html += '       <p class="carPrice">$'+formatNumber(vehicles[i].maxPrice) + '</p>';


                html += '       <p class="carMileage">' + vehicles[i].mileage + ' Kms</p>';
                html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
                html += '           <p class="carTrim">' + vehicles[i].trim + '</p>';
                html += '           <p class="carTransmission">' + vehicles[i].transmissionName + '</p>';
                html += '       </div>';
                html += '       <div class="moreInfoContainer">';
                
                html += '               <button class="moreInfo" onclick="carView(' + i + ')">View Vehicle</button>';
                html += '       </div>';
                
                //THIS IS FOR THE BUY NOW
                // if(vehicles[i].buyNow == true){
                //     html+='    <button class="buyNowBtn">BUY NOW!</button>';
                // }
                html += '   </div>';
                
                html += '</li>';
            }
        }
        $("#Vehicles").empty();
        $("#Vehicles").append(html);
    }
    
    function smallView(){
        var html = "";
        for (var i = 0; i != listVehicles.length; i++) {
            if(listVehicles[i].priceType == "retail"){
                html+='<li class="vehicleListItemsSmallView">';
                var text = '';
                if (listVehicles[i].links !== undefined) {
                    if (listVehicles[i].links[0] !== undefined) {
                        for(var v=0; v != listVehicles[i].links.length; v++){
                            if(listVehicles[i].links[v].type == "Main Photo"){
                                text = listVehicles[i].links[v].url;
                            }
                        }
                    }
                }    
                html+='    <img src="' + text + '" class="carImage" alt="car-image"/>';
                // html+='    <div style="height:100px;width:100px;background:url('+ text +');background-position:center;background-size:cover;background-repeat:no-repeat;" class="carImage"></div>';
                html+='    <div class="carDetails">';
                html+='        <h2 class="carName">' + listVehicles[i].year + ' ' + listVehicles[i].make + ' ' + listVehicles[i].model + '</h2>';
                html+='        <p class="carPrice">$'+formatNumber(listVehicles[i].maxPrice) + '</p>';
                html+='        <p class="carMileage">' + listVehicles[i].mileage + ' Kms</p>';
                html+='        <button class="moreInfo" onclick="carView(' + i + ')">View Vehicle</button>';
                // if(vehicles[i].buyNow == true){
                //     html+='    <button class="buyNowBtn">BUY NOW!</button>';
                // }
                html+='    </div>';
                html+='</li>';
            }
        }
        $("#Vehicles").empty();
        $("#Vehicles").append(html);
    }


    function bigView(){
        var html = "";
        for (var i = 0; i != listVehicles.length; i++) {
            if(listVehicles[i].priceType == "retail"){
                html += '<li class="vehicleListItems">';
                var text = '';
                if (listVehicles[i].links !== undefined) {
                    if (listVehicles[i].links[0] !== undefined) {
                        for(var v=0; v != listVehicles[i].links.length; v++){
                            if(listVehicles[i].links[v].type == "Main Photo"){
                                text = listVehicles[i].links[v].url;
                            }
                        }
                    }
                }
                html += '    <img src="' + text + '" class="carImage" alt="car-image">';
                html += '   <div class="carDetails">';
                html += '       <h2 class="carName">' + listVehicles[i].year + ' ' + listVehicles[i].make + ' ' + listVehicles[i].model + '</h2>';
                html += '       <p class="carPrice">$'+formatNumber(listVehicles[i].maxPrice) + '</p>';


                html += '       <p class="carMileage">' + listVehicles[i].mileage + ' Kms</p>';
                html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
                html += '           <p class="carTrim">' + listVehicles[i].trim + '</p>';
                html += '           <p class="carTransmission">' + listVehicles[i].transmissionName + '</p>';
                html += '       </div>';
                html += '       <div class="moreInfoContainer">';
                
                html += '               <button class="moreInfo" onclick="carView(' + i + ')">View Vehicle</button>';
                html += '       </div>';
                html += '   </div>';
                html += '</li>';
            }
        }
        $("#Vehicles").empty();
        $("#Vehicles").append(html);
    }

function GetCurrentUser() {
        //FIXME: I think this needs to be deleted
        $.ajax({
            type: "PUT",
            url: "/Users/Current",
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (results) {
                gUser = results;
                console.log(gUser);
                
            },
            error: function (results) {
                alert("Error");
            },
        });
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    function carView(index) {
        console.log(listVehicles[index].vin);
        if (gTuluId === "") {
            window.location = "/Home/CarView?vin=" + listVehicles[index].vin + "&dealerId=" + listVehicles[index].dealerId;
        } else {
            window.location = "/Home/CarView?vin=" + listVehicles[index].vin + "&dealerId=" + listVehicles[index].dealerId;
        }

    }

    async function ListVehicles(obj) {

        const results = await $.ajax({
            type: "PUT",
            url: "/Vehicle/List",
            data: obj,
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (results) { },
            error: function (results) { console.log(results.statusText); },
        });
        return results;
    }