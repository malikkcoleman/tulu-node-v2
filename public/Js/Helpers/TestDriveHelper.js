var gTestDrive = null;

function GetTD(id) {
    GetTestDrive(id).then(function (td) {
        gTestDrive = td;
        $("#TestDriveTimestamp").val(td.timestamp);
        $("#Time").val(td.time);
        $("#Date").val(td.date);
        $("#TestDriveNotes").val(td.notes);
        $("#AddressName").val(td.address.name);
        $("#Street").val(td.address.street);
        $("#City").val(td.address.city);
        $("#Province").val(td.address.province);
        $("#Postal").val(td.address.postal);
        $("#Latitude").val(td.address.latitude);
        $("#Longitude").val(td.address.longitude);
        $("#AddressType").val(td.address.type);

    });
}
function NewTD() {
    var userId = gUserTest.id;
    var tuluId = $("#UsersSelect option:selected").val();
    var dealerId = $("#DealerSelect option:selected").val();
    var vin = $("#VehicleSelect option:selected").val();
    NewTestDrive(userId, tuluId, vin, dealerId).then(function (td) {
        gTestDrive = td;
        $("#TestDriveTimestamp").val(td.timestamp);
        $("#Time").val(td.time);
        $("#Date").val(td.date);
        $("#TestDriveNotes").val(td.notes);
        $("#AddressName").val(td.address.name);
        $("#Street").val(td.address.street);
        $("#City").val(td.address.city);
        $("#Province").val(td.address.province);
        $("#Postal").val(td.address.postal);
        $("#Latitude").val(td.address.latitude);
        $("#Longitude").val(td.address.longitude);
        $("#AddressType").val(td.address.type);
        SaveTD();
    });
}

function ListTD() {
    var userId = gUserTest.id;
    var tuluId = $("#UsersSelect option:selected").val();
    var dealerId = $("#DealerSelect option:selected").val();
    var vin = $("#VehicleSelect option:selected").val();
    var messageId = '';
    ListTestDrive(userId, tuluId, vin, dealerId, messageId).then(function (results) {
        var html = ``;
        html += '<ul>';
        for (var i = 0; i < results.length; i++) {

            html += '<li onclick="GetTD(`' + results[i].id + '`);">';
            html += '<h4>';
            html += results[i].userName;
            html += '</h4>';
            html += '<p>';
            html += results[i].year + ' ' + results[i].make + ' ' + results[i].model;
            html += '</p>';
            html += '<p>';
            html += results[i].timestamp;
            html += '</p>';
            html += '<p>';
            html += results[i].notes;
            html += '</p>';
            html += '</li>';
            //html += results[i].dealerName + ` ` + results[i].year + ` ` + results[i].make + ` ` + results[i].model + ` - ` + results[i].timestamp + ` <input type="button" value="Load" onclick="GetTD('` + results[i].id + `');" />`;
        }
        html += '</ul>';
        $("#TestDriveList").empty();
        $("#TestDriveList").append(html);
    });
}
function SaveTD() {
    gTestDrive.userId = gUserTest.id;
    var tuluId = $("#UsersSelect option:selected").val();
    if (tuluId !== undefined && tuluId !== '') { gTestDrive.tuluId = tuluId; }
    var dealerId = $("#DealerSelect option:selected").val();
    if (dealerId !== undefined && dealerId !== '') { gTestDrive.dealerId = dealerId; }

    var vin = $("#VehicleSelect option:selected").val();
    if (vin !== undefined && vin !== '') { gTestDrive.vin = vin; }
    gTestDrive.timestamp = $("#TestDriveTimestamp").val();
    gTestDrive.time = $("#Date").val();
    gTestDrive.date = $("#Time").val();
    gTestDrive.notes = $("#TestDriveNotes").val();
    gTestDrive.address.name = $("#AddressName").val();
    gTestDrive.address.street = $("#Street").val();
    gTestDrive.address.city = $("#City").val();
    gTestDrive.address.province = $("#Province").val();
    gTestDrive.address.postal = $("#Postal").val();
    gTestDrive.address.latitude = $("#Latitude").val();
    gTestDrive.address.longitude = $("#Longitude").val();
    gTestDrive.address.type = $("#AddressType").val();
    SaveTestDrive(gTestDrive).then(function (results) {
        alert(JSON.stringify(results));
        console.log(results);
        reset();
    });
}

function reset() {
    document.querySelector('#bookAppointmentContainer').style = "display:none !important;";
}

