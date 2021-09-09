
window.onload = function () {
    populateFields();
}

function populateFields(){
    $('#dealerId').val(dealer[0]._id);
    // $('#userId').val(user._id);
    $('#vin').val(vehicle[0].vin);
    $('#vehicle').val(vehicle[0].year +" "+vehicle[0].make +" "+vehicle[0].model);
    $('#vehiclePrice').val(vehicle[0].maxPrice);
    // $('#customer').val(user.fName+" "+user.lName);
    $('#dealership').val(dealer[0].name);

    $('.vehicleLabel').append("<span>"+vehicle[0].year +" "+vehicle[0].make +" "+vehicle[0].model+"</span>");
    $('.priceLabel').append("<span>"+vehicle[0].maxPrice+"</span>");
    $('.dealershipLabel').append("<span>"+dealer[0].name+"</span>");
    // $('.customerLabel').append("<span>"+user.fName+" "+user.lName+"</span>");
    var html="";
    for(var x=0;x!=tulus.length;x++){
            html+='<li onclick="selectTulu('+x+')">';
            html+='    <img src="/image/'+ tulus[x]._id +'" alt="">';
            html+='    <div class="tuluInfo">';
            html+='        <p class="name">'+tulus[x].fName+ ' ' +tulus[x].lName+ '</p>';
            html+='        <p class="email">'+tulus[x].email+'</p>';
            html = html + '		<div class="userRating">';
			if(tulus[x].ratings == 5){
				for(i=0;i!=5;i++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
			}else if(tulus[x].ratings == 4){
				for(i=0;i!=4;i++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
				html = html + '		    <i class="far fa-star"></i>';
			}else if(tulus[x].ratings == 3){
				for(i=0;x!=3;i++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
			}else if(tulus[x].ratings == 2){
				for(i=0;i!=2;i++){
					html = html + '		    <i class="fas fa-star"></i>';
				}
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
				html = html + '		    <i class="far fa-star"></i>';
			}else if(tulus[x].ratings == 1){
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
            html+='    </div>';
            html+='</li>';
    }
    $('.tuluList').append(html);
}

function selectTulu(index){
    document.querySelector('.tuluPicker').style = "display:none;";
    $('#tuluId').val(tulus[index]._id);
    $('#tulu').val(tulus[index].fName + " " + tulus[index].lName)
    $('.tuluLabel').append("<span>"+tulus[index].fName + " " + tulus[index].lName+"</span>")
}


function showPrivacyTerms(){
    document.querySelector('.privacyTerms').style="display:flex;"
}

function iAgree(){
    document.querySelector('.privacyTerms').style="display:none;"
    document.querySelector('.saveTestDrive').style="opacity:1;";
    document.querySelector('.saveTestDrive').disabled=false;
}

function skip(){
    document.querySelector('.tuluPicker').style = "display:none;";
    $('.tuluLabel').append("<span>Skipped</span>")
}


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

var hour = today.getHours();
var minutes = today.getMinutes();
console.log(hour)
console.log(minutes)

today = yyyy+'-'+mm+'-'+dd+'T'+hour+':'+minutes;
console.log(today)
document.getElementById("preferred").setAttribute("min", today);
document.getElementById("alternate").setAttribute("min", today);
