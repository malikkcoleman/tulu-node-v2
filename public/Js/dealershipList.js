var dealers = null;
function LoadDealer() {
	var html = '';
	dealers = dealerList;
	for (i = 0; i != dealerList.length; i++) {
		html = html + '<li class="dealershipListItem" onclick="ViewDealer('+i+')">';
		html = html + '	<div class="dealerImage">';
		html = html + '		<img src="/image/'+ dealerList[i]._id +'" alt="">';
		html = html + '	</div>';
		html = html + '	<div class="dealerInfo">';
		html = html + '		<h4 class="dealerName">' + dealerList[i].name + '</h4>';
		html = html + '		<p>' + dealerList[i].website + '</p>';
		html = html + '	</div>';
		html = html + '</li>';
	}
	$("#dealershipList").empty();
	$("#dealershipList").append(html);
}

function ViewDealer(index){
	window.location = "/DealerListing?dealerId=" + dealerList[index]._id;
}