

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

