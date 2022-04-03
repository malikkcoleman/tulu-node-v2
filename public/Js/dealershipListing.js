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

			DealerUuid = dealerList[0].uuid;
			var html ="";
			html+="<h2>"+dealerList[0].name+"</h2>"
			html+="<a href='"+dealerList[0].website+"'target='_blank'><p>"+dealerList[0].website+"</p></a>"
			html+="<p class='address'>"+address[0].street+" "+address[0].city+", "+address[0].province+"</p>"
			html+="<p class='amvic'>"+dealerList[0].amvic+"</p>"
			$('.heading').empty();
			$('.heading').append(html);

	populateVehicle();
}

function getVehicleImages(vin){
	display_image = ''
	console.log(vin)
	
	for(var i=0; i < vehicleimages.length; i++){
		if(vehicleimages[i].vin == vin && vehicleimages[i].is_display_photo == true){
			display_image = vehicleimages[i].image;
			console.log(display_image);
		}
	}
	
	if (display_image == ''){
		display_image = '../images/noimageavailable.jpg'
	}

	console.log(display_image)
	return display_image;
}
function populateVehicle(){
	var html = "";
	var text = '';
	var image = '';
	for(var x=0;x!= vehicleList.length;x++){
			image = getVehicleImages(vehicleList[x].vin)
			html+='<li class="vehicleListItemsSmallView">';
			html+='	   <a class="imgContainer" href="/carview/'+ vehicleList[x].vin +'" style="">';
			html+='	       <img src="'+ image +'" class="carImage" alt="car-image"/>';
			html+='	   </a>';
			html+='    <div class="carDetails">';
			html+='        <h2 class="carName">' + vehicleList[x].year + ' ' + vehicleList[x].make + ' ' + vehicleList[x].model + '</h2>';
			html+='        <p class="carPrice">$'+vehicleList[x].maxPrice + '</p>';
			html+='        <p class="carMileage">'+vehicleList[x].mileage +' Kms</p>';
			html+='        <a href="/carview/'+ vehicleList[x].vin +'"><button class="moreInfo">View Vehicle</button></a>';
			html+='    </div>';
			html+='</li>';
	}
	$("#dealershipListingList").empty();
	$("#dealershipListingList").append(html);
	document.querySelector('.loading').style = 'display:none;';
}   

function carView(index){
	location.replace("/carview"+ "?id=" + index);
}


function SearchVehicles(){
    vehicleList = [];
    for(var x=0;x!=vehicleListDefault.length;x++){
        if($('#MakeSearch').val()!=""){
            if(vehicleListDefault[x].make == $('#MakeSearch').val()){
                if($('#VehicleTypeSearch').val()!= ""){
                    if(vehicleListDefault[x].vehicleType == $('#VehicleTypeSearch').val()){
                        vehicleList.push(vehicleListDefault[x]);
                    }
                }else{
                    vehicleList.push(vehicleListDefault[x]);
                }
            }
        }else{
            if($('#VehicleTypeSearch').val()!= ""){
                if(vehicleListDefault[x].vehicleType == $('#VehicleTypeSearch').val()){
                    vehicleList.push(vehicleListDefault[x]);
                }
            }
        }
    }


	$('.filterBreadCrumbs span').empty()
    if($('#MakeSearch').val()!=""){
        $('.filterBreadCrumbs span').append($('#MakeSearch').val().toUpperCase()+" ")
    }

    if($('#VehicleType').val()!=""){
        $('.filterBreadCrumbs span').append($('#VehicleTypeSearch').val().toUpperCase()+" ")
    }
    
    console.log(vehicleList)
	
    populateVehicle(vehicleList);
}