var dealers = null;
function LoadDealer() {
	var html = '';
	dealers = dealerList;
	for (i = 0; i != dealerList.length; i++) {
		html = html + '<li class="dealershipListItem">';
		html = html + '	<div class="dealerImage" onclick="ViewDealer('+i+')">';
		for(x=0;x!=dealerAdminList.length;x++){
			if(dealerList[i].uuid == dealerAdminList[x].dealerId){
				html = html + '		<img src="/image/'+ dealerAdminList[x]._id +'" alt="">';
			}
		}
		html = html + '	</div>';
		html = html + '	<div class="dealerInfo">';
		html = html + '		<h4 class="dealerName" onclick="ViewDealer('+i+')">' + dealerList[i].name + '</h4>';
		html = html + '		<a href="'+dealerList[i].website+'" target="_blank"><p>' + dealerList[i].website + '</p></a>';
		for(z=0;z!=addressList.length;z++){
			if(addressList[z].targetId == dealerList[i].uuid){
				html = html + '		<p>' + addressList[z].street + " " + addressList[z].city + ", " + addressList[z].province +  '</p>';
			}
		}
		html = html + '		<p class="amvic">' + dealerList[i].amvic + '</p>';
		html = html + '	</div>';
		html = html + '	<div><a href="/dealerships/delete/'+ dealerList[i].uuid +'"><i class="far fa-trash-alt"></i></a></div>'
		html = html + '</li>';
	}
	$("#dealershipList").empty();
	$("#dealershipList").append(html);
}

function ViewDealer(index){
	window.location = "/DealerListing/" + dealerList[index].uuid;
}