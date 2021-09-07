window.onload = function () {
    loadEvents();
  };



function loadEvents(){
    
    var html='';
    for(var x=0;x!=eventList.length;x++){
        html+='<li>';
        html+='<p>'+eventList[x].eventName+'</p>';
        html+='<button onclick="deleteEvent(`'+eventList[x]._id+'`)">Delete</button>';
        html+='</li>';
    }

    $('.eventList').empty();
    $('.eventList').append(html);
}

function deleteEvent(targetId){
    location.replace("/events/delete/"+targetId);
    // alert(targetId);
}