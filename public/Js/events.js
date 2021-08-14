var events = [{
    id:0,
    postDate:"August 12,2021",
    eventDate:"September 12,2021",
    title:"So Scare Season Ender",
    body:"2021 YYC SEASON ENDER CAR MEET FREE EVENT AND ALWAYS WILL BE Universal Ford Lincoln 2800 Barlow Trail NE Calgary, AB T1Y 1A2 Sunday, September 12 2021",
    image:"images/event_soscare.jpg"
},
{
    id:1,
    postDate:"August 10,2022",
    eventDate:"August 13,2021",
    title:"Tulu Canada Launch Party",
    body:"tulu Canada is officially launching! Come out and take our new app for a test drive! We'll have DJ third degree on some throwback 90's music, prizes to give away and a lot of partying to do!August 13, 2021, doors open at 8PM We can't wait to see everyone there!",
    image:"images/event_launch.jfif"
}];

// PUT THE EVENTS HERE! ^^^^




function loadEvents(){
    var html = "";
    for(var x=0;x!=events.length;x++){
        html+='<li>';
        html+='    <img src="'+events[x].image+'">';
        html+='    <div class="eventInfo">';
        html+='    <h3 class="title">'+events[x].title+'</h3>';
        html+='    <p class="body">'+events[x].body+'</p>';
        html+='    <p class="eventDate">'+events[x].eventDate+'</p>';
        html+='    </div>';
        html+='</li>';
    }
    $('.events').empty();
    $('.events').append(html);
}


function viewEvents(index){
    window.location = "/ViewEvents?id="+index;
    // window.location = "/CarView?vin=" + listVehicles[index].vin + "&dealerId=" + listVehicles[index].dealerId;
}

function loadAEven(){
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