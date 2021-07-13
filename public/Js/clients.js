

function populateClientList(clients){
    var html = '';
	for (i = 0; i != clients.length; i++) {
		html = html + '<li class="clientListItem">';
		html = html + '	<div class="clientInfo">';
		html = html + '		<h4 class="clientName">' + clients[i].userFirstName + ' ' + clients[i].userLastName +'</h4>';
		html = html + '		<p class="clientPhoneNumber">' + clients[i].userEmail + '</p>';
		html = html + '		<p class="clientListing">' + clients[i].notes + '</p>';
		html = html + '	</div>';
		html = html + '</li>';
	}
	$("#clientList").empty();
	$("#clientList").append(html);
}