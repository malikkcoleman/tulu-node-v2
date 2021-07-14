var gUserTest = null;
var gMessage = null;
var userRole = null;
var userId = null;
var selectedMessage = null;
var tuluList = null;
var selectedTuluId = null;


function GetCurrentUser() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/Current",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gUserTest = results;
            ListMessages()
            userRole = results.roles[0].role
            console.log(userRole);
            console.log(results);
            userId = results.id;
            console.log(userId);
        },
        error: function (results) {
            //alert("Error");
        },
    });
}

async function ListDealerUsers(dealerId) {
    //FIXME: I think this needs to be deleted
    var obj = new Object();
    obj.dealerId = dealerId;
    const results = await $.ajax({
        type: "PUT",
        url: "/Users/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            //console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}

function showNewMessage(){
    document.querySelector('.newMessageContainer').style = 'display:flex;';
}

function showReplyMessage(){
    document.querySelector('.replyMessageContainer').style = 'display:flex;';
    document.querySelector('.replyMessage').style = "display:none;";
    document.querySelector('.newMessageContainer').style = 'display:none;';
    console.log(selectedMessage);
    $('#ReaplyThreadValueId').val(selectedMessage.threadId);
    $('#ReplySubjectText').val(selectedMessage.messages[0].subject);
}

function NewMessage() {
    var obj = new Object();
    obj.senderId = gUserTest.id;
    obj.targetId = $("#tuluSelect option:selected").val();
    obj.dealerId = $("#DealerSelect option:selected").val();
    obj.vin = $("#VehicleSelect option:selected").val();
    obj.threadId = '';
    $.ajax({
        type: "PUT",
        url: "/Messages/New",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gMessage = results;

            LoadMessage(gMessage);
            //alert(JSON.stringify(gMessage));
            SaveMessage();
            
        },
        error: function (results) {
            //alert("Error");
        },
    });
}

function replyMessage() {
    var obj = new Object();
    obj.senderId = gUserTest.id;
    obj.targetId = selectedMessage.senderId;
    obj.dealerId = $("#DealerSelect option:selected").val();
    obj.vin = $("#VehicleSelect option:selected").val();
    obj.threadId = selectedMessage.threadId;
    $.ajax({
        type: "PUT",
        url: "/Messages/New",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            gMessage = results;

            LoadMessage(gMessage);
            //alert(JSON.stringify(gMessage));
            SaveMessageReply();
            
        },
        error: function (results) {
            //alert("Error");
        },
    });
}

function LoadMessage(message) {


    if (message.senderId === gUserTest.id) {
        $("#UsersSelect").val(message.targetId);
    } else {
        $("#UsersSelect").val(message.senderId);
    }

    $("#DealerSelect").val(message.dealerId);

    $("#VehicleSelect").val(message.vin);
    // $("#SubjectText").val(message.subject);
    // $("#BodyText").val(message.message);
    if (message.isRead === false) {
        $("#IsReadSelect").val("0");
    } else {
        $("#IsReadSelect").val("1");
    }
    $("#ThreadValueId").val(message.threadId);
}

function SaveMessageReply() {
    var obj = new Object();
    obj.isRead = false;
    var isRead = $("#IsReadSelect option:selected").val();
    if (isRead === "1") { obj.isRead = true; }
    obj.subject = $("#ReplySubjectText").val();
    obj.message = $("#ReplyBodyText").val();
    obj.senderId = selectedMessage.targetId;
    obj.targetId = selectedMessage.senderId;
    obj.threadId = selectedMessage.threadId;
    obj.id = gMessage.id;
/*    obj.dealerId = gMessage.dealerId;
    obj.vin = gMessage.vin;*/

    var date = new Date(gMessage.timestamp);
    obj.timestamp = date.toJSON();
    $.ajax({
        type: "PUT",
        url: "/Messages/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            location.reload();
        },
        error: function (results) {
            //alert("Error");
        },
    });
}

function SaveMessage() {
    var obj = new Object();
    obj.isRead = false;
    var isRead = $("#IsReadSelect option:selected").val();
    if (isRead === "1") { obj.isRead = true; }
    obj.subject = $("#SubjectText").val();
    obj.message = $("#BodyText").val();
    obj.senderId = gMessage.senderId;
    obj.targetId = gMessage.targetId;
    obj.threadId = gMessage.threadId;
    obj.id = gMessage.id;
/*    obj.dealerId = gMessage.dealerId;
    obj.vin = gMessage.vin;*/


    var date = new Date(gMessage.timestamp);
    obj.timestamp = date.toJSON();
    $.ajax({
        type: "PUT",
        url: "/Messages/Save",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            if(selectedTuluId==null){
                location.reload();
            }else{
                location.href = '/messages';
            }
        },
        error: function (results) {
            //alert("Error");
        },
    });
}

