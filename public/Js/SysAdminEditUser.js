var userId="";

window.onload = function () {
    var hash;
    var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
    
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        if (hash[0] === "userId") {
            userId = hash[1];
            $('.selectedId').val(userId);
            GetUser()
        }
    }
}

function GetUser(){
    for(x=0;x!=userList.length;x++){
        console.log(userList[x]._id)
        if(userId == userList[x]._id){
            console.log(userList[x])
            populateUsers(x);
        }
    }
}

function populateUsers(index){
    $('#selectedId').val(userId);
    $('#fName').val(userList[index].fName);
    $('#lName').val(userList[index].lName);
    $('#email').val(userList[index].email);
    $('#phoneNumber').val(userList[index].phoneNumber);
}
