

// PUT THE EVENTS HERE! ^^^^

window.onload = function () {
    loadBlog();
  };


function loadBlog(){
    var html = "";
        html+='<img src="/image/'+blog[0]._id+'">';
        html+='<h1>'+blog[0].blogName+'</h1>';
        html+='<p class="date">'+blog[0].date+'</p>';
        html+='<p class="description">'+blog[0].description+'</p>';
    $('.blogContainer').empty();
    $('.blogContainer').append(html);
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