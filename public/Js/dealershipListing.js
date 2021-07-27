window.onload = function () {

	var hash;
	var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
	
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		if (hash[0] === "dealerId") {
			gDealerId = hash[1];
		}
	}
	populateDealer();
}

function populateDealer(){
	for(var x = 0; x!= dealerList.length;x++){
		if(dealerList[x]._id == gDealerId){
			DealerUuid = dealerList[x].uuid;
			var html ="";
			html+="<h2>"+dealerList[x].name+"</h2>"
			html+="<p>"+dealerList[x].website+"</p>"
			$('.heading').empty();
			$('.heading').append(html);
		}
	}
	populateVehicle();
}

function populateVehicle(){
	var html = "";
	var text = '';
	for(var x=0;x!= vehicleList.length;x++){
		if(vehicleList[x].targetId == DealerUuid){
			html+='<li class="vehicleListItemsSmallView">';
			html+='    <img src="' + text + '" class="carImage" alt="car-image"/>';
			html+='    <div class="carDetails">';
			html+='        <h2 class="carName">' + vehicleList[x].year + ' ' + vehicleList[x].make + ' ' + vehicleList[x].model + '</h2>';
			html+='        <p class="carPrice">$'+vehicleList[x].maxPrice + '</p>';
			html+='        <p class="carMileage">1234567890 Kms</p>';
			html+='        <button class="moreInfo" onclick="carView(' + x + ')">View Vehicle</button>';
			html+='    </div>';
			html+='</li>';
		}

	}
	$("#dealershipListingList").empty();
	$("#dealershipListingList").append(html);
	document.querySelector('.loading').style = 'display:none;';
}   

function carView(index){
	location.replace("/carview"+ "?id=" + index);
}