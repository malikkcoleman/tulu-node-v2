var tuluId="";

window.onload = function () {
    var hash;
    var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
    
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        if (hash[0] === "tuluId") {
            tuluId = hash[1];
            $('.selectedId').val(tuluId);
            GetTulu()
        }
    }
}

function GetTulu(){
    for(x=0;x!=userList.length;x++){
        console.log(userList[x]._id)
        if(tuluId == userList[x]._id){
            console.log(userList[x])
            populateUsers(x);
        }
    }
}

function populateUsers(index){
    $('#selectedId').val(tuluId);
    $('#fName').val(userList[index].fName);
    $('#lName').val(userList[index].lName);
    $('#email').val(userList[index].email);
    $('#bio').val(userList[index].bio);
    $('#experience').val(userList[index].experience);
    $('#specialty').val(userList[index].specialty);
    $('#favoriteCar').val(userList[index].favoriteCar);
    $('#currentCar').val(userList[index].currentCar);
    $('#phoneNumber').val(userList[index].phoneNumber);
    $('#linkedin').val(userList[index].linkedin);
    $('#instagram').val(userList[index].instagram);
    $('#facebook').val(userList[index].facebook);
    $('#role').val(userList[index].role);
}
