

function LoadTulus(tulu) {
	var html = '';
	tuluList = tulu;
	for (i = 0; i != tulu.length; i++) {
		if(tulu[i].status=="active"){
			html = html + '<li class="influencerListItem" onclick="ViewTulu('+i+')">';
			html = html + '	<div class="influencerImage">';
			html = html + '		<img src="/image/'+ tulu[i]._id +'" >';
			html = html + '	</div>';
			html = html + '	<div class="influencerInfo">';
			html = html + '		<h4 class="influencerName">' + tulu[i].fName +" "+ tulu[i].lName + '</h4>';
			html = html + '		<div class="userRating">';
			if(tulu[i].ratings == 5){
				for(x=0;x!=5;x++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
			}else if(tulu[i].ratings == 4){
				for(x=0;x!=4;x++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
				html = html + '		    <i class="far fa-star"></i>';
			}else if(tulu[i].ratings == 3){
				for(x=0;x!=3;x++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
			}else if(tulu[i].ratings == 2){
				for(x=0;x!=2;x++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
			}else if(tulu[i].ratings == 1){
				html = html + '		    <i class="fas fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
			}else{
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
			}
			
			html = html + '		</div>';
			// html = html + '		<p class="influencerPhoneNumber">' + tulu[i].phoneNumber + '</p>';
			html = html + '		<p class="influencerEmail">' + tulu[i].email + '</p>';
			// html = html + '<a href="mailto: '+tulu[i].email+'"><button>Contact Tulu</button></a>';
			html = html + '	</div>';
			html = html + '</li>';
		}
	}
	$("#influencerList").empty();
	$("#influencerList").append(html);
}

function ViewTulu(index){
	window.location = "/tulu/viewTulu?tuluId=" + tuluList[index]._id;
}