async function ListDealers() {

    const results = await $.ajax({
        type: "PUT",
        url: "/Dealer/ListNames",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}

function GetDealerValues() {
    var dealerId = $("#DealerSelect option:selected").val();
    $("#DealerUsers").empty();
    $("#DealerVehicles").empty();
    if (dealerId !== '') {
        ListDealerUsers(dealerId).then(function (results) {
            var html = 'Users: <select id="UsersSelect"> <option value=""></option>';
            for (var i = 0; i < results.length; i++) {
                html += '<option value="' + results[i].id + '">' + results[i].firstName + ' ' + results[i].lastName + '</option>';
            }
            html += '</select>';
            $("#DealerUsers").append(html);
            GetDealerVehicles(dealerId).then(function (results) {
                var html = 'Vehicles: <select id="VehicleSelect"> <option value=""></option>';
                for (var i = 0; i < results.length; i++) {
                    html += '<option value="' + results[i].vin + '">' + results[i].year + ' ' + results[i].make + ' ' + results[i].model + '</option>';
                }
                html += '</select>';
                $("#DealerVehicles").append(html);
            });
        });
    }
}

function ListMessages() {
    var obj = new Object();
    obj.dealerId = $("#DealerSelect option:selected").val();
    obj.userId = gUserTest.id;
    obj.targetId = $("#UserSelect option:selected").val();
    obj.vin = $("#VehicleSelect option:selected").val();
    obj.threadId = '';
    $.ajax({
        type: "PUT",
        url: "/Messages/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            var message = results.threads;
            
            console.log(message);
            populateMessages(message);
            
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
}

function populateMessages(message){
    $("#MessagesList").empty();
    var html = '';
    newMessageArray = []
    for (var i = 0; i < message.length; i++) {
        var t = message[i];
        if(userId == t.targetId){
                person = t.senderName;
            }else if(userId == t.senderId){
                person = t.targetName
            }
        var vin = t.vin;
        var year = t.year;
        var make = t.make;
        var model = t.model;
        var p = t.messages.length - 1;
        var d = new Date(t.messages[p].timestamp);
        var subject = t.messages[p].subject;
        var date = JSON.stringify(d).slice(1,11)
        var messageObj = {
            name: person,
            threadsNo: t.messages.length,
            date: date,
            threadId: i,
            subject:subject,
            vin:vin,
            year:year,
            make:make,
            model:model,

        }
        newMessageArray.push(messageObj)
    }
    
    function compare( a, b ) {
        if ( a.date > b.date ){
          return -1;
        }
        if ( a.date < b.date ){
          return 1;
        }
        return 0;
      }
    newMessageArray.sort(compare);
    console.log(newMessageArray);
    
    for(var z = 0; z < newMessageArray.length; z++){
        html += `<li onclick="getMessage(`+newMessageArray[z].threadId+`)" class="test" data-timestamp="`+message[z].messages[0].timestamp+`">`;
        html += `<h3>` + ` ` + newMessageArray[z].name + ` - `+ newMessageArray[z].subject + `</h3>`;
        if(newMessageArray[z].vin != ""){
            html += '<p class="vehicle">Vehicle: ' + newMessageArray[z].year +" "+ newMessageArray[z].make +" "+ newMessageArray[z].model + '</p>';
        }
        html += '<p class="threads">Threads: ' + newMessageArray[z].threadsNo + '</p>';
        html += '<p class="date">' + newMessageArray[z].date + '</p>';
    }

    var categoryItems = document.querySelectorAll("[data-timestamp]");
    var categoryItemsArray = Array.from(categoryItems);

    let sorted = categoryItemsArray.sort(sorter);

    function sorter(a,b) {
        if(a.dataset.timestamp < b.dataset.timestamp) return -1;
        if(a.dataset.timestamp > b.dataset.timestamp) return 1;
        return 0;
    }

    // document.querySelector(".fix").onclick = () => sorted.forEach(e => document.querySelector("#MessagesList").appendChild(e));
    
    $("#MessagesList").append(html);
}

function getMessage(index) {
    console.log(selectedMessage);
    document.querySelector('.replyMessage').style = "display:flex;";
    document.querySelector('.messageThread').style = "display:flex;";
    document.querySelector('#MessagesList').style = "display:none;";
    var obj = new Object();
    obj.dealerId = $("#DealerSelect option:selected").val();
    obj.userId = gUserTest.id;
    obj.targetId = $("#UsersSelect option:selected").val();
    obj.vin = $("#VehicleSelect option:selected").val();
    obj.threadId = '';
    $.ajax({
        type: "PUT",
        url: "/Messages/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results.threads[index].messages);
            selectedMessage = results.threads[index];
            getFucked(selectedMessage);
        },
        error: function (results) { console.log(results.statusText); },
    });
}

function getMessages() {
    //FIX ME: I think this can be deleted.

    var obj = new Object();
    $.ajax({
        type: "GET",
        url: "/Messages/GetMessages",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { alert("error"); },
    });
}

function getFucked(messages){
    console.log(messages)
    var inboxHtml = "";
    var outboxHtml = "";
    for(var i = 0; i!= messages.messages.length;i++){
        if(messages.messages[i].senderId == userId){
            outboxHtml+='<li>';
            outboxHtml+='<h3 class="subject">Subject: '+messages.messages[i].subject+'</h3>';
            outboxHtml+='<h3 class="vehicle">Vehicle: <a href="/CarView?vin='+messages.messages[i].vin+'&dealerId=' + messages.messages[i].dealerId+'">'+" "+messages.messages[i].year+' '+messages.messages[i].make+' '+messages.messages[i].model+'</a></h3>';
            outboxHtml+='<p class="from">From: '+messages.messages[i].senderName+'</p>';
            outboxHtml+='<p class="when">Time: '+messages.messages[i].timestamp+'</p>';
            outboxHtml+='<p class="mensahe">'+messages.messages[i].message+'</p>';
            outboxHtml+='</li>';
        }
        else{
            inboxHtml+='<li>';
            inboxHtml+='<h3 class="subject">Subject: '+messages.messages[i].subject+'</h3>';
            outboxHtml+='<h3 class="vehicle">Vehicle: <a href="/CarView?vin='+messages.messages[i].vin+'&dealerId=' + messages.messages[i].dealerId+'">'+messages.messages[i].year+' '+messages.messages[i].make+' '+messages.messages[i].model+'</a></h3>';
            inboxHtml+='<p class="from">From: '+messages.messages[i].senderName+'</p>';
            inboxHtml+='<p class="when">Time: '+messages.messages[i].timestamp+'</p>';
            inboxHtml+='<p class="mensahe">'+messages.messages[i].message+'</p>';
            inboxHtml+='</li>';
        }
    }
    $('#messageInboxThreadContainer').empty();
    $('#messageInboxThreadContainer').append(inboxHtml);
    $('#messageOutboxThreadContainer').empty();
    $('#messageOutboxThreadContainer').append(outboxHtml);
}

function showInbox(){
    document.querySelector('#messageOutboxThreadContainer').style="display:none;";
    document.querySelector('#messageInboxThreadContainer').style="display:flex;";
    document.querySelector('.inbox').style="background: white;color: #79c6ac;";
    document.querySelector('.outbox').style="background: #79c6ac;color:white;";
}

function showOutbox(){
    document.querySelector('#messageInboxThreadContainer').style="display:none;";
    document.querySelector('#messageOutboxThreadContainer').style="display:flex;";
    document.querySelector('.inbox').style="background: #79c6ac;color:white;";
    document.querySelector('.outbox').style="background: white;color: #79c6ac;";
}

async function GetDealerVehicles(dealerId) {

    var obj = new Object();
    obj.dealerId = dealerId;
    obj.model = '';
    obj.make = '';
    obj.yearMin = 0;
    obj.yearMax = 0;
    obj.vehicleType = '';
    obj.priceMin = 0;
    obj.priceMax = 0;
    obj.priceType = '';
    obj.city = '';
    obj.province = '';
    obj.isSold = '';
    const results = await $.ajax({
        type: "PUT",
        url: "/Vehicle/List",
        data: obj,
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
        },
        error: function (results) { console.log(results.statusText); },
    });
    return results;
}



function SelectedTulu() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/ListTulus",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            tuluList = results;

            var html = '<label>Tulus:</label> <select id="tuluSelect";" disabled><option value=""></option>';
            for (var i = 0; i < tuluList.length; i++) {
                if(tuluList[i].id == selectedTuluId){
                    html += '<option value="' + tuluList[i].id + '" selected="selected">' + tuluList[i].firstName + ' ' +  tuluList[i].lastName + '</option>';
                }else{
                    html += '<option value="' + tuluList[i].id + '">' + tuluList[i].firstName + ' ' +  tuluList[i].lastName + '</option>';
                }
            }
            html += '</select>';
            $("#TuluList").empty();
            $("#TuluList").append(html);
            GetCurrentUser();
        },
        error: function (results) {
            //alert("Error");
        },
    });
}
function TestTuluList() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/ListTulus",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            tuluList = results;

            var html = '<label>Tulus:</label> <select id="tuluSelect";"><option value=""></option>';
            for (var i = 0; i < tuluList.length; i++) {
                html += '<option value="' + tuluList[i].id + '">' + tuluList[i].firstName + ' ' +  tuluList[i].lastName + '</option>';
            }
            html += '</select>';
            $("#TuluList").empty();
            $("#TuluList").append(html);
            GetCurrentUser();
        },
        error: function (results) {
            //alert("Error");
        },
    });
}

function LoadTulus(tulu) {
    var html = '';
    for (i = 0; i != tulu.length; i++) {
        html = html + '<li class="influencerListItem">';
        html = html + '	<div class="influencerImage">';
        html = html + '		<img src="" alt="">';
        html = html + '	</div>';
        html = html + '	<div class="influencerInfo">';
        html = html + '		<h4 class="influencerName">' + tulu[i].firstName + " " + tulu[i].lastName + '</h4>';
        html = html + '		<p class="influencerEmail">' + tulu[i].email + '</p>';
        html = html + '	</div>';
        html = html + '</li>';
    }
    $("#influencerList").empty();
    $("#influencerList").append(html);
}