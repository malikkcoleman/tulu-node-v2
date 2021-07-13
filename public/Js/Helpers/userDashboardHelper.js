function UserDashboardSummary() {
    var obj = new Object();
    $.ajax({
        type: "PUT",
        url: "/Users/DashboardSummary",
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
}

function populateDashboard(info) {
        $('.count').append(info.unReadMessages);
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
    html='<li>';
    html='    <a href="'+userInfo.facebook+'">';
    html='        <i class="fab fa-facebook fa-2x"></i>';
    html='    </a>';
    html='</li>';
    html='<li>';
    html='    <a href="'+userInfo.instagram+'">';
    html='        <i class="fab fa-instagram fa-2x"></i>';
    html='    </a>';
    html='</li>';
    html='<li>';
    html='    <a href="'+userInfo.linkedin+'">';
    html='        <i class="fab fa-linkedin-in fa-2x"></i>';
    html='    </a>';
    html='</li>';
    $('.socialMediaAccounts').append(html);

    // $('.subInfo .experience').append(userInfo.experience);
    // $('.subInfo .specialty').append(userInfo.specialty);
    // $('.subInfo .favouriteCar').append(userInfo.favouriteVehicle);
    // $('.subInfo .currentCar').append(userInfo.currentVehicle);
    // $('.subInfo .location').append(userInfo.address.street +' '+userInfo.address.city+' '+userInfo.address.province+' '+userInfo.address.postal);
}