

// PUT THE EVENTS HERE! ^^^^

window.onload = function () {
    loadEvents();
  };


function loadEvents(){
    var html = "";
    if(event.length == 0){
        html+='<h1>No featured events listed.</h1>';
    }else{
        for(var x=0;x!=event.length;x++){
            html+='<li>';
            html+='    <img src="image/'+event[x]._id+'">';
            html+='    <div class="eventInfo">';
            html+='    <h3 class="title">'+event[x].eventName+'</h3>';
            html+='    <p class="body">'+event[x].description+'</p>';
            html+='    <p class="eventDate">'+event[x].date+'</p>';
            html+='    </div>';
            html+='</li>';
        }
    }
    $('.events').empty();
    $('.events').append(html);
}


function viewEvents(index){
    window.location = "/ViewEvents?id="+index;
    // window.location = "/CarView?vin=" + listVehicles[index].vin + "&dealerId=" + listVehicles[index].dealerId;
}

function loadAEvent(){
    var html = "";
    
    // events[eventId]4
    console.log(eventId)

    html+='<div class="banner" style="background:url(https://picsum.photos/300/150);">';
    html+='    <h1 class="title">'+events[eventId].title+'</h1>';
    html+='    <h2 class="date">'+events[eventId].eventDate+'</h2>';
    html+='</div>';
    html+='<p class="body">';
    html+=events[eventId].body;
    html+='</p>';

    $('.event').empty();
    $('.event').append(html);
}