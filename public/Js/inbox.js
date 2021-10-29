// const { populate } = require("../../models/vehicleschema");

window.onload = function () {
	populatePage();
}

function populatePage(){
	for(x=0;x!=thread.length;x++){
		for(y=0;y!=thread[x].participants.length;y++){
			if(thread[x].participants[y] == user._id){
				console.log(thread[x]);

				var threadParticipant = "";

				for(z=0;z!=thread[x].participants.length;z++){
					if(thread[x].participants[z] != user._id){
						threadParticipant = thread[x].participants[z];
						console.log(threadParticipant)
					}
				}

				var html = "";
				
				html+='<li onclick="goToMessage(`'+threadParticipant+'`)">';
				html+="<div class='userImage' style='background:url(/image/"+threadParticipant+");background-size:contain;background-position:center;'>";
				html+="</div>";
				html+='	<p>';
				for(w=0;w!=userList.length;w++){
					if(userList[w]._id == threadParticipant){
						html+=userList[w].fName+" "+userList[w].lName;
					}
				}
				html+='	</p>';
				html+='</li>';
				$('.inboxList').append(html);
			}
		}
	}
}

function goToMessage(threadParticipant){
	window.location = "/messenger/?recipientId="+threadParticipant;
}