// const { populate } = require("../../models/vehicleschema");
var gThread;
window.onload = function () {
	var hash;
	var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
	
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		if (hash[0] === "recipientId") {
			recipientId = hash[1];
			
		}
	}
	populatePage();
}

var exist = 0;

function populatePage(){

	$('.recipientId').val(recipientId);
	for(x=0;x!=userList.length;x++){
		if(userList[x]._id == recipientId){
			console.log(userList[x]._id);

			var html ="";
			html+="<div class='userImage' style='background:url(/image/"+recipientId+");background-size:contain;background-position:center;'>";
			html+="</div>";
			html+="<p class='messengerName'>"+userList[x].fName+" "+userList[x].lName+"</p>";
			$('.header').append(html);
		}
	}

	for(x=0;x!=thread.length;x++){
		if(thread[x].participants[0] == recipientId){
			console.log('Recipient Matched')
			if(thread[x].participants[1]== user._id){
				console.log('Recipient and user matched');
				exist = 1;
				$('.exist').val('1');
				$('.targetId').val(thread[x]._id);
				gThread = thread[x]._id;
				populateInbox(thread[x]._id);
			}
			else{
				exist = 0;
				$('.exist').val('0');
			}
		}else if(thread[x].participants[0] == user._id){
			console.log('User Matched')
			if(thread[x].participants[1] == recipientId){
				console.log('Recipient and user matched')
				exist = 1;
				$('.exist').val('1');
				$('.targetId').val(thread[x]._id);
				gThread = thread[x]._id;
				populateInbox(thread[x]._id);
			}
			else{
				exist = 0;
				$('.exist').val('0');
			}
		}
	}
}

// setTimeout(function(){ window.location.reload(); }, 10000);

function populateInbox(threadId){
	

	$('#messageBox').empty();
	var html;
	html='<iframe src="/messengerBox/?recipientId='+recipientId+'" frameborder="0"></iframe>';
	$('#messageBox').append(html);
	// $('.messageBox').empty();
	// for(z=0;z!=messages.length;z++){
	// 	if(messages[z].targetId == threadId){
	// 		var html="";
	// 		if(messages[z].senderId == user._id){
	// 			html+='<div class="participantTwo">';
	// 			html+='	<p>';
	// 			html+=messages[z].message;
	// 			html+='	</p>';
	// 			html+='	<div class="image" style="background:url(/image/'+messages[z].senderId+');background-size:contain;background-position:center;">';
	// 			html+='	</div>';
	// 			html+='</div>';
	// 		}else{
	// 			html+='<div class="participantOne">';
	// 			html+='	<div class="image" style="background:url(/image/'+messages[z].senderId+');background-size:contain;background-position:center;">';
	// 			html+='	</div>';
	// 			html+='	<p>';
	// 			html+=messages[z].message;
	// 			html+='	</p>';
	// 			html+='</div>';
	// 		}
	// 		$('.messageBox').append(html);
	// 	}
	// }
	// messageBoxScrollDown();
}

function messageBoxScrollDown(){
	var objDiv = document.querySelector(".messageBox");
	objDiv.scrollTop = objDiv.scrollHeight;
}

