var tuluId = $("#TuluHiddenId").val();

function TuluDashboardSummary() {
    $.ajax({
        type: "PUT",
        url: "/Tulu/DashboardSummary",
        //data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            // TuluList(results.id)
            populateDashboard(results)
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
            console.log(results)
            populatePage(results);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function populatePage(userInfo){
    $('.userName').append(userInfo.firstName +" "+userInfo.lastName);
    $('.userRole').append(userInfo.roles[0].role);
    $('.userBio').append(userInfo.bio);

    var html = "";
    html+='<li>';
    html+='    <a href="'+userInfo.facebook+'">';
    html+='        <i class="fab fa-facebook fa-2x"></i>';
    html+='    </a>';
    html+='</li>';
    html+='<li>';
    html+='    <a href="'+userInfo.instagram+'">';
    html+='        <i class="fab fa-instagram fa-2x"></i>';
    html+='    </a>';
    html+='</li>';
    html+='<li>';
    html+='    <a href="'+userInfo.linkedin+'">';
    html+='        <i class="fab fa-linkedin-in fa-2x"></i>';
    html+='    </a>';
    html+='</li>';
    $('.socialMediaAccounts').append(html);

    // $('.subInfo .experience').append(userInfo.experience);
    // $('.subInfo .specialty').append(userInfo.specialty);
    // $('.subInfo .favouriteCar').append(userInfo.favouriteVehicle);
    // $('.subInfo .currentCar').append(userInfo.currentVehicle);
    // $('.subInfo .location').append(userInfo.address.street +' '+userInfo.address.city+' '+userInfo.address.province+' '+userInfo.address.postal);
}

//malik fix tulu list 
function TestTuluList() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/ListTulus",
        //data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            tuluList = results;
            getSelectedTulu(tuluList);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function getSelectedTulu(list){
    for(var i = 0; i!=list.length;i++){
        if(list[i].id==tuluId){
            populatePage(list[i]);
        }
    }
}

