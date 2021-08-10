
    function populateUser(){
        var html = '<ul class="userContainer">';
        for (var i = 0; i < userList.length; i++) {
            html += '<li class="">';
            html += '<p>' + userList[i].fName +' '+userList[i].lName + '</p>';
            html += '<div class="userContainerControls">';
            html += '<input type="button" class="btn" value="Remove" onclick="DeleteDealer(\'' + userList[i]._id + '\');" />';
            html += '<input type="button" class="btn" value="Edit" onclick="EditUser(\'' + userList[i]._id + '\');" />';
            html += '</div>';
            html += '</li>';
        }
        //html += '<input type="button" class="btn" value="New Dealer" onclick="NewDealer();"  />';
        html += '</ul>';
        $("#DealerList").empty();
        $("#DealerList").append(html);
    }

    function ShowAddNewUser(){
        window.location = "/users/addUser";
    }

    function EditUser(userId){
        window.location = "/users/DashboardSysAdminEditUser?userId=" + userId;
    }