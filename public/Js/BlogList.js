window.onload = function () {
    loadEvents();
  };



function loadEvents(){
    
    var html='';
    for(var x=0;x!=blogList.length;x++){
        html+='<li>';
        html+='<img src="/image/'+blogList[x]._id+'">'
        // html+='<p class="tag">'+blogList[x].tag+'<span>'+blogList[x].date+'</span></p>';
        html+='<p class="tag"><span>'+blogList[x].date+'</span></p>';
        html+='<h2 class="title">'+blogList[x].blogName+'</h2>';
        html+='<p class="description">'+blogList[x].description+'</p>';
        html+='<a href="/Blog/'+blogList[x]._id+'">Read this Story<i class="fas fa-arrow-right"></i></a>';
        
        
        html+='</li>';
    }

    $('.blogList').empty();
    $('.blogList').append(html);
    
document.querySelector('.description').innerText = truncateText('.description', 107);
}

function deleteBlog(targetId){
    location.replace("/blogs/delete/"+targetId);
    // alert(targetId);
}

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}