async function NewTestDrive(userId, tuluId, vin, dealerId) {
    var obj = new Object();
    obj.userId = userId;
    obj.tuluId = tuluId;
    obj.vin = vin;
    obj.dealerId = dealerId;
    const results = await $.ajax({
        type: "PUT",
        url: "/TestDrive/New",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}



async function GetTestDrive(id) {
    var obj = new Object();
    obj.id = id;
    const results = await $.ajax({
        type: "PUT",
        url: "/TestDrive/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            showCard(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}

async function ListTestDrive(userId, tuluId, vin, dealerId, messageId, start = "", end = "") {
    var obj = new Object();
    obj.userId = userId;
    obj.tuluId = tuluId;
    obj.vin = vin;
    obj.dealerId = dealerId;
    obj.messageId = messageId;
    obj.start = start;
    obj.end = end;
    const results = await $.ajax({
        type: "PUT",
        url: "/TestDrive/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}

async function SaveTestDrive(testDrive) {
    var obj = new Object();
    obj.json_string = JSON.stringify(testDrive);
    const results = await $.ajax({
        type: "PUT",
        url: "/TestDrive/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}


/*
async function CustomerEmail() {
    var obj = new Object();
    obj.id = "POKEMON";
    obj.targetId = "TEST";
    obj.tuluId = "TULUID";
    obj.dealerId = "DEALERID";
    obj.vin = "TESTVIN";
    obj.customerEmail = "mcoleman69@academic.rrc.ca";
    obj.dealerEmail = "malikcoleman@live.ca";
    obj.tuluEmail = "malik.coleman@tulucanada.com";
    obj.subject = "TESTSUBJECT";
    obj.message = "TESTMESSAGE";
    obj.year = "1985";
    obj.make = "Chevrolet";
    obj.model = "Monte Carlo SS";
    obj.preferredStartTime = "2021-03-09T15:00:00";
    obj.preferredEndTime = "2021-03-09T17:00:00";
    obj.alternateStartTime = "2021-03-11T15:00:00";
    obj.alternateEndTime = "2021-03-11T17:00:00";
    obj.dealerLocation = "Jim Gauthier Dealership";
    const results = await $.ajax({
        type: "POST",
        url: "https://prod-16.canadacentral.logic.azure.com:443/workflows/d0570f8b7e354921aa84da58dc908520/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i8mZVW81tzcCPIIkG-vf1jzX1dd-nNdfi_JbPfo_4Ls",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        sucess: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });return results;
}

async function CustomerDealerEmail(string id, string targetId, string dealerId, string vin, string customerEmail, string dealerEmail, string subject, string message, string year, string make, string model, string preferredStartTime, string preferredEndTime, string alternateStartTime, string alternateEndTime, string dealerLocation) {
    var obj = new Object();
    obj.id = id;
    obj.targetId = targetId;
    obj.dealerId = dealerId;
    obj.vin = vin;
    obj.customerEmail = customerEmail;
    obj.dealerEmail = dealerEmail;
    obj.subject = subject;
    obj.message = message;
    obj.year = year;
    obj.make = make;
    obj.model = model;
    obj.preferredStartTime = preferredStartTime;
    obj.preferredEndTime = preferredEndTime;
    obj.alternateStartTime = alternateStartTime;
    obj.alternateEndTime = alternateEndTime;
    obj.dealerLocation = dealerLocation;
    const results = await $.ajax({
        type: "POST",
        url: "https://prod-08.canadacentral.logic.azure.com:443/workflows/c17d9adad671444990af27bb41ecc3ed/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XAa4mjGsvE1XMyPVBwdKmja0xOZNTEwIWWuDpt1xn70",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        sucess: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
}*/
//malik fix end

function closeCard() {
    document.querySelector('#appointmentDetails').style = "display:none !important;";
}

function showCard(info) {
    document.querySelector('#appointmentDetails').style = "display:flex !important;";
    var html = "";
    html += '<p>Customer Name: <span>' + info.userName + '</span></p>';
    html += '<p>Dealership: <span>' + info.dealerName + '</span></p>';
    html += '<p>Tulu Name: <span>' + info.tuluName + '</span></p>';
    html += '<p>Vehicle: <span>' + info.year + ' ' + info.make + ' ' + info.model + '</span></p>';
    html += '<p>Notes: <span>' + info.note + '</span></p>';
    html += '<p>Time: <span>' +info.date+' '+ info.time + '</span></p>';
    $("#appointmentInfo").empty();
    $("#appointmentInfo").append(html);
}