function GetCurrentUser() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/Current",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gUser = results.id;
            NewTestDrive(gDealerId,gVin,gTuluId,gUser);
        },
        error: function (results) {
            //alert("Error");
        },
    });
}


function NewTestDrive(gDealerId,gVin,gTuluId,gUser) {
    var obj = new Object();
    obj.userId = gUser;
    obj.vin = gVin;
    obj.dealerId = gDealerId;
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
    //alert(obj.userAccept + ' ' + temp);
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
            //alert("Sent");
        },
        error: function (results) {

        },
    });
}


function DisplayTestDrive(td) {
    var html = '';
    html += '<h2>Appointment</h2>';
    html+='<div>';
    if(tulu == 'Skipped'){
        html += '<p>Tulu: <span>Skipped</span></p>';
    }else{
        html += '<p>Tulu: <span>' + td.tuluName + '</span></p>'; 
    }
    html += '<p>Vehicle: <span>' + td.year + ' ' + td.make + ' ' + td.model + '</span></p>';
    html += '<p>Dealer: <span>' + td.dealerName + '</span></p>';
    html += '<p><span>' + address + '</span></p>';
    html += '<p>Customer: <span>' + td.userName + '</span></p>';
    html+='</div>';
    html+='<div class="inputFieldDiv">';
    html += `<p>Phone Number:</p> <input type="text" id="Phone" />`;//Here are the added inputFields for email & Phone number
    html += `<p>Email:</p> <input type="text" id="Email" />`; //Here are the added inputFields for email & Phone number
    html += `<p>Street:</p> <input type="text" id="Street" value="` + td.address.street + `" />`;
    html += `<p>City:</p> <input type="text" id="City" value="` + td.address.city + `" />`;
    html += `<p>Province:</p> <input type="text" id="Province" value="` + td.address.province + `" />`;


    //here lies the remains of the latitude and longtitude input fields that'll soon be used for GPS
    html += `<p style="display:none;">Latitude:</p> <input style="display:none;" type="text" id="Latitude" value="` + td.address.latitude + `" />`;
    html += `<p style="display:none;">Longitude:</p> <input style="display:none;" type="text" id="Longitude" value="` + td.address.longitude + `" />`;

    html += `<p>Postal Code:</p> <input type="text" id="Postal" value="` + td.address.postal + `" />`;
    html += `<p>Notes:</p> <textarea cols="30" rows="10" id="Notes">`+td.notes+`</textarea>`;
    $('#Notes').append(td.notes);

    html += `<p class="prefAltTimeText">Book a preferred and alternate time for your appointment.</p>`;

    //html += `<input type="datetime-local" name="dtlField" value="2021-06-17T8:00" />`;

/*    for (var i = 0; i < td.times.length; i++) {
        html += `<p>`+td.times[i].type + `:</p> <input type="text" id="Times_` + i + `" value="` + td.times[i].timestamp + `" />`;
    }*/

    for (var i = 0; i < td.times.length; i++) {
        html += `<p>` + td.times[i].type + `:</p> <input type="datetime-local" name="dtlField" id="Times_` + i + `" />`;
    }



    var accept1 = ' selected="selected" ';
    var accept2 = '';
    if (td.userAccept === true) {
        accept1 = '';
        accept2 = ' selected="selected" ';
    }
    html += `<p style="display:none;">User Accept:</p> <select style="display:none;" id="UserAccept"><option value="False"` + accept1 + `>False</option><option selected="selected" value="True"` + accept2 + `>True</option></select>`;
    accept1 = ' selected="selected" ';
    accept2 = '';
    if (td.tuluAccept === true) {
        accept1 = '';
        accept2 = ' selected="selected" ';
    }
    html += `<p  style="display:none;">Tulu Accept:</p> <select  style="display:none;" id="TuluAccept" disabled><option value="False"` + accept1 + `>False</option><option value="True"` + accept2 + `>True</option></select>`;
    accept1 = ' selected="selected" ';
    accept2 = '';
    if (td.dealerAccept === true) {
        accept1 = '';
        accept2 = ' selected="selected" ';
    }
    html += `<p  style="display:none;">Dealer Accept:</p> <selec  style="display:none;"t id="DealerAccept" disabled><option value="False"` + accept1 + `>False</option><option value="True"` + accept2 + `>True</option></select>`;
    
    html+='</div>';

    html += `<p class="privacyTermsText">To Proceed, Please click to read and agree to our Privacy Policy & Terms and Condition</p>`;
    html += `<button class="privacyTermsBtn" onclick="showPrivacyTerms()">Privacy Policy & Terms and Condition</button>`;


    html +=`<p class="tuluRepresentativeText">A tulu Canada representative will contact you in the next 24 hours to confirm your valid license and the appointment</p>`;
    html += `<input type="button" class="saveTestDrive" value="Book Appointment" onclick="SaveTestDrive();" disabled/><input type="button" class="cancelTestDrive" value="Cancel" onclick="CancelTest('TestDriveList');" />`;
    $("#bookAppointmentContainer .wrapper").empty();
    $("#bookAppointmentContainer .wrapper").append(html);
}

function showPrivacyTerms(){
    document.querySelector('.privacyTerms').style = "display:flex;";
}

function iAgree(){
    document.querySelector('.privacyTerms').style = "display:none;";
    document.querySelector('.saveTestDrive').removeAttribute("disabled");
    document.querySelector('.saveTestDrive').style = "opacity:1;"
}


function CancelTest(){
    window.location = "/";
}