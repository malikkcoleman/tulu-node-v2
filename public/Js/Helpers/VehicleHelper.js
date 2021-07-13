var gUserTest = null;
var gDealerId = '';
var gVehicle = null;

function AfterUpload(result) {
    alert(JSON.stringify(result));
    result.vin = gVehicle.vin;
    result.dealerId = gDealerId;
    if (gVehicle.links === undefined) {
        result.sequence = 0;
    } else {
        result.sequence = gVehicle.links.length;
    }

    console.log(result.sequence);
    result.description = $("#DescriptionText").val();
    result.type = $("#ImageTypeSelect option:selected").val();
    // SaveLink(result);
}

function DeleteLink(index) {
    var obj = new Object();
    obj.json_string = JSON.stringify(gVehicle.links[index]);
    $.ajax({
        type: "PUT",
        url: "/Vehicle/DeleteLink",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            TestGetVehicle();
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function SetAsPrimaryImage(index) {
    gVehicle.image = gVehicle.links[index].url;
    StartSaving();
}

function SaveLink(vl) {
    var obj = new Object();
    obj.json_string = JSON.stringify(vl);
    $.ajax({
        type: "PUT",
        url: "/Vehicle/SaveLink",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            if (gVehicle.image === undefined || gVehicle.image === '' || gVehicle.image === ' ') {
                gVehicle.image = vl.url;
                StartSaving();
            } else {
                TestGetVehicle();
            }
        },
        error: function (results) {
            alert("Error");
        },
    });
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
            gUserTest = results;
            for (var i = 0; i < results.roles.length; i++) {
                if (results.roles[i].role === 'DealerAdmin' || results.roles[i].role === 'DealerUser') {
                    if (gDealerId === '') { gDealerId = results.roles[i].targetId; }
                }
            }
            gDealerId = 'fb2a156c-b2e8-4174-84cd-61869996a34a';
        },
        error: function (results) {
            alert("Error");
        },
    });
}



async function NewVehicle(vin, dealerId) {
    var obj = new Object();
    obj.vin = vin;
    obj.dealerId = dealerId;
    const results = await $.ajax({
        type: "PUT",
        url: "/Vehicle/New",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            // alert(JSON.stringify(results));
            console.log(results);
            console.log(results.year);
            // LoadVehicleInfo(results)
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}

function MakeNewVehicle() {
    //var vin = '1G1FA1RX1H0123856';
    var vin = $("#VinText").val();
    //var dealerId = 'fb2a156c-b2e8-4174-84cd-61869996a34a';
    var dealerId = gDealerId;
    NewVehicle(vin, dealerId).then(function (vehicle) {
        gVehicle = vehicle;
        alert(JSON.stringify(vehicle));
        DisplayDealer(vehicle);
    });
}

function TestGetVehicle() {
    //var vin = '1G1FA1RX1H0123856';
    var vin = $("#VinText").val();
    //var dealerId = 'fb2a156c-b2e8-4174-84cd-61869996a34a';
    var dealerId = gDealerId;
    GetVehicle(vin, dealerId).then(function (vehicle) {
        gVehicle = vehicle;
        DisplayVehicle(vehicle);
    });
}

async function GetVehicle(vin, dealerId) {
    var obj = new Object();
    obj.vin = vin;
    obj.dealerId = dealerId;
    const results = await $.ajax({
        type: "PUT",
        url: "/Vehicle/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) { },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}

function DisplayVehicle(vehicle) {
    var html = '<table>';
    html += '<tr><th>VIN:</th><td>' + vehicle.vin + '</td></tr>';
    html += '<tr><th>Model:</th><td><input type="text" id="ModelText" value="' + vehicle.model + '" /></td></tr>';
    html += '<tr><th>Notes:</th><td><input type="text" id="NotesText" value="' + vehicle.notes + '" /></td></tr>';
    html += '<tr><th>Image:</th><td>' + vehicle.image + '</td></tr>';
    //TODO the rest
    html += '</table>';
    for (var i = 0; i < vehicle.links.length; i++) {
        html += '<img src="' + vehicle.links[i].url + '" /><input type="button" value="Delete Link" onclick="DeleteLink(' + i + ');" /><input type="button" value="SET PRIMARY" onclick="SetAsPrimaryImage(' + i + ');" /><br />';
    }
    $("#VehicleDiv").empty();
    $("#VehicleDiv").append(html);
}

async function SaveVehicle(vehicle) {
    var obj = new Object();
    obj.json_string = JSON.stringify(vehicle);
    const result = await $.ajax({
        type: "PUT",
        url: "/Vehicle/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return result;
}

function StartSaving() {
    gVehicle.model = $("#ModelText").val();
    gVehicle.notes = $("#NotesText").val();
    SaveVehicle(gVehicle).then(function (result) {
        gVehicleTest = result;
        DisplayVehicle(result);
    });
}