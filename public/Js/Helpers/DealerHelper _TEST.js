var gDealer = null;
var currentEditUser = null;


function EditUser(index) {

    GetEditDealer(index);
    console.log(currentEditUser);

    document.querySelector('.editUser').style = "display:flex  !important;";
}

function DeleteDealer(id) {
    var obj = new Object();
    obj.id = id;
    $.ajax({
        type: "PUT",
        url: "/Dealer/Delete",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            //alert(results.message);
            location.reload(true);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function ListDealers() {
    $.ajax({
        type: "PUT",
        url: "/Dealer/List",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            var html = '<ul class="userContainer">';
            for (var i = 0; i < results.length; i++) {
                html += '<li class="">';
                html += '<p>' + results[i].name + '</p>';
                html += '<div class="userContainerControls">';
                html += '<input type="button" class="btn" value="Remove" onclick="DeleteDealer(\'' + results[i].id + '\');" />';
                html += '<input type="button" class="btn" value="Edit" onclick="EditUser(\'' + results[i].id + '\');" />';
                html += '</div>';
                html += '</li>';
            }
            //html += '<input type="button" class="btn" value="New Dealer" onclick="NewDealer();"  />';
            html += '</ul>';
            $("#DealerList").empty();
            $("#DealerList").append(html);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function SaveDealer() {
    var obj = new Object();
    gDealer.name = $("#DealerName").val();
    gDealer.accountId = $("#DealerAccountId").val();
    gDealer.logo = $("#DealerLogo").val();
    gDealer.hours = $("#DealerHours").val();
    gDealer.website = $("#DealerWebsite").val();
    gDealer.address.type = $("#AddressType").val();
    gDealer.address.name = $("#AddressName").val();
    gDealer.address.street = $("#AddressStreet").val();
    gDealer.address.city = $("#AddressCity").val();
    gDealer.address.province = $("#AddressProvince").val();
    gDealer.address.postal = $("#AddressPostal").val();
    gDealer.address.latitude = parseFloat($("#AddressLatitude").val());
    gDealer.address.longitude = parseFloat($("#AddressLongitude").val());
    var users = gDealer.users;
    var s = '';
    for (var j = 0; j < users.length; j++) {
        var user = users[j];
        if (j > 0) { s += '*'; }
        s += user.id + ';' + user.firstName + ';' + user.lastName + ';' + user.email + ';' + user.facebook + ';' + user.linkedIn + ';' + user.instagram + ';' + user.bio + ';' + user.image + '#';
        s += user.address.targetId + ';' + user.address.name + ';' + user.address.street + ';' + user.address.city + ';' + user.address.province + ';' + user.address.postal + ';' + user.address.latitude + ';' + user.address.longitude + ';' + user.address.type + '#';
        for (var i = 0; i < user.roles.length; i++) {
            if (i > 0) { s += '$'; }
            s += user.roles[i].userId + ';' + user.roles[i].role + ';' + user.roles[i].targetId;
        }
    }
    gDealer.userString = s;
    obj.json_string = JSON.stringify(gDealer);
    console.log(obj.json_string);

    AddUser();


    $.ajax({
        type: "PUT",
        url: "/Dealer/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gDealer = results;
            console.log(gDealer);
            //alert("Saved");
            HideAddNewUser();
            ListDealers();
            document.querySelector('.addingUserInfoContainer').style = "display:none  !important;";
            document.querySelector('.addingUserContainer').style = "display:flex  !important;";
            DisplayDealer(gDealer);
        },
        error: function (results) {
            alert("Error");
        },
    });
}


