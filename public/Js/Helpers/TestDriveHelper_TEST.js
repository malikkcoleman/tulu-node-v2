var gTestDrive = null;
var gTuluId = '4f371029-b204-4322-a52e-b2ff122a2a18';
var gVehicle = null;

function ListAllVehicles() {
    $.ajax({
        type: "PUT",
        url: "/Test/AllVehicles",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            // var html = '';
            // for (var i = 0; i < results.length; i++) {
            //     html += results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' ' + results[i].dealerName + ' <input type="button" value="Load Vehicle" onclick="GetVehicle(\'' + results[i].vin + '\',\'' + results[i].dealerId + '\');" /><br />';
            // }
            // $("#VehicleList").empty();
            // $("#VehicleList").append(html);
            CancelTest('VehicleList');
            console.log(results);
        },
        error: function (results) {

        },
    });
}
function GetVehicle(vin, dealerId) {
    var obj = new Object();
    obj.vin = vin;
    obj.dealerId = dealerId;
    $.ajax({
        type: "PUT",
        url: "/Vehicle/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gVehicle = results;
            // var html = '';
            // html += '<h2>' + results.year + ' ' + results.make + ' ' + results.model + '</h2>';
            // html += '<input type="button" value="Book Test Drive" onclick="NewTestDrive();" />';
            // html += '<input type="button" value="Cancel" onclick="CancelTest(\'VehicleDiv\');" />';
            // $("#VehicleDiv").empty();
            // $("#VehicleDiv").append(html);
            CancelTest('VehicleDiv');
            console.log(results);
        },
        error: function (results) {

        },
    });
}

function ListTestDrives() {
    var obj = new Object();
    obj.userId = $("#UserId").val();
    $.ajax({
        type: "PUT",
        url: "/TestDrive/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            // var html = '';
            // for (var i = 0; i < results.length; i++) {
            //     // html += results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + ' <input type="button" value="Edit" onclick="GetTestDrive(\'' + results[i].id + '\');" /><br />';
            //     html+='<li>';
            //     html+='    <p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' + ' <i class="fas fa-edit" onclick="GetTestDrive(\'' + results[i].id + '\');" />';
            //     html+='</li>';
            // }
            // html += '<input type="button" class="listAllVehicleBtn" value="List All Vehicles" onclick="ListAllVehicles();" />';
            // $("#TestDriveList").empty();
            // $("#TestDriveList").append(html);
            CancelTest('TestDriveList');
            console.log(results);
        },
        error: function (results) {

        },
    });
}

function GetTestDrive(id) {
    var obj = new Object();
    obj.id = id;
    $.ajax({
        type: "PUT",
        url: "/TestDrive/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gTestDrive = results;
            DisplayTestDrive(results);
            console.log(results);
        },
        error: function (results) {
        },
    });
}

function CancelTest(divName) {
    $("#VehicleList").hide();
    $("#VehicleDiv").hide();
    $("#TestDriveDiv").hide();
    $("#TestDriveList").hide();
    $("#" + divName).show();
}

function NewTestDrive() {
    var obj = new Object();
    obj.userId = $("#UserId").val();
    obj.vin = gVehicle.vin;
    obj.dealerId = gVehicle.dealerId;
    obj.tuluId = gTuluId;
    $.ajax({
        type: "PUT",
        url: "/TestDrive/New",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gTestDrive = results;
            DisplayTestDrive(results);
            console.log(results);
        },
        error: function (results) {

        },
    });
}

