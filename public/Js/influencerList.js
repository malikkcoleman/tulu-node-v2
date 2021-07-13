var tuluList = null;

function LoadTulus(tulu) {
	var html = '';
	tuluList = tulu;
	for (i = 0; i != tulu.length; i++) {
		html = html + '<li class="influencerListItem" onclick="ViewTulu('+i+')">';
		html = html + '	<div class="influencerImage">';
		html = html + '		<img src="" alt="">';
		html = html + '	</div>';
		html = html + '	<div class="influencerInfo">';
		html = html + '		<h4 class="influencerName">' + tulu[i].firstName +" "+ tulu[i].lastName + '</h4>';
		// html = html + '		<p class="influencerPhoneNumber">' + tulu[i]. + '</p>';
		//html = html + '		<p class="influencerEmail">' + tulu[i].email + '</p>';
		// html = html + '<a href="mailto: '+tulu[i].email+'"><button>Contact Tulu</button></a>';
		html = html + '	</div>';
		html = html + '</li>';
	}
	$("#influencerList").empty();
	$("#influencerList").append(html);
}

function ViewTulu(tuluId){
	window.location = "/home/viewTulu?tuluId=" + tuluList[tuluId].id;
}