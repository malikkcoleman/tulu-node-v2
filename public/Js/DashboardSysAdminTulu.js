function populateTulu(){
    var html = '<ul class="userContainer">';
    for (var i = 0; i != tuluList.length; i++) {
        html += '<li class="">';
        html += '<p>' + tuluList[i].fName +' '+tuluList[i].lName + '</p>';
        html += '<div class="userContainerControls">';
        html += '<input type="button" class="btn" value="Remove" onclick="DeleteDealer(\'' + tuluList[i]._id + '\');" />';
        html += '<input type="button" class="btn" value="Edit" onclick="EditUser(\'' + tuluList[i]._id + '\');" />';
        html += '</div>';
        html += '</li>';
    }
    //html += '<input type="button" class="btn" value="New Dealer" onclick="NewDealer();"  />';
    html += '</ul>';
    $("#TuluList").empty();
    $("#TuluList").append(html);
}

function EditUser(tuluId){
    window.location = "/users/DashboardSysAdminEditTulu?tuluId=" + tuluId;
}