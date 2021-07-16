function populateDealerships(dealers){
    var html = "";
    for(x=0;x!=dealers.length;x++){
        html+='<option value="'+dealers[x].uuid+'">'+dealers[x].name+'</option>';
    }
    $('#targetId').append(html);
}