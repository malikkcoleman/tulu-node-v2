var gUser = null;

//To make someone a tulu: call AddUserRole('', 'Tulu');
function AddUserRole(targetId, role) {
    //FIXME: I think this needs to be deleted
    alert("ERROR DEAD FUNCITON - AddUserRole");
    //var obj = new Object();
    //obj.userId = gUser.id;
    //obj.targetId = targetId;
    //obj.role = role;
    //$.ajax({
    //    type: "PUT",
    //    url: "/Users/SaveUserRole",
    //    data: obj,
    //    cache: false,
    //    dataType: "json",
    //    contentType: "application/x-www-form-urlencoded",
    //    success: function (results) {
    //        gUser = GetUser(gUser.id);
    //    },
    //    error: function (results) {
    //        alert("Error");
    //    },
    //});
}

//To un Tulu RemoveUserRole('','Tulu');
function RemoveUserRole(targetId, role) {
    //FIXME: I think this needs to be deleted
    var obj = new Object();
    obj.userId = gUser.id;
    obj.targetId = targetId;
    obj.role = role;
    $.ajax({
        type: "PUT",
        url: "/Users/DeleteUserRole",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gUser = GetUser(gUser.id);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function MakeUserString(user) {
    var s = '';
    if (j > 0) { s += '*'; }
    s += user.id + ';' + user.firstName + ';' + user.lastName + ';' + user.email + ';' + user.facebook + ';' + user.linkedIn + ';' + user.instagram + ';' + user.bio + ';' + user.image + '#';
    s += user.address.targetId + ';' + user.address.name + ';' + user.address.street + ';' + user.address.city + ';' + user.address.province + ';' + user.address.postal + ';' + user.address.latitude + ';' + user.address.longitude + ';' + user.address.type + '#';
    for (var i = 0; i < user.roles.length; i++) {
        if (i > 0) { s += '$'; }
        s += user.roles[i].userId + ';' + user.roles[i].role + ';' + user.roles[i].targetId;
    }
    return s;
}


function SaveUser() {
    //FIXME: I think this needs to be deleted
    var user = UpdateUser(gUser);
    var s = '';
    for (var i = 0; i < user.roles.length; i++) {
        if (i > 0) { s += '$'; }
        s += user.roles[i].userId + ';' + user.roles[i].role + ';' + user.roles[i].targetId;
    }
    user.userRoleString = s;

    var obj = new Object();
    obj.json_string = JSON.stringify(user);
    $.ajax({
        type: "PUT",
        url: "/Users/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gUser = results;
            DisplayUser(user);
        },
        error: function (results) {
            alert("Error");
        },
    });

}

function UpdateUser(user) {
    return user;
}

function GetUser(id) {
    //FIXME: I think this needs to be deleted
    var obj = new Object();
    obj.id = id;
    $.ajax({
        type: "PUT",
        url: "/Users/Get",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gUser = results;
            DisplayUser(user);
        },
        error: function (results) {
            alert("Error");
        },
    });
}