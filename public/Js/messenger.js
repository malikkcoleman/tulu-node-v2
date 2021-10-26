// const { populate } = require("../../models/vehicleschema");

window.onload = function () {
	var hash;
	var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
	
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		if (hash[0] === "tuluId") {
			tuluId = hash[1];
			
		}
	}
	populatePage();
}

var exist = 0;

function populatePage(){

	$('.tuluId').val(tuluId);
	for(x=0;x!=tulu.length;x++){
		if(tulu[x]._id == tuluId){
			console.log(tulu[x]._id);

			var html ="";
			html+="<div class='userImage' style='background:url(/image/"+tuluId+");background-size:contain;background-position:center;'>";
			html+="</div>";
			html+="<p class='messengerName'>"+tulu[x].fName+" "+tulu[x].lName+"</p>";
			$('.header').append(html);
		}
	}

	for(x=0;x!=thread.length;x++){
		if(thread[x].participants[0] == tuluId){
			console.log('Tulu Matched')
			if(thread[x].participants[1]== user._id){
				console.log('tulu and user matched');
				exist = 1;
				$('.exist').val('1');
				$('.targetId').val(thread[x]._id);
				populateInbox(thread[x]._id);
			}
			else{
				exist = 0;
				$('.exist').val('0');
			}
		}else if(thread[x].participants[0] == user._id){
			console.log('User Matched')
			if(thread[x].participants[1] == tuluId){
				console.log('tulu and user matched')
				exist = 1;
				$('.exist').val('1');
				$('.targetId').val(thread[x]._id);
				populateInbox(thread[x]._id);
			}
			else{
				exist = 0;
				$('.exist').val('0');
			}
		}
	}
}

function populateInbox(threadId){
	for(z=0;z!=messages.length;z++){
		if(messages[z].targetId == threadId){
			var html="";
			if(messages[z].senderId == user._id){
				html+='<div class="participantTwo">';
				html+='	<p>';
				html+=messages[z].message;
				html+='	</p>';
				html+='	<div class="image" style="background:url(/image/'+messages[z].senderId+');background-size:contain;background-position:center;">';
				html+='	</div>';
				html+='</div>';
			}else{
				html+='<div class="participantOne">';
				html+='	<div class="image" style="background:url(/image/'+messages[z].senderId+');background-size:contain;background-position:center;">';
				html+='	</div>';
				html+='	<p>';
				html+=messages[z].message;
				html+='	</p>';
				html+='</div>';
			}
			$('.messageBox').append(html);
		}
	}
}