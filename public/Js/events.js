var events = [{
    id:0,
    postDate:"Jan 1,2022",
    eventDate:"Jan 1,2021",
    title:"Lorem Ipsum",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget magna sit amet mauris finibus.",
    image:"https://picsum.photos/300/150"
},
{
    id:1,
    postDate:"Dec 1,2022",
    eventDate:"Dec 1,2021",
    title:"Lorem Ipsum",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget magna sit amet mauris finibus.",
    image:"https://picsum.photos/300/150"
},
{
    id:2,
    postDate:"Feb 1,2022",
    eventDate:"Feb 1,2021",
    title:"Lorem Ipsum",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget magna sit amet mauris finibus.",
    image:"https://picsum.photos/300/150"
},
{
    id:3,
    postDate:"Mar 1,2022",
    eventDate:"Mar 1,2021",
    title:"Lorem Ipsum",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget magna sit amet mauris finibus.",
    image:"https://picsum.photos/300/150"
},
{
    id:4,
    postDate:"Apr 1,2022",
    eventDate:"Apr 1,2021",
    title:"Lorem Ipsum",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget magna sit amet mauris finibus.",
    image:"https://picsum.photos/300/150"
}];

// PUT THE EVENTS HERE! ^^^^




function loadEvents(){
    var html = "";
    for(var x=0;x!=events.length;x++){
        html+='<li onclick="viewEvents('+x+')">';
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
    window.location = "/Home/ViewEvents?id="+index;
    // window.location = "/Home/CarView?vin=" + listVehicles[index].vin + "&dealerId=" + listVehicles[index].dealerId;
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