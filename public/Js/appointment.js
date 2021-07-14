
    var gTestDrive = null;
    var gUserRole = "";
    var gUserId = "";

    window.onload = function () {
        // ListDealers().then(function (results) {
        //     var html = 'Dealers: <select id="DealerSelect" onchange="GetDealerValues();"><option value=""></option>';
        //     for (var i = 0; i < results.length; i++) {
        //         html += '<option value="' + results[i].id + '">' + results[i].name + '</option>';
        //     }
        //     html += '</select>';
        //     $("#DealerList").empty();
        //     $("#DealerList").append(html);
        //     GetCurrentUser();
        //     GetCurrentUserRole();
        // });
    }

function GetCurrentUserRole() {
        //FIXME: I think this needs to be deleted
        $.ajax({
            type: "PUT",
            url: "/Users/Current",
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (results) {
                console.log(results);
                gUserRole = results.roles[0].role;
                if(gUserRole == "DealerAdmin"){
                    gUserId = results.roles[0].targetId;
                }else{
                    gUserId = results.id;
                }
                console.log(gUserRole)
                console.log(gUserId);
                ListTestDrives(gUserRole,gUserId);
            },
            error: function (results) {
                alert("Error");
            },
        });
    }

    function showAdd() {
        document.querySelector('#bookAppointmentContainer').style = "display:flex !important;";
    }

    
    function ListTestDrives(userRole,userId) {
        var obj = new Object();
        obj.userId = $("#UserId").val();
        $.ajax({
            type: "PUT",
            url: "/TestDrive/List",
            data: obj,
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (results) {
                var html = '';
                var htmlPending = '';
                var htmlAccepted = '';
                for (var i = 0; i < results.length; i++) {
                    if(userRole == "Tulu"){
                        if(results[i].tuluId == userId){
                            if(results[i].tuluAccept == false){
                                htmlPending+='<li>';
                                htmlPending+='    <div class="appointmentInfo"><p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' ;
                                htmlPending+='<p>Status:<span> Pending</span></p>';
                                htmlPending+='<p>User:<span> '+results[i].userName+'</span></p>';
                                htmlPending+='<p>Dealer:<span> '+results[i].dealerName+'</span></p>';
                                htmlPending+='<p>Tulu:<span> '+results[i].tuluName+'</span></p>';
                                htmlPending+='</div>';
                                htmlPending+='<div class="controlContainer">';
                                htmlPending+='<i class="fas fa-check" onclick="acceptAppointment(\'' + results[i].id + '\')"/>';
                                htmlPending+='<i class="fas fa-times"/>';
                                htmlPending+='</div>';
                                htmlPending+='</li>';
                            }else{
                                htmlAccepted+='<li>';
                                htmlAccepted+='    <div class="appointmentInfo"><p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' ;
                                htmlAccepted+='<p>Status:<span> Accepted</span></p>';
                                htmlAccepted+='<p>User:<span> '+results[i].userName+'</span></p>';
                                htmlAccepted+='<p>Dealer:<span> '+results[i].dealerName+'</span></p>';
                                htmlAccepted+='<p>Tulu:<span> '+results[i].tuluName+'</span></p>';
                                htmlAccepted+='</div>';
                                htmlAccepted+='<div class="controlContainer">';
                                htmlAccepted+='<i class="fas fa-edit" onclick="GetTestDrive(\'' + results[i].id + '\');" />';
                                htmlAccepted+='</div>';
                                htmlAccepted+='</li>';
                            }
                        }
                    }else if(userRole == "DealerAdmin"){
                        if(results[i].dealerId == userId){
                            
                            if(results[i].dealerAccept == false){
                                htmlPending+='<li>';
                                htmlPending+='    <div class="appointmentInfo"><p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' ;
                                htmlPending+='<p>Status:<span> Pending</span></p>';
                                htmlPending+='<p>User:<span> '+results[i].userName+'</span></p>';
                                htmlPending+='<p>Dealer:<span> '+results[i].dealerName+'</span></p>';
                                htmlPending+='<p>Tulu:<span> '+results[i].tuluName+'</span></p>';
                                htmlPending+='</div>';
                                htmlPending+='<div class="controlContainer">';
                                htmlPending+='<i class="fas fa-check" onclick="acceptAppointment(\'' + results[i].id + '\')"/>';
                                htmlPending+='<i class="fas fa-times"/>';
                                htmlPending+='</div>';
                                htmlPending+='</li>';
                            }else{
                                htmlAccepted+='<li>';
                                htmlAccepted+='    <div class="appointmentInfo"><p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' ;
                                htmlAccepted+='<p>Status:<span> Accepted</span></p>';
                                htmlAccepted+='<p>User:<span> '+results[i].userName+'</span></p>';
                                htmlAccepted+='<p>Dealer:<span> '+results[i].dealerName+'</span></p>';
                                htmlAccepted+='<p>Tulu:<span> '+results[i].tuluName+'</span></p>';
                                htmlAccepted+='</div>';
                                htmlAccepted+='<div class="controlContainer">';
                                htmlAccepted+='<i class="fas fa-edit" onclick="GetTestDrive(\'' + results[i].id + '\');" />';
                                htmlAccepted+='</div>';
                                htmlAccepted+='</li>';
                            }
                        }
                    }else if(userRole == "User"){
                        if(results[i].userId == userId){
                             
                            if(results[i].tuluAccept == false || results[i].dealerAccept == false){
                                htmlPending+='<li>';
                                htmlPending+='    <div class="appointmentInfo"><p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' ;
                                htmlPending+='<p>Status:<span> Pending</span></p>';
                                htmlPending+='<p>User:<span> '+results[i].userName+'</span></p>';
                                htmlPending+='<p>Dealer:<span> '+results[i].dealerName+'</span></p>';
                                htmlPending+='<p>Tulu:<span> '+results[i].tuluName+'</span></p>';
                                htmlPending+='</div>';
                                htmlPending+='</li>';
                            }else{
                                htmlAccepted+='<li>';
                                htmlAccepted+='    <div class="appointmentInfo"><p>'+results[i].year + ' ' + results[i].make + ' ' + results[i].model + ' with ' + results[i].tuluName + '</p>' ;
                                htmlAccepted+='<p>Status:<span> Accepted</span></p>';
                                htmlAccepted+='<p>User:<span> '+results[i].userName+'</span></p>';
                                htmlAccepted+='<p>Dealer:<span> '+results[i].dealerName+'</span></p>';
                                htmlAccepted+='<p>Tulu:<span> '+results[i].tuluName+'</span></p>';
                                htmlAccepted+='</div>';
                                htmlAccepted+='</li>';
                            }
                        }
                    }
                   
                }
                $("#TestDriveListPending").empty();
                $("#TestDriveListAccepted").empty();
                $("#TestDriveListPending").append(htmlPending);
                $("#TestDriveListAccepted").append(htmlAccepted);
                console.log(results);
            },
            error: function (results) {

            },
        });
    }

    function acceptAppointment(id){
        GetTestDrive(id);
    }

    function GetTestDrive(id) {
        var obj = new Object();
        obj.id = id;
        $.ajax({
            type: "PUT",
            url: "/TestDrive/Get",
            data: obj,
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (results) {
                gTestDrive = results;
                console.log(results);
                acceptTestDrive(results);
            },
            error: function (results) {
            },
        });
    }

    function acceptTestDrive(){
        var obj = gTestDrive;
        for (var i = 0; i < gTestDrive.times.length; i++) {
            obj.times[i].timestamp =gTestDrive.times[i].timestamp;
            if (gTestDrive.times[i].type === 'Preferred') {
                obj.pref = gTestDrive.times[i].timestamp;
            } else {
                obj.alt = gTestDrive.times[i].timestamp;
            }
        }
        if(gUserRole == "Tulu"){
            obj.tuluAccept = true;
        }else if(gUserRole == "DealerAdmin"){
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
                //alert("GOOD");
            },
            error: function (results) {

            },
        });
    }


function showTab(tab){
    if(tab == "pending"){
        document.querySelector("#TestDriveListPending").style = "display:flex;";
        document.querySelector("#TestDriveListAccepted").style = "display:none;";
        document.querySelector(".pendingTab").style = "background:white;color:#79C6AC !important;";
        document.querySelector(".acceptTab").style = "background:#79C6AC;color:white !important;";
    }else if(tab == "accept"){
        document.querySelector("#TestDriveListPending").style = "display:none;";
        document.querySelector("#TestDriveListAccepted").style = "display:flex;";
        document.querySelector(".pendingTab").style = "background:#79C6AC;color:white !important;";
        document.querySelector(".acceptTab").style = "background:white;color:#79C6AC !important;";
    }
}