function DisplayTestDrive(td) {
    // var html = '';
    // html += '<h2>Appointment</h2>';
    // html+='<div>';
    // html += '<p>Tulu: <span>' + td.tuluName + '</span></p>';
    // html += '<p>Vehicle: <span>' + td.year + ' ' + td.make + ' ' + td.model + '</span></p>';
    // html += '<p>Dealer: <span>' + td.dealerName + '</span></p>';
    // html += '<p>User: <span>' + td.userName + '</span></p>';
    // html+='</div>';
    // html+='<div class="inputFieldDiv">';
    // html += `<p>Street:</p> <input type="text" id="Street" value="` + td.address.street + `" />`;
    // html += `<p>City:</p> <input type="text" id="City" value="` + td.address.city + `" />`;
    // html += `<p>Province:</p> <input type="text" id="Province" value="` + td.address.province + `" /`;
    // html += `<p>Latitude:</p> <input type="text" id="Latitude" value="` + td.address.latitude + `" />`;
    // html += `<p>Longitude:</p> <input type="text" id="Longitude" value="` + td.address.longitude + `" />`;
    // html += `<p>Postal Code:</p> <input type="text" id="Postal" value="` + td.address.postal + `" />`;
    // html += `<p>Notes:</p> <textarea cols="30" rows="10" id="Notes">`+td.notes+`</textarea>`;
    // // $('#Notes').append(td.notes);
    // for (var i = 0; i < td.times.length; i++) {
    //     html += `<p>`+td.times[i].type + `:</p> <input type="text" id="Times_` + i + `" value="` + td.times[i].timestamp + `" />`;
    // }
    // var accept1 = ' selected="selected" ';
    // var accept2 = '';
    // if (td.userAccept === true) {
    //     accept1 = '';
    //     accept2 = ' selected="selected" ';
    // }
    // html += `<p>User Accept:</p> <select id="UserAccept"><option value="False"` + accept1 + `>False</option><option value="True"` + accept2 + `>True</option></select>`;
    // accept1 = ' selected="selected" ';
    // accept2 = '';
    // if (td.tuluAccept === true) {
    //     accept1 = '';
    //     accept2 = ' selected="selected" ';
    // }
    // html += `<p>Tulu Accept:</p> <select id="TuluAccept"><option value="False"` + accept1 + `>False</option><option value="True"` + accept2 + `>True</option></select>`;
    // accept1 = ' selected="selected" ';
    // accept2 = '';
    // if (td.dealerAccept === true) {
    //     accept1 = '';
    //     accept2 = ' selected="selected" ';
    // }
    // html += `<p>Dealer Accept:</p> <select id="DealerAccept"><option value="False"` + accept1 + `>False</option><option value="True"` + accept2 + `>True</option></select>`;
    
    // html+='</div>';
    // html += `<input type="button" class="saveTestDrive" value="Save" onclick="SaveTestDrive();" /><input type="button" class="cancelTestDrive" value="Cancel" onclick="CancelTest('TestDriveList');" />`;
    // $("#TestDriveDiv").empty();
    // $("#TestDriveDiv").append(html);
    console.log(td)
    CancelTest('TestDriveDiv');
}

function SaveTestDrive() {
    var obj = gTestDrive;
    for (var i = 0; i < obj.times.length; i++) {
        obj.times[i].timestamp = $("#Times_" + i).val();
        if (obj.times[i].type === 'Preferred') {
            obj.pref = obj.times[i].timestamp;
        } else {
            obj.alt = obj.times[i].timestamp;
        }
    }
    obj.address.street = $("#Street").val();
    obj.address.city = $("#City").val();
    obj.address.province = $("#Province").val();
    obj.address.postal = $("#Postal").val();
    obj.address.latitude = parseFloat($("#Latitude").val());
    obj.address.longitude = parseFloat($("#Longitude").val());
    obj.address.type = 'Test Drive';
    obj.address.name = 'Test Drive';
    obj.notes = $("#Notes").val();
    var temp = $("#UserAccept option:selected").val();
    obj.userAccept = false;
    if (temp === 'True') {
        obj.userAccept = true;
    }
    alert(obj.userAccept + ' ' + temp);
    temp = $("#TuluAccept option:selected").val();
    obj.tuluAccept = false;
    if (temp === 'True') {
        obj.tuluAccept = true;
    }
    temp = $("#DealerAccept option:selected").val();
    obj.dealerAccept = false;
    if (temp === 'True') {
        obj.dealerAccept = true;
    }
    var o = new Object();
    o.json_string = JSON.stringify(obj);
    $.ajax({
        type: "PUT",
        url: "/TestDrive/Save",
        data: o,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            alert("Sent");
        },
        error: function (results) {

        },
    });
}
//yyyy-MM-ddTHH:mm:ss



    
