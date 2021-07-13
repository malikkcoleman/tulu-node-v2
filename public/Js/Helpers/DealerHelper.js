var gDealer = null;
var currentEditUser = null;


function GetCurrentUser() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/Current",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            AddingPrivileges(results);
            getCurrDealerId(results.roles);
        },
        error: function (results) {
            alert("Error");
        },
    });
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

/*function DealerDashboardSummary() {
    var obj = new Object();
    $.ajax({
        type: "PUT",
        url: "/Dealer/DashboardSummary",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            populateDashboard(results);
        },
        error: function (results) {
            alert("Error");
        },
    });
}*/



/*function populateDashboard(info) {
    $('.uploadCount').append(info.inventory);
    $('.dailySalesCount').append(info.lastDaySales);
    $('.monthlySalesCount').append(info.lastDaySales);
    $('.testDriveCount').append(info.newTestDrives);
    $('.unreadMessageCount').append(info.unReadMessages);
}*/

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

function EditUser(index) {
    
    GetEditDealer(index);
    console.log(currentEditUser);
    
    document.querySelector('.editUser').style = "display:flex  !important;";
}


function populateEditUser(info) {
    $('#EditName').val(info.name);
    $('#EditLogo').val(info.logo);
    $('#EditHours').val(info.hours);
    $('#EditWebsite').val(info.website);
    $('#EditStreet').val(info.address.street);
    $('#EditCity').val(info.address.city);
    $('#EditProvince').val(info.address.province);
    $('#EditPostal').val(info.address.postal);
};

function SaveEdit() {
    var obj = new Object();


    currentEditUser.name = $("#EditName").val();
    currentEditUser.logo = $("#EditLogo").val();
    currentEditUser.hours = $("#EditHours").val();
    currentEditUser.website = $("#EditWebsite").val();
    currentEditUser.address.street = $("#EditStreet").val();
    currentEditUser.address.city = $("#EditCity").val();
    currentEditUser.address.province = $("#EditProvince").val();
    currentEditUser.address.postal = $("#EditPostal").val();
    var users = currentEditUser.users;
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
    currentEditUser.userString = s;
    obj.json_string = JSON.stringify(currentEditUser);
    console.log(obj.json_string);

    $.ajax({
        type: "PUT",
        url: "/Dealer/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results)
            document.querySelector('.editUser').style = "display:none  !important;";

            location.reload(true);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function GetEditDealer(id) {
    var obj = new Object();
    obj.id = id;
    $.ajax({
        type: "PUT",
        url: "/Dealer/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            currentEditUser = results;
            console.log(currentEditUser);
            console.log(results)
            populateEditUser(results);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function GetDealer(id) {
    var obj = new Object();
    obj.id = id;
    $.ajax({
        type: "PUT",
        url: "/Dealer/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            //gDealer = results;
            //DisplayDealer(results);
            console.log(results)
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function DisplayDealer(dealer) {
    console.log(dealer);
    $('#DealerName').val(dealer.name);
    $("#DealerAccountId").val(dealer.accountId);
    $("#DealerLogo").val(dealer.logo);
    $("#DealerHours").val(dealer.hours);
    $("#DealerWebsite").val(dealer.website);
    // $("#AddressName").val(dealer.address.name);
    $("#AddressStreet").val(dealer.address.street);
    $("#AddressCity").val(dealer.address.city);
    $("#AddressProvince").val(dealer.address.province);
    $("#AddressPostal").val(dealer.address.postal);
}

function RemoveUser(id) {
    //FIXME: I think this needs to be deleted
    var obj = new Object();
    obj.userId = id;
    obj.dealerId = gDealer.id;
    $.ajax({
        type: "PUT",
        url: "/Dealer/RemoveUser",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            GetDealer(gDealer.id);
        },
        error: function (results) {
            alert("Error");
        },
    });
}


function goToNext() {

    document.querySelector('.addingUserAddressContainer').style = "display:flex !important;";
    document.querySelector('.addingUserContainer').style = "display:none !important;";
}

function AddUser() {
    var obj = new Object();
    obj.dealerId = $("#dealerId").val();
    obj.email = $("#email").val();
    obj.role = "DealerUser";
    obj.firstName = $("#fname").val();
    obj.lastName = $("#lname").val();
    obj.city = $("#city").val();
    obj.province = $("#province").val();
    obj.postal = $("#postal").val();
    obj.street = $("#street").val();
    obj.linkedIn = $("#linkedIn").val();
    obj.facebook =  $("#facebook").val();
    $.ajax({
        type: "PUT",
        url: "/Dealer/AddUser",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            //GetDealer(gDealer.id);
            //alert("works!");
            console.log(results);
            console.log("test");
        },
        error: function (results) {
            alert("Error");
        },
    });
}


function NewDealer() {
    //var obj = new Object();
    //obj.name = $("#DealerName").val();
    $.ajax({
        type: "PUT",
        url: "/Dealer/New",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gDealer = results;
            DisplayDealer(gDealer);
            //ShowAddUserOption();
            ShowAddNewUser()
            alert('work!');
        },
        error: function (results) {
            alert("Error");
        },
    });
